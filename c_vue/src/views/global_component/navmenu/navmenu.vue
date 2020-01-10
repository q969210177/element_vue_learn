<template>
  <div>
    <el-row>
      <!-- :collapse="$store.state.menuCollBol":router="publicBol.true" :unique-opened="publicBol.true"  :router="publicBol.true"-->
      <el-col>
        <el-menu
          :unique-opened="publicBol.true"
          :default-active="defaultPath"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="publicBol.true"
          :collapse="$store.state.collapseMenuCollBol"
        >
          <el-menu-item
            v-for="(v, k) in $store.state.menuData"
            v-if="v.menuType === '0'"
            :key="k"
            :index="v.menuPath"
            @click="addHeader(v.menuName, v.menuPath, v.menuUserId)"
          >
            <i :class="v.menuIcon"></i>
            <span>{{ v.menuName }}</span>
          </el-menu-item>

          <el-submenu v-else :index="v.menuPath">
            <template slot="title">
              <i :class="v.menuIcon"></i>
              <span>{{ v.menuName }}</span>
            </template>
            <el-menu-item
              v-for="(item, index) in v.menuItemMenu"
              :key="index"
              :index="item.itemMenuPath"
              @click="
                addHeader(item.itemMenuName, item.itemMenuPath, item.itemMenuId)
              "
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
