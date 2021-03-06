<?php
class searchMod extends commonMod {

	public function __construct()
    {
        parent::__construct();
    }
    
	public function index() {
       $keyword=urldecode($_GET['keyword']);
        if(!is_utf8($keyword))
        {
            $keyword=auto_charset($keyword,'gbk','utf-8');
        }
		$keyword = msubstr(in($keyword),0,10);
        $keywords = preg_replace ('/\s+/',' ',$keyword); 
        $keywords=explode(" ",$keywords);
        if(empty($keywords[0])){
        	$this->alert('Please enter keywords！');
        }

        /*hook*/
        $this->plus_hook('search','index',$keywords);
        /*hook end*/

        //获取栏目
        $cid=model('category')->getcat(intval($_GET['cid']));
        if($cid){
            $where_cid=' B.cid in('.$cid.') AND ';
        }

        //获取搜索模型
        $model=intval($_GET['model']);
        if(empty($model)){
        	$model=0;
        }
        //分页处理
        $url=__INDEX__.'/search/index/model-'.$model.'-keyword-'.urlencode($keyword).'-page-{page}.html';
        $listrows = $this->config['TPL_SEARCH_PAGE'];
        if(empty($listrows)){
            $listrows=20;
        }
        $limit=$this->pagelimit($url,$listrows);

        //处理搜索字段
        $where='A.status=1 AND '.$where_cid;
        foreach ($keywords as $value) {
            switch ($model) {
                //标题+描述+关键词
                case '1':
                    $where2.= 'or A.title like "%' . $value . '%" or A.keywords like "%' . $value . '%" or A.description like "%' . $value . '%" ';
                    break;
                //标题+描述+关键词+全文
                case '2':
                    $where2.= 'or A.title like "%' . $value . '%" or A.keywords like "%' . $value . '%" or A.description like "%' . $value . '%" or C.content like "%' . $value . '%" ';
                    break;
                //标题
                default:
                    $where2.= 'or A.title like "%' . $value . '%" ';
                    break;
            }
        }
        $lang=model('lang')->langid();
        $where2='('.substr($where2,2).') AND B.lang='.$lang;
        //获取搜索列表
        $this->loop=model('search')->search_list($where.$where2,$limit,$model);
        //获取分页数
        $count=model('search')->search_count($where.$where2,$model);

        //导航
        $this->nav=array(
            0=>array('name'=>'Search','url'=>''),
            1=>array('name'=>$keyword,'url'=>__INDEX__.'/search/index/model-'.$model.'-keyword-'.urlencode($keyword).'.html'),
            );

        //信息
        $info=array(
            'name'=>$keyword,
            'model'=>$model,
            );

        //MEDIA信息
        $this->common=model('pageinfo')->media($info['name'].' - 搜索',$keyword);

        $this->keyword=$keyword;
        $this->info=$info;
        $this->page=$this->page($url, $count, $listrows);
        //获取上一页代码
        $this->prepage=$this->page($url, $count, $listrows,'',1);
        //获取下一页代码
        $this->nextpage=$this->page($url, $count, $listrows,'',2);
        $this->count=$count;
        $this->display($this->config['TPL_SEARCH']);

	}


}