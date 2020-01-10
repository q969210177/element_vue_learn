<template>
  <el-dialog :append-to-body='true' title="修改密码" :visible.sync="visible" width="30%">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="旧密码" prop="oldPass">
        <el-input type="password" v-model="form.oldPass" autocomplete="off" placeholder="请输入旧密码"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPass">
        <el-input type="password" v-model="form.newPass" autocomplete="off" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="newPass2">
        <el-input type="password" v-model="form.newPass2" autocomplete="off" placeholder="请再次输入新密码"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="handleClose">取 消</el-button>
        <el-button size="medium" type="primary" @click="handleUpdatePassword">保 存</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { updateUserPassword } from '@/api/system'
export default {
  name: 'UpdatePasswordModal',
  data () {
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.newPass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        oldPass: '',
        newPass: '',
        newPass2: ''
      },
      rules: {
        oldPass: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到20 个字符', trigger: 'blur' }
        ],
        newPass: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到20 个字符', trigger: 'blur' }
        ],
        newPass2: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('handleToggleModal')
    },
    // 修改密码
    handleUpdatePassword () {
      let _self = this
      this.$refs['form'].validate((valid) => {
        if (!valid) {
          return false
        }
        updateUserPassword(this.form).then(res => {
          _self.$message.success('密码修改成功！')
          _self.handleClose()
        })
      })
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler: function (val) {
        if (val && this.$refs['form']) {
          this.$refs['form'].resetFields()
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
