<template>
  <el-select
    style="width: 100%"
    v-model="val"
    placeholder="请输入姓名"
    filterable
    @change="handelChange"
    remote
    :multiple="multiple"
    reserve-keyword
    :remote-method="getUsers"
    :loading="loading"
    :disabled="disabled"
  >
    <el-option
      v-for="item in data"
      :key="item.id"
      :label="item.name + '-' + item.username"
      :value="item.id"
    >
      <span style="float: left">{{ item.name }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.username }}</span>
    </el-option>
  </el-select>
</template>

<script>
import { getUsers } from '@/api/system'

export default {
  name: 'UserSelect',

  props: {
    value: {
      type: [Number, Array],
      default: () => (undefined)
    },
    type: {
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      val: '',
      loading: false,
      data: []
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    handelChange (val) {
      let temp
      if (val instanceof Array) {
        temp = []
        for (let i = 0; i < this.data.length; i++) {
          if (val.indexOf(this.data[i].id) > 0) {
            temp.push(this.data[i])
          }
        }
      } else {
        for (let i = 0; i < this.data.length; i++) {
          if (val === this.data[i].id) {
            temp = this.data[i]
            break
          }
        }
      }
      this.$emit('input', val)
      this.$emit('change', temp)
    },
    async getUsers () {
      this.loading = true
      this.data = await getUsers()
      this.loading = false
    }
  },

  watch: {
    value: {
      immediate: true,
      handler: function (val) {
        this.val = val
      }
    }
  }
}
</script>

<style>

</style>
