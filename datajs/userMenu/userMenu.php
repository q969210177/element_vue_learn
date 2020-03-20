<?php 
header("Access-Control-Allow-Origin:*");
include "../core/mysql.func.php";
error_reporting(E_ALL ^ E_NOTICE);
header("content-type:text/html;charset=utf-8");
//链接mysql
$link = cc();
//获取用户id
 $menuId = $_GET["menuId"];

//获取当前用户id下面的菜单id
$menuIdData = select($link,"user_menuid","*","menuID = '$menuId'")[0];
//如果获取到了就把id数组的第一条和最后一条删除只留 中间的关联字段
if ($menuIdData) {
    array_shift($menuIdData);
    array_pop($menuIdData);
    $id = implode(",",$menuIdData);
    //查到父级的全部id数据
     $fatherMenu = select($link,"menu","*","menuId in ($id)");
     //print_r(json_encode($fatherMenu));
    //循环父数组
    foreach ($fatherMenu as $key=>$value) {
        //判断有没有子列表 如果有就找到他 
        if ($value["menuItemMenu"]!=="0") {
          $itemMenuId =$value["menuItemMenu"];
            //echo   $itemMenuIdData;
          $itemMenu = select($link,"item_menu","*","itemMenuFather = $itemMenuId");
          $fatherMenu[$key]["menuItemMenu"] =  $itemMenu;
        }
    }; 
    
}
print_r(json_encode($fatherMenu));

?>