<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$userId = select($link,"login","count(1)")[0]["count(1)"];
$arr = ["userId"=>$userId,"userName"=>"test","menu"=>2];
$userName = $_POST["userName"];
$userNameStatus = select($link,"login","userName","userName = '$userName'");
if ($userNameStatus) {
    print_r(json_encode(["code"=>304,"error"=>"该用户名已被注册"]));
}else{
    $re = tianjia($link,"login",$arr);
   if ($re===1) {
       print_r(json_encode(["code"=>0,"data"=>"添加成功"]));
   } else {
    print_r(json_encode(["code"=>555,"data"=>"添加失败,请检查数据内容"]));
   }
   
}
// print_r($userNameArr);
// $re = tianjia($link,"login",$arr);
// print_r($re)
?>