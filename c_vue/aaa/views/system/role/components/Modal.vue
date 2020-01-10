<template>
  <el-dialog
      :title="modalType === 'add' ? '新增权限' : modalType === 'update' ? '编辑权限' : '权限详情'"
      :visible="visible"
      :before-close="handleToggleModal"
      top="5vh">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item prop="code" label="编号">
        <el-input v-model="form.code" placeholder="编号不可修改" :disabled="disabled || modalType === 'update'"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model="form.name" placeholder="请输入名称" :disabled="disabled"></el-input>
      </el-form-item>
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
      default: 'close'
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
        code: ''
      },
      rules: {
        code: [
          { required: true, message: '角色编号不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '角色名称不能为空', trigger: 'blur' }
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
      this.$refs.form.resetFields()
      this.$emit('handleToggleModal', 'close')
    },

    handleSubmit () {
      if (this.modalType === 'show') {
        this.handleToggleModal()
      } else {
        this.$refs['form'].validate(valid => {
          if (!valid) return false
          this.$emit('handleSubmit', this.form)
        })
      }
    },

    computedForm (val) {
      if (val === 'update' || val === 'show') {
        this.form = { ...this.data }
      }
      this.disabled = val === 'show'
    }
  }
}
</script>

<style>

</style>
