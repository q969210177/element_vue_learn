<template>
  <div class="toc-wrap">
    <div class="toc-content">
      <ul class="toc">
        <li v-for="(item, index) in data" :key="index">
          <span :class="{ current : index === currentIndex }" :title="item" @click="handleClick(index)">{{item}}</span>
<!--          <a :class="{ current : index === currentIndex }" href="javascript:void(0)" :title="item" @click.native="handleClick(index)">{{item}}</a>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toc',
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    // anchor (index) {
    //   debugger
    //   this.currentIndex = index
    // },
    handleClick (index) {
      this.$emit('click', index)
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
.toc-wrap {
  position: fixed;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  .toc-content {
    z-index: 9;
    max-height: calc(100vh - 16px);
    overflow: auto;
    background: #fff;
  }
  .toc{
    margin: 16px 0;
    padding-left: 0;
    font-size: 14px;
    list-style: none;
    border-left: 1px solid #ebedf0;
    >li{
      line-height: 2;
      &:not(:last-child) {
        margin-bottom: 4px;
      }
      span{
        cursor:pointer;
        display: block;
        width: 110px;
        margin-left: -1px;
        padding-left: 16px;
        color: #444;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        border-left: 1px solid transparent;
        transition: all .3s ease;
        &.current {
          cursor:pointer;
          color: @baseTextColor;
          border-color: @baseTextColor;
        }
      }
    }
  }
}
</style>
