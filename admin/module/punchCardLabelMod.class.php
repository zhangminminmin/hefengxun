<?php

/*
 * @平台素材分类列表
 * @Author  Jeff<jeff.chou@aliyun.com>    2016-9-21
 * @Version 1.0
 */

class punchCardLabelMod extends commonMod {

    protected $tablename = 'u';

    public function __construct() {

        parent::__construct();
    }
    // 辅助函数
    public function newCategorys()
    {
        $data = model("u")->data_list("punch_card_label", "where id > 0 and pid = 0", " order by id desc");
        if (! empty($data)) {
            foreach ($data as $k => $val) {
                $data[$k]['label'] = $val['name'];
            }
        }
        $list = $this->categorys($data);
        return $list;
    }
    // 平台素材分类列表
    public function index() {
        $data = model("u")->data_list("punch_card_label", "where id > 0 and pid = 0", " order by id desc");
        if (! empty($data)) {
            foreach ($data as $k => $val) {
                $data[$k]['label'] = $val['name'];
            }
        }
        $list = $this->categorys($data);

        $this->assign("list", $list);
        //分页处理
        $this->assign("title", "打卡标签");
        $this->show();
    }

    // 分类列表
    public function categorys($data, $pid='pid', $id='id'){
        //第一步 构造数据
        $items = array();
        if (empty($data)){
            return array();
        }
        foreach($data as $value){
            $items[$value['id']] = $value;
        }
        //第二部 遍历数据 生成树状结构
        $tree = array();
        foreach($items as $key => $value){
            if(isset($items[$value['pid']])){
                $items[$value['pid']]['children'][] = &$items[$key];
            }else{
                $tree[] = &$items[$key];
            }
        }
        $list = array(
            array(
                "id" => 0,
                "label" => "标签",
                "name" => "标签",
                "children" => $tree,
            )
        );
        return $list;
    }

    /**
     * 添加分类
     * id 添加分类上级的id
     * name 添加分类的名称
     */
    public function addSave()
    {
        $input = $this->post;
        if (empty($input['name'])) {
            $this->ajaxReturn(202, "标签名称不能为空");
        }

        $info = $this->data_getinfo("punch_card_label", " name = '" . $input['name'] . "'");
        if (! empty($info)) {
            $this->ajaxReturn(202, "该标签名称已经存在 请勿重复添加");
        }
        $data = array(
            "pid" => 0,
            "name" => $input['name'],
            "created_at" => time(),
            "user_id" => 0,
        );

        $addsort = $this->data_add("punch_card_label", $data);
        $list = $this->newCategorys();
        $this->ajaxReturn(200, "标签添加成功", $list);
    }

    /**
     * id 编辑的信息id
     * name 编辑的分类名称 name
     */
    public function editSave()
    {
        $input = $this->post;
        if (empty($input['id'])) {
            $this->ajaxReturn(202, "参数错误请刷新重试");
        }

        if (empty($input['name'])) {
            $this->ajaxReturn(202, "标签名称不能为空");
        }

        $info = $this->data_getinfo("punch_card_label", " id = '" . $input['id'] . "'");
        if (empty($info)) {
            $this->ajaxReturn(202, "此标签不存在或者已经被删除");
        }

        $categoryInfo = $this->data_getinfo("punch_card_label", " id != '" . $input['id'] . "' and pid = 0 and name = '" . $input['name'] . "'");
        if (!empty($categoryInfo)) {
            $this->ajaxReturn(202, "此标签已经存在 请勿重复操作");
        }

        $data = array(
            "name" => $input['name'],
        );

        $editCategory = $this->data_edit("punch_card_label", $data, " id='" . $input['id'] . "'");
        $list = $this->newCategorys();
        if (empty($editCategory)) {
            $this->ajaxReturn(202, "参数错误请刷新重试");
        } else {
            $this->ajaxReturn(200, "标签编辑成功", $list);
        }
    }

    /**
     * 删除分类接口
     */
    public function delCategory()
    {
        $input = $this->post;
        if (intval($input['id']) <= 0) {
            $this->ajaxReturn(202, "参数错误请刷新重试");
        }

        // 查看下面是否有分类
//      $cateInfo = $this->data_getinfo("source_word_sort", " pid = '" . $input['id'] . "'");
        $cateInfo = $this->data_getinfo("punch_card", " find_in_set({$input['id']} , 'label_ids') ");
        $sql = 'select * from dc_punch_card where FIND_IN_SET(' . $input['id'] . ', label_ids)';
        $cateInfo = $this->model->query($sql);

        if (!empty($cateInfo[0])) {
            $this->ajaxReturn(202, "此分类已被选择 无法删除");
        }

        $del = $this->data_del("punch_card_label", " id = '" . $input['id'] . "'");
        $list = $this->newCategorys();
        if (empty($del)) {
            $this->ajaxReturn(202, "网络原因请刷新重试");
        } else {
            $this->ajaxReturn(200, "删除成功", $list);
        }
    }
}