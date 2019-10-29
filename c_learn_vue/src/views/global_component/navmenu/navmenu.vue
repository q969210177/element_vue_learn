<template>
    <div class="navmenu">
    <el-row>11</el-row>
    <el-row>
        <!-- :collapse="$store.state.menuCollBol":router="publicBol.true" :unique-opened="publicBol.true" -->
        <el-col>
        <el-menu
        :unique-opened="publicBol.true"
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <!-- el-submenu 是第一级 子组件 -->
      <el-menu-item index="/home">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-menu-item>

      <el-menu-item index="/wendang">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文档</span>
        </template>
      </el-menu-item>

      <el-submenu :index="v.path" v-for="(v,k) in navMenuData" :key="k">
        <template slot="title">
          <i :class="v.iconFont"></i>
          <span>{{v.name}}</span>
        </template>
        <!-- el-menu-item-group 是二级子组件 -->
        <el-menu-item-group v-for="(item,index) in v.itemMenu" :key="index">
            <template slot="title">{{item.name}}</template>
            <el-menu-item  :v-if="item.permission" :index="item.path">
                <i :class="item.iconFont"></i>
              {{item.name}}
            </el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      </el-menu>
        </el-col>
    </el-row>
       {{navMenuData}}
    </div>
</template>
<script src="./navmenu.js"></script>
<style lang="scss" scoped>
    .navmenu{
        background: #000;
        height: 100vh;
        overflow: hidden;
    }
    .menu_father{
        width: 100%;
    }
</style>