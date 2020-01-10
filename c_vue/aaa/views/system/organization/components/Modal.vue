<template>
  <el-dialog
      :title="
      modalType === 'add'
        ? '新增'
        : modalType === 'update'
        ? '编辑'
        : '详情'
    "
      :visible="visible"
      :before-close="handleToggleModal"
      top="5vh"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item prop="code" label="编号">
        <el-input v-model="form.code" placeholder="请输入编号" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="名称">
        <el-input v-model="form.name" placeholder="请输入名称" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="type" label="类型">
        <el-radio-group v-model="form.type">
          <el-radio :label="1">公司</el-radio>
          <el-radio :label="2">委管公司</el-radio>
          <el-radio :label="3">部门</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上级">
        <org-select v-model="form.parentId"/>
      </el-form-item>
<!--      <el-form-item label="上级">-->
<!--        <el-input v-model="form.parentName" :disabled="true"></el-input>-->
<!--      </el-form-item>-->
<!--      -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleToggleModal">取 消</el-button>
      <el-button v-if="!disabled" type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import OrgSelect from '@/components/OrgSelect'
export default {
  name: 'Modal',
  components: {
    OrgSelect
  },
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
      users: {},
      form: {
        name: '',
        code: '',
        type: 1,
        parentId: '',
        parentName: ''
      },
      rules: {
        code: [
          { required: true, message: '编号不能为空', trigger: 'blur' }
        ],
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
      this.$emit('handleToggleModal')
    },

    handleSubmit () {
      if (this.modalType === 'show') {
        this.handleToggleModal()
      } else {
        this.$refs['form'].validate(valid => {
          if (!valid) {
            return false
          }
          let postData = Object.assign({}, this.form)
          postData.linkman = undefined
          this.$emit('handleSubmit', this.form)
        })
      }
    },

    computedForm (val) {
      if (val === 'add') {
        this.form = {
          id: '',
          name: '',
          code: '',
          type: this.data.type ? 2 : 1,
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

<style scoped></style>
