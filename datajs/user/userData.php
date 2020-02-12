<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$userId = $_GET["menuId"];
$userData = select($link,"user","*","userId = $userId");
print_r(json_encode($userData));
?>