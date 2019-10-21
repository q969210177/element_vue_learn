<template>
    <div class="navmenu">
        <el-row>11</el-row>
      <el-menu class="menu_father"  :collapse="$store.state.menuCollBol" :router="publicBol.true" :unique-opened="publicBol.true"    background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
       
        <el-submenu index="">
            <template slot="title">
                <i class="el-icon-location"></i>
                 <span slot="title">首页</span>
                </template>
                
            <el-menu-item slot="reference"  index="/home_index" >111111</el-menu-item>
        </el-submenu>
       
      </el-menu> 
    </div>
</template>
<script src="./navmenu.js"></script>
<style lang="scss" scoped>
    .navmenu{
        background: #000;
        height: 100vh;
    }
    .menu_father{
        width: 100%;
    }
</style>