<template>
  <el-select
    style="width: 100%"
    v-model="val"
    :multiple="multiple"
    :disabled="disabled"
    :size="size"
    :clearable="clearable"
    :collapse-tags="collapseTags"
    :multiple-limit="multipleLimit"
    @change="handelChange"
    placeholder="请选择">
    <el-option
      v-for="item in dictionaries.filter(m => m.type === type)"
      :key="item.code"
      :label="item.name"
      :value="item.code">
    </el-option>
  </el-select>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getDictionaries } from '@/api/system'

export default {
  name: 'DicSelect',

  data () {
    return {
      val: ''
    }
  },

  props: {
    value: {
      type: [ String, Array ],
      default: null
    },
    type: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'mini'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    multipleLimit: {
      type: Number,
      default: 0
    }
  },

  created () {
    if (this.dictionaries.length === 0) {
      this.getData()
    }
  },

  methods: {
    ...mapActions({ addDictionaries: 'app/addDictionaries' }),
    handelChange (val) {
      this.$emit('input', val)
      this.dictionaries.forEach(item => {
        if (item.code === val) {
          this.$emit('change', item)
        }
      })
    },

    async getData () {
      const dic = await getDictionaries({ enable: true })
      this.addDictionaries(dic)
    }
  },

  computed: {
    ...mapGetters(['dictionaries'])
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

<style scoped>

</style>
