<template>
  <el-dialog
      :title="title"
      :visible="visible"
      :before-close="handleToggleModal"
      top="5vh">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item prop="name" label="名称">
        <el-input v-model="form.name" placeholder="请输入名称" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="path" label="权限地址">
        <el-input v-model="form.path" placeholder="请输入权限地址" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item v-if="active === 'api'" prop="method" label="请求方式">
        <el-select v-model="form.method" placeholder="请选择请求方式">
          <el-option label="GET" value="GET"/>
          <el-option label="POST" value="POST"/>
          <el-option label="PUT" value="PUT"/>
          <el-option label="DELETE" value="DELETE"/>
        </el-select>
      </el-form-item>
      <template v-else>
        <el-form-item prop="type" label="类型">
          <el-radio-group v-model="form.type">
            <el-radio :label="1">菜单</el-radio>
            <el-radio :label="2">组件</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="icon" label="图标">
          <el-input v-model="form.icon" placeholder="请输入图标" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item prop="seq" label="排列序号">
          <el-input-number v-model="form.seq" :min="1" label="请输入排列序号"></el-input-number>
        </el-form-item>
        <el-form-item prop="parentName" label="上级菜单">
          <el-input v-model="form.parentName" :disabled="true"></el-input>
        </el-form-item>
      </template>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleToggleModal">取 消</el-button>
      <el-button v-if="!disabled" type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modalType: {
      type: String,
      default: 'add'
    },
    active: {
      type: String,
      default: 'privilege'
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      form: {
        name: '',
        seq: 0,
        path: '',
        method: 'GET',
        icon: '',
        type: 1,
        parentId: ''
      },
      rules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ]
      },
      disabled: false
    }
  },

  watch: {
    modalType: {
      immediate: true,
      handler: function (val) {
        this.computedForm(val)
      }
    }
  },

  methods: {
    handleToggleModal () {
      this.$emit('handleToggleModal', 'close')
    },

    handleSubmit () {
      if (this.modalType === 'show') {
        this.handleToggleModal()
      } else {
        this.$refs['form'].validate(valid => {
          if (!valid) return false
          this.$emit('handleSubmit', {
            ...this.form,
            type: this.active === 'menu' ? this.form.type : 3
          })
        })
      }
    },

    computedForm (val) {
      if (val === 'add') {
        this.form = {
          name: '',
          seq: 0,
          url: '',
          method: 'GET',
          type: this.data.type ? this.data.type : 1,
          parentId: this.data.id,
          parentName: this.data.name
        }
      } else {
        this.form = { ...this.data }
      }

      this.disabled = val === 'show'
    }
  },

  computed: {
    title () {
      const type = this.modalType === 'add' ? '新增' : this.modalType === 'update' ? '编辑' : '详情'
      const name = this.active === 'privilege' ? '菜单' : this.active === 'api' ? 'API' : ''
      return type === '详情' ? `${name}${type}` : `${type}${name}`
    }
  }
}
</script>

<style scoped>

</style>
