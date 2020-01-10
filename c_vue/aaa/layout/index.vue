<template>
  <div class="app-wrap">
    <el-container :class="{'hide-sidebar': collapse}">
      <div class="side-menu-wrap">
        <side-menu />
      </div>
      <el-container class="main-wrap">
        <el-header style="height: 46px; padding-left: 0;"><Header /></el-header>
        <el-main>
          <!-- <tag-bar /> -->
          <app-main />
        </el-main>
      </el-container>
  </el-container>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu'
import Header from './components/Header'
import AppMain from './components/AppMain'
// import TagBar from './components/TagBar'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    SideMenu,
    Header,
    AppMain
  },
  computed: {
    ...mapGetters([
      'collapse'
    ]),
    asideMenu () {
      return this.collapse ? '64px' : '210px'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/variables.less";
  .app-wrap{
    height: 100%;
    width: 100%;
  }
  .el-container{
    background: #efece8 url(~@/assets/images/app_bg.png) repeat;
  }
  .el-header{
    background: rgba(#fff,.9);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
  .main-wrap{
    margin-left: 210px;
    transition: margin-left .2s;
  }
  .side-menu-wrap{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 210px;
    transition: width .2s;
    background-color: @menuBgColor;
    overflow: hidden;
  }
  .hide-sidebar{
    .side-menu-wrap{
      width: 64px;
    }
    .main-wrap{
      margin-left: 64px;
    }
  }
</style>
