<template>
  <el-dialog
      :title="modalType === 'add' ? '新增数据字典' : modalType === 'update' ? '编辑数据字典' : '数据字典详情'"
      :visible="visible"
      :before-close="handleToggleModal"
      top="5vh">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item prop="name" label="名称">
        <el-input v-model="form.name" placeholder="请输入名称" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="code" label="编号">
        <el-input v-model="form.code" placeholder="请输入编号" :disabled="disabled || modalType === 'update'"></el-input>
      </el-form-item>
      <el-form-item prop="type" label="类别">
        <el-select v-model="form.type" :disabled="disabled || data.type" placeholder="请选择类别">
          <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="spare" label="备用字段">
        <el-input v-model="form.spare" placeholder="请输入备用字段" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="enable" label="是否启用">
        <el-switch v-model="form.enable" :disabled="disabled"></el-switch>
      </el-form-item>
      <el-form-item label="上级字典">
        <el-input v-model="form.parentName" :disabled="true"></el-input>
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
    },
    types: {
      type: Array,
      default: () => ([])
    }
  },

  data () {
    return {
      form: {
        name: '',
        code: '',
        type: '',
        spare: '',
        enable: true,
        parentId: '',
        parentName: ''
      },
      rules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '类别不能为空', trigger: 'blur' }
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
          this.$emit('handleSubmit', this.form)
        })
      }
    },

    computedForm (val) {
      if (this.$refs.form) {
        this.$refs.form.resetFields()
      }
      if (val === 'add') {
        this.form = {
          name: '',
          code: '',
          type: this.data.type,
          spare: '',
          enable: true,
          parentId: this.data.id,
          parentName: this.data.name
        }
      } else {
        this.form = {
          ...this.data
        }
      }

      this.disabled = val === 'show'
    }
  }
}
</script>

<style scoped>

</style>
