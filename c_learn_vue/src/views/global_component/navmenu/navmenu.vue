<template>
  <div class="navmenu">
    <el-row>
      <el-col class="font_col line_heigth_20">
        121
      </el-col>
    </el-row>

    <el-row>
      <!-- :collapse="$store.state.menuCollBol":router="publicBol.true" :unique-opened="publicBol.true" -->
      <el-col>
        <el-menu :unique-opened="publicBol.true" default-active="/home_index" background-color="#545c64"
           text-color="#fff"  active-text-color="#ffd04b" :router="publicBol.true" class="width_100">
          <el-menu-item v-for="(v,k) in navMenuData" :key="k" v-if="v.type==='firstLevel'" :index="v.path">
            <i :class="v.iconFont"></i>
            <span>{{v.name}}</span>
          </el-menu-item>
          <el-submenu :index="v.path" v-else >
            <template slot="title">
              <i :class="v.iconFont"></i>
              <span>{{v.name}}</span>
            </template>
            <el-menu-item v-for="(item,index) in v.itemMenu" :key="index" :index="item.path">
              <i :class="item.iconFont"></i>
              <span>{{item.name}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./navmenu.js"></script>
<style lang="scss" scoped>
    .navmenu{
        background: #000;
        height: 100vh;
        overflow: hidden;
    }
</style>