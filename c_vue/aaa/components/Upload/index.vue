<template>
  <div>
    <el-upload
        class="upload-demo"
        action="/v1/file_resource"
        :accept="accept"
        :on-change="handleChange"
        :file-list="fileList"
        :auto-upload="false"
        :list-type="listType">
      <el-button size="mini" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      fileList: []
    }
  },
  props: {
    value: {
      type: Array,
      default: () => ({})
    },
    listType: {
      default: 'text'
    },
    accept: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange (file, fileList) {
      let files = []
      for (let i = 0; i < fileList.length; i++) {
        files.push(fileList[i].raw)
      }
      this.$emit('input', files)
    }
  }
}
</script>

<style scoped>

</style>
