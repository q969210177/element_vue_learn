<template>
  <div>
    <viewer :images="images">
      <img class="photo" :key="src"
           v-for="src in images"
           onerror="onerror=null;src='/assets/img/image_onerror.png'"
           :data-name="src"
           :src="src">
    </viewer>
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  props: {
    data: {
      type: Array,
      default: () => ({})
    }
  },
  computed: {
    images () {
      let _arr = []
      if (!this.data) {
        return _arr
      }
      for (let i = 0; i < this.data.length; i++) {
        _arr.push(this.data[i].filePath)
      }
      return _arr
    }
  },
  created () {
    this.createDeleteBth()
  },
  methods: {
    createDeleteBth () {
      let _self = this
      this.$nextTick(() => {
        let photos = document.getElementsByClassName('photo')
        if (photos && photos.length > 0) {
          for (let i = 0; i < photos.length; i++) {
            let span = document.createElement('span')
            span.title = '图片删除'
            span.className = 'el-icon-delete'
            span.style = 'cursor: pointer; position: absolute; top: -5px; margin-left: -15px; color: red'
            span.onclick = function () {
              _self.$confirm('是否删除图片?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                _self.$emit('on-delete', _self.getItemByFilePath(photos[i].getAttribute('data-name')))
                this.createDeleteBth()
              })
            }
            photos[i].after(span)
          }
        }
      })
    },
    getItemByFilePath (filePath) {
      let _item = {}
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].filePath === filePath) {
          _item = this.data[i]
          break
        }
      }
      return _item
    }
  }
}
</script>

<style lang="less" scoped>
  .photo {
    width: calc(30% - 10px);
    height: 280px;
    padding: 5px;
    margin: 0 5px;
    object-fit: scale-down;
    border: 1px solid #eff2f6;
  }
</style>
