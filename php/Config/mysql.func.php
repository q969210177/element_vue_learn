<?php
include "config.php";
 //select() 
 
 //del(0)
 
 // 增删改查
 
 // 链接数据库
 
 function cc(){
 	
	$link= mysqli_connect(DB_HOST, DB_USER, DB_PWD, DB_NAME);
	
	mysqli_set_charset($link,DB_CHARSET);
	
	return  $link;
	
 }
 
 //conn();

 
 // select   ??? 单表   
 
   function select($link,$tbName,$cols="*",$where="",$group="",$order="",$limit=""){
   	
	 // 组装sql 语句
	 
	 // 组装where
	 if($where != null){
	 	
		$where = " where ".$where;
	 }
	 
	  if($group != null){
	 	
		$group = " group by ".$group;
	 }
	   if($order != null){
	 	
		$order = " order by ".$order;
	 }
	   
	    if($limit != null){
	 	
		$limit = " limit ".$limit;
	 }
	 $sql = "select $cols from $tbName $where $group  $order  $limit";
	 
	 //echo $sql;
	
	 // 执行 
	 
	    $result= mysqli_query($link, $sql) or die("sql语句拼写有误"); 
		
		$arr = mysqli_fetch_all($result,MYSQLI_ASSOC)  ; // 二维数组
		
		mysqli_free_result($result);
		
		
		return $arr;
		
	
   }
   
   // 删除 
   
   
   function del($link,$tbName,$where){
   	
	 // 组装 delete
	 
	 if($where != null){
	 	 $where = " where ".$where;
	 }
	 
	 $sql = "delete from $tbName $where";
	
	//echo $sql;
	
	  mysqli_query($link, $sql);
	  
	  return mysqli_affected_rows($link);
	
   }
   
   
   // 新增
  // $arr = ['id'=>1,"userName"=>"esffwe"];
   function tianjia($link,$tbName,$arr){
   	  
   	   // 表单  异步     post  $_POst关联数组
	   //  key --> 数据库 的真实字段 
	   
	   $keys = join(",",array_keys($arr));
	   $vals = "'" .join("','",array_values($arr))."'";
	   
	  $sql = "insert $tbName($keys) values($vals)";
	
	//echo $sql;
	
	  mysqli_query($link, $sql);
	  
	 return mysqli_affected_rows($link);
	  
   }
   
   
   
   // 修改
   
   // $arr = ["userName"=>"fsdfdsfsd","sex"=>"女"];
   
   function xiugai($link,$tbName,$arr,$where){
   	
	    $str = "";
	
	      foreach($arr as $k=>$v){
	      	
			 $str .= $k."='".$v."',";
	      }
		
		 $str = trim($str,",");
		 
		 if($where != null){
		 	
			$where = " where ".$where;
		 }
		 
	     $sql = "update $tbName set $str $where";
		 
		// echo $sql;
		
		  mysqli_query($link, $sql);
	  
	 return mysqli_affected_rows($link);
	
   }
   
   
   
   // 多表  复杂 语句 
   // 执行所有语句
     function query($link,$sql){
     	
		//"select update |delete insert"
		
		 $type = ["update","select","delete","insert"];
		 
		 $header = substr(trim($sql), 0,6);
		 
		 
		   if(in_array($header, $type)){
		   	
			   if(strtolower($header) == "select"){
			   	   // 查询 语句
				
				   $result= mysqli_query($link, $sql) or die("查询语句拼写有误!!");
				
				    return mysqli_fetch_all($result,MYSQLI_ASSOC);
			   }else{
			   	   // 增删改
				
				     mysqli_query($link, $sql);
				
				    return  mysqli_affected_rows($link);
			   }
			   
			   
			
		   }else{
		   	
			  exit("语句非法");
		   }
		 
		// echo $header;
		 
		
		
		
     }
	 
	
	
	//$link = conn();
	
	//$re= query($link, "select * from class c join stus s on c.cid = s.cid");
   
   //print_r($re);
   
   // save($link,"userinfo",$arr,"xxxx");
   
   //add($link, "userinfo", $arr);
   
   //del("userinfo");
  // select("userinfo","userName,id",null,"cid","id asc","0,10");
