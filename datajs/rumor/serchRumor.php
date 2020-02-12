<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$serach = $_GET["serachText"];
//select($link, "zhuhu_title", "*", "title like '%$keyword%' ");
$rumorData = select($link,"rumor","*","rumorTitle like '%$serach%'");
if ($rumorData) {
    print_r(json_encode(["code"=>"0","data"=>$rumorData]));
} else {
    print_r(json_encode(["code"=>"404","error"=>"沒有相关数据"]));
}


?>