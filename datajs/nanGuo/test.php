<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
$userData =$_POST["userData"];
$userVegmenu = $userData["userVegMenu"];
foreach($userVegmenu as $key => $value){
  // $arr[$userVegMenuSqlName[$value]] = $userVegmenu[$value]["num"];
  print_r(json_encode($value[""]));
}
//echo $sqlWel;
//print_r(json_encode($userData));


?>