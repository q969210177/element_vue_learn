<?php 
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
//链接mysql
$link = cc();
//获取用户id
$imgPath = select($link,"wel_img_url");
$code = rand(0, count($imgPath));
print_r(json_encode($imgPath[$code]));

?>