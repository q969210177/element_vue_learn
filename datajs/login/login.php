<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$user = $_POST["user"];
$userStatus = select($link,"login","*","userName='$user'");
if ($userStatus) {
    print_r(json_encode(["code"=>"0","data"=>$userStatus]));
} else {
  print_r(json_encode(["code"=>"404","error"=>"没有该用户,请注册"]));
}

?>