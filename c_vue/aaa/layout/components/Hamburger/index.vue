<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <i class="iconfont hamburger" :class="{'is-active':isActive}">&#xe665;</i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick () {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="less" scoped>
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    transform: rotate(180deg);
    line-height: 20px;
    text-align: center;
    font-size: 20px;
  }
  .hamburger.is-active {
    transform: rotate(0);
  }
</style>
