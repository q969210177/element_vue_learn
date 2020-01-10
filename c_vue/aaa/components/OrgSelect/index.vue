<template>
  <div>
    <el-cascader
      v-model="val"
      ref="cascader"
      @change="handleChange"
      :options="options"
      :style="{width: showCheckbox ? '70%' : '100%', marginRight: showCheckbox ? '10px' : ''}"
      placeholder="请选择公司/部门"
      :show-all-levels="false"
      :props="{ checkStrictly: true, value: 'id', label: 'name', emitPath: false }"
      clearable
    >
      <template slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span v-if="data.children.length"> ({{ data.children.length }}) </span>
      </template>
    </el-cascader>
    <el-checkbox v-if="showCheckbox" style="width: calc(30% - 10px);" v-model="checked">递归</el-checkbox>
  </div>
</template>

<script>
import { getOrganizationTree } from '@/api/system'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'OrgSelect',
  data () {
    return {
      val: '',
      checked: true,
      options: []
    }
  },
  props: {
    value: {
      default: undefined
    },
    showCheckbox: {
      default: false
    }
  },
  computed: {
    ...mapGetters(['organizations'])
  },
  created () {
    this.getOrganizations()
  },
  watch: {
    value: {
      immediate: true,
      handler: function (val) {
        this.val = parseInt(val)
      }
    }
  },
  methods: {
    ...mapActions({ setOrientations: 'app/setOrientations' }),
    async getOrganizations () {
      if (!this.organizations || this.organizations.length === 0) {
        this.options = await getOrganizationTree()
        this.$nextTick(() => {
          this.setOrientations(this.options)
        })
      } else {
        this.options = this.organizations
      }
    },
    handleChange (val) {
      this.$emit('input', val)
    },
    getAllIds () {
      let ids = []
      if (this.checked) {
        const nodes = this.$refs['cascader'].getCheckedNodes()
        if (nodes.length === 0) {
          return ids
        }
        this.getChildrenIds([nodes[0].data], ids)
      }
      return ids
    },
    getChildrenIds (nodes, ids) {
      if (nodes) {
        for (let i = 0; i < nodes.length; i++) {
          ids.push(nodes[i].id)
          if (nodes[i].children) {
            this.getChildrenIds(nodes[i].children, ids)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
