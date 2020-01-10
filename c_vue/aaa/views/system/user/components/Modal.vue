<template>
  <el-dialog
      :title="modalType === 'add' ? '新增用户' : modalType === 'update' ? '编辑用户' : '用户详情'"
      :visible="visible"
      :close-on-click-modal="false"
      :before-close="handleToggleModal"
      top="5vh">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item prop="username" label="登录名">
        <el-input v-model="form.username" placeholder="请输入登录名"
                  :disabled="disabled || modalType === 'update'"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号码">
        <el-input v-model="form.mobile" placeholder="请输入联系电话" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="cornet" label="短号">
        <el-input v-model="form.cornet" placeholder="请输入短号" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="roleIds" label="角色">
        <el-select
            style="width: 100%"
            v-model="form.roleIds"
            multiple
            placeholder="请选择角色（多选）">
          <el-option
              v-for="item in roles"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="orgId" label="所属单位">
        <org-select v-model="form.orgId"/>
      </el-form-item>
      <el-form-item prop="gender" label="性别">
        <el-select v-model="form.gender" placeholder="请选择性别" :disabled="disabled">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="2"></el-option>
          <el-option label="未知" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="cardNo" label="身份证号">
        <el-input v-model="form.cardNo" placeholder="请输入身份证号" :disabled="disabled"></el-input>
      </el-form-item>
      <el-form-item prop="remark" label="备注">
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入备注"
            v-model="form.remark">
        </el-input>
      </el-form-item>
      <el-form-item prop="enable" label="是否启用">
        <el-switch v-model="form.enable" :disabled="disabled"></el-switch>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleToggleModal">取 消</el-button>
      <el-button v-show="!disabled" type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import OrgSelect from '@/components/OrgSelect'
import { getRoles } from '@/api/system'

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
      default: 'add'
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      form: {
        username: '',
        name: '',
        gender: 1,
        cornet: '',
        remark: '',
        orgId: null,
        cardNo: '',
        mobile: '',
        type: 1,
        roleIds: [],
        enable: true
      },
      roles: [],
      rules: {
        username: [
          { required: true, message: '登录名不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        roleIds: [
          { required: true, message: '角色不能为空', trigger: 'change' }
        ],
        orgId: [
          { required: true, message: '所在组织不能为空', trigger: 'change' }
        ],
        mobile: [
          { required: true, pattern: /^1[345789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      },
      disabled: false
    }
  },

  watch: {
    modalType: function (val) {
      this.computedForm(val)
    }
  },
  created () {
    this.getRoles()
  },
  methods: {
    async getRoles () {
      const res = await getRoles()
      this.$nextTick(() => {
        this.roles = res
      })
    },
    handleToggleModal () {
      this.$refs['form'].resetFields()
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
      if (val === 'add') {
        this.form = {
          gender: 1,
          type: 1,
          enable: true
        }
      } else {
        this.form = { ...this.data }
      }
      this.disabled = val === 'show'
    }
  }
}
</script>

<style>

</style>
