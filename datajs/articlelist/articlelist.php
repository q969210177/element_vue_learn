<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$id = $_GET["articleId"];
$data = select($link,"article_list","*","articleListId = $id");
print_r(json_encode($data));
?>