<template>
  <div class="no-data">
    <i v-if="icon" :class="icon"></i>{{ info }}
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: String,
      default: '暂无数据'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  .no-data{
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    i{
      font-size: 34px;
      margin-bottom: 20px;
      display: block;
    }
  }
</style>
