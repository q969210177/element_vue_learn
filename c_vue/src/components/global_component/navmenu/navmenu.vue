<template>
  <div>
    <el-row>
      <el-col>
        <!-- 擦边菜单栏 -->
        <el-menu
          :unique-opened="publicBol.true"
          :default-active="defaultPath"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="$store.state.collapseMenuCollBol"
        >
          <!-- 沒有二级菜单 -->
          <el-menu-item
            v-for="(v, k) in $store.state.menuData"
            v-if="v.menuType === '0'"
            :key="k"
            :index="v.menuPath"
            @click="addHeader(v, true)"
          >
            <i :class="v.menuIcon"></i>
            <span>{{ v.menuName }}</span>
          </el-menu-item>
          <!-- 有二级菜单 -->
          <el-submenu v-else :index="v.menuPath">
            <template slot="title">
              <i :class="v.menuIcon"></i>
              <span>{{ v.menuName }}</span>
            </template>
            <el-menu-item
              v-for="(item, index) in v.menuItemMenu"
              :key="index"
              :index="item.itemMenuId"
              @click="addHeader(item, false)"
            >
              <i :class="item.itemMenuIcon"></i>
              <span>{{ item.itemMenuName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./navmenu.js"></script>
<style lang="scss" scoped></style>
