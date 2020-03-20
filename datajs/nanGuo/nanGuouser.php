<?php
header("Access-Control-Allow-Origin:*");
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
include "../core/mysql.func.php";
$link = cc();
$start = $_GET["start"]===null?0:$_GET["start"];//获取start值
$count = $_GET["count"]===null?5:$_GET["count"];//获取count值
$serach = $_GET["serach"];
$sum  = select($link,"groupbuy","count(1)");
if ($serach ===null) {
    $data =  select($link, "groupbuy", "*", "", "", "", "$start,$count");
    $sum  = select($link,"groupbuy","count(1)");
    print_r(json_encode(["count"=>$sum,"data"=>$data]));
} else {
    $data =  select($link, "groupbuy", "*","groupBuyName  like '%$serach%' or groupBuyUserName  like '%$serach%' or groupBuyIdUserTel  like '%$serach%' or groupBuyIdLouDong  like '%$serach%' or groupBuyHouseNumber like '%$serach%'", "", "", "$start,$count");
    $sum =  select($link, "groupbuy", "count(1)","groupBuyName  like '%$serach%' or groupBuyUserName  like '%$serach%' or groupBuyIdUserTel  like '%$serach%' or groupBuyIdLouDong  like '%$serach%' or groupBuyHouseNumber like '%$serach%'", "", "", "$start,$count");
    print_r(json_encode(["count"=>$sum,"data"=>$data]));
}
?>