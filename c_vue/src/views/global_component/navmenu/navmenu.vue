<template>
  <div>
    <el-row>
      <!-- :collapse="$store.state.menuCollBol":router="publicBol.true" :unique-opened="publicBol.true"  :router="publicBol.true"-->
      <el-col>
        <el-menu  :unique-opened="publicBol.true" :default-active="defaultPath" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="publicBol.true"
          :collapse="$store.state.collapseMenuCollBol">
          <div  v-for="(v, k) in navMenuData" :key="k">
            <el-menu-item  @click="addHeader(v.name, v.path, v.id)"  v-if="v.type === 'firstLevel'"  :index="v.path">
              <i :class="v.iconFont"></i>
              <span>{{ v.name }}</span>
            </el-menu-item>
            <el-submenu :index="v.path" v-else>
              <template slot="title">
                <i :class="v.iconFont"></i>
                <span>{{ v.name }}</span>
              </template>
              <el-menu-item @click="addHeader(item.name, item.path, item.id)" v-for="(item, index) in v.itemMenu" :key="index" :index="item.path">
                <i :class="item.iconFont"></i>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </el-submenu>
        </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./navmenu.js"></script>
<style lang="scss" scoped></style>