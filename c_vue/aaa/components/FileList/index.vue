<template>
  <div>
    <ul>
      <li v-for="(file, index) in fileList" :key="file.id">
        <a :href="file.fileUrl" target="_blank">
          <i class="el-icon-document" style="margin-right: 7px"></i>{{ file.originalFilename }}
        </a>
        <i v-if="!disabled" class="el-icon-close" @click="handleDelete(file, index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    fileList: {
      type: Array,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleDelete (file, index) {
      this.$confirm('是否删除文件 ' + file.originalFilename + ' ？', {
        type: 'warning'
      }).then(() => {
        this.$emit('on-delete', file, index)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    li:hover {
      background: #e8e8e8;
      color: #409eff;
    }
    li {
      display: list-item;
      text-align: -webkit-match-parent;
      transition: all .5s cubic-bezier(.55,0,.1,1);
      font-size: 14px;
      color: #606266;
      line-height: 1.8;
      position: relative;
      box-sizing: border-box;
      border-radius: 4px;
      width: 100%;
      margin: 5px 0;
      a {
        color: #606266;
      }
      a:hover {
        color: #409eff;
      }
      .el-icon-close {
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 5px;
        opacity: .75;
        color: #606266;
      }
    }
  }
</style>
