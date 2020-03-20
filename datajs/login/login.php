<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$user = $_POST["user"];
$userStatus = select($link,"user","*","userName='$user'");
// $azStr = "qwertyuiopasdfghjklzxcvbnm";
// $azLen = strlen($azStr);
// for ($i = 1; $i < 5; $i++) {
//     $sunm = rand(0,$azLen);
//     $userInfo = $azStr[$sunm].$userInfo;
// }
if ($userStatus) {
    $userInfo =  $userInfo.rand(9999,99999);
    // "sum"=> $userInfo
    print_r(json_encode(["code"=>"0","data"=>$userStatus]));
} else {
  print_r(json_encode(["code"=>"404","error"=>"没有该用户,请注册"]));
}

?>