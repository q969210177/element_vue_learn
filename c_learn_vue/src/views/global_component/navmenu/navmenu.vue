<template>
    <div class="navmenu">
      <el-menu  :default-active="activeIndex2"  background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="2" v-for="(v,k) in menuNav" :key="k">
            <template slot="title">{{v.menuTitle}}</template>
            <el-menu-item index="2-1">{{v.menuTitle}}</el-menu-item>
           
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