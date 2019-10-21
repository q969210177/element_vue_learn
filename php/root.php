<?php
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";

$link = cc();
$user = $_POST["user"];//接收用户名

$pwd = $_POST["pwd"];//接收密码

//判断用户名密码为不为空
if ($user!=null&&$pwd!=null) {//用户名密码不能为空
    //不为空就进行判断
    $arr = select($link,"root","*","Rname = $user");
    if ($arr) {
        return $arr = true;
    } else {
        return $arr = false;
    }
    

    
} else {
    //否则自己告诉他密码为空
    return $arr = false;
}
echo $arr;

?>