<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" >
    <el-aside class="aside" :width="asideMenu">
      <el-menu
        :collapse="collapse"
        :collapse-transition="false"
        :unique-opened="true"
        :router="true"
        :default-active="this.$route.path"
        class="menu"
        mode="vertical"
        background-color="#1C1C1C"
        text-color="#fff"
      >
        <v-item v-for="item in user.menus" :key="item.id" :item="item"></v-item>
      </el-menu>
    </el-aside>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item'

export default {
  components: {
    'v-item': Item
  },

  computed: {
    ...mapGetters([
      'collapse',
      'user'
    ]),
    asideMenu () {
      return this.collapse ? '64px!important' : '210px!important'
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
.el-aside{
  width: 210px!important;
  height: 100%;
  background-color: @menuBgColor;
  color: @menuTextColor;
  .menu {
    height: 100%;
    border-right: 0;
  }
}

.el-scrollbar{
  height: 100%;
  overflow: hidden;
}
</style>
<style lang="less">
.scrollbar-wrapper{
  overflow-x: hidden!important;
}
</style>
