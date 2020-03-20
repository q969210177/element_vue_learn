<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
$link = cc();
//判断是提交还是请求数据
$nanGuoStatus = $_GET["nanGuoStatus"];
$userData =$_POST["userData"];
$userVegMenuSqlName = array("groupBuyPackageA","groupBuyPackageB","groupBuyPackageC","groupBuyPackageD",
                            "groupBuyPackageE","groupBuyPackageF","groupBuyPackageG","groupBuyPackageH",
                            "groupBuyPackageI","groupBuyPackageJ","groupBuyPackageK","groupBuyPackageL",
                            "groupBuyPackageM","groupBuyPackageN","groupBuyPackageO","groupBuyPackageP",
                            "groupBuyPackageQ","groupBuyPackageR","groupBuyPackageS"
                          );
$userVegmenu = $userData["userVegMenu"];
//判断是否重复进行提交的操作的sql语句
$sqlWel = "select groupBuyName,groupBuyIdUserTel from groupbuy where groupBuyIdUserTel=$userData[groupBuyIdUserTel] and groupBuyName='$userData[groupBuyName]'";

//菜单的数据

//判断是请求菜单还是需要提交数据 $value["num"]
if ($nanGuoStatus!=="user") {
    $userStatus = query($link,$sqlWel);
   if ($userStatus) {
     print_r(json_encode(["code"=>308,"msg"=>"一次活动多次提交"]));
   } else {
      foreach($userVegmenu as $key => $value){
         $arr[$userVegMenuSqlName[$value["id"]]] =1 ;
    }
    array_pop($userData);
    $newUserData = array_merge($userData,$arr);
    $coBackStatus =  tianjia($link,"groupbuy",$newUserData);
    if ($coBackStatus===1) {
      print_r(json_encode(["code"=>0,"msg"=>"提交成功"]));
    } else  {
      print_r(json_encode(["code"=>203,"msg"=>$newUserData]));
    }
   }
 } else {
   $menuUserArr = select($link,"groupbuymenu","*");
    print_r(json_encode(["tuanGouName"=>"中百3.7-3.8团购","menuUserData"=>$menuUserArr]));
 }

?>