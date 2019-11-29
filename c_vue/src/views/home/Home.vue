<template>
  <div class="home">
    <el-container>
      <el-aside class="navmenu" width="auto">
        <navMenu></navMenu>
      </el-aside>
      <el-container>
        <el-header height="auto">
          <navBar></navBar>
        </el-header>
        <el-main>
          <el-breadcrumb separator="/" class="padding_1 breadcrumb">
            <el-breadcrumb-item
              :replace="$store.state.globalBol.t"
              :key="k"
              v-for="(v, k) in $store.state.breadcrumbData"
              :to="{ path: v.path }"
              >{{ v.name }}</el-breadcrumb-item
            >
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "home",
  };
</script>
<style scoped>
.navmenu {
  background: #000;
  height: 100vh;
  overflow: hidden;
}
.breadcrumb {
  box-shadow: 0px 1.5px 10px rgba(0, 0, 0, 0.2);
}
</style>
