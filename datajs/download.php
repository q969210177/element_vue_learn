
<?php
header("Access-Control-Allow-Origin:*");
header("Content-type:text/html;charset=utf-8");
  error_reporting(E_ALL ^ E_NOTICE);
 // 接收 下载文件
  $file=$_GET["file"];

 //将当前窗口变成 可下载的窗口
 header("Content-type:application/octet-stream");
 
 // 获取文件名
$filename = basename($file);

// 设置 下载文件实体
header("Content-Disposition:attachment;filename = ".$filename);
// 设置下载方式 为字节流
header("Accept-ranges:bytes");

// 获取 设置下载文件大小 
header("Accept-length:".filesize($file));

// 清空 缓冲区
ob_clean(); 

// 下载到本地
readfile($file);
?>
