<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '首页') {
        matched = [{ path: '/dashboard', name: '首页' }].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style lang="less" scoped>
</style>
