<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$start = $_GET["start"];//获取start值
$count = $_GET["count"];//获取count值
$keyword = $_GET["keyword"];//获取搜索字段
$tid = $_GET["tid"];
$status = $_GET["status"];//状态值
if ($status != null ) { //判断是哪个页面
    $arr =  select($link, "zhuhu_title", "*", "", "", "", "$start,$count");
    $sum  = select($link,"zhuhu_title","count(1)");//获取总条数
    $arr = ["sum"=>$sum[0],"data"=>$arr];//拼接带总条数的数组
}else {
    if ($keyword != null) { //判断有没有搜索
        $arr =  select($link, "zhuhu_title", "*", "title like '%$keyword%' ");
        $sum  = select($link, "zhuhu_title", "count(1)", "title like '%$keyword%'"); //获取总条数
        $arr = ["sum" => $sum[0], "data" => $arr];//拼接带总条数的数组
    } else {
        if ($start != null && $count != null) { //判断有没有传页码值
            $arr =  select($link, "zhihu", "*", "title_id = $tid", "", "", "$start,$count");
            $sum  = select($link, "zhihu", "count(1)", "title_id = $tid"); //获取总条数
            $arr = ["sum" => $sum[0], "data" => $arr];//拼接带总条数的数组
        } elseif ($start == null && $count == null) {
            $start = 0;
            $count = 10;
            $sum  = select($link, "zhihu", "count(1)","title_id=$tid"); //获取总条数
            $arr =  select($link, "zhihu", "*", "title_id = $tid", "", "", " $start, $count");
            $arr = ["sum" => $sum[0], "data" => $arr];//拼接带总条数的数组
        }
    }
} 

    
   
    print_r(json_encode($arr));
    


  

?>
