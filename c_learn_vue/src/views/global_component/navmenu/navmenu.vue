<template>
    <div class="navmenu">
        <el-row>11</el-row>
      <el-menu :router="publicBol.true" :unique-opened="publicBol.true"    background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
       
        <el-submenu index="">
            <template slot="title">首页</template>
            <el-menu-item   index="/home_index" > 1</el-menu-item>
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
</style>