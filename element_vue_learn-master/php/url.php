<?php
header("Content-type:text/html;charset=utf-8");
// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  

include "../core/mysql.func.php";
//error_reporting(E_ALL ^ E_NOTICE);
$link = cc();


$imgid = rand(1,40);
$re = select($link,"end_img","*","img_id=$imgid");
$end = count($re);

print_r(json_encode($re));
?>