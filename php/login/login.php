<?php
header("Access-Control-Allow-Origin:*");
include "../Config/mysql.func.php";
//error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$user = $_POST["username"];
$pwd = $_POST["password"];
//select($link,"login","")

?>