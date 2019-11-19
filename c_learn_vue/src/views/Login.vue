<template>
  <div class="login">
    <el-row class="login_form">
      <el-col
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 12, offset: 6 }"
        :md="{ span: 6, offset: 10 }"
        :lg="{ span: 6, offset: 9 }"
      >
        <el-form
          :status-icon="$store.state.globalBol.t"
          :model="loginForm"
          ref="loginForm"
          :rules="loginFormRules"
          label-width="auto"
        >
          <el-form-item prop="userName">
            <el-input
              placeholder="请输入用户名/UserName"
              v-model="loginForm.userName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              type="password"
              placeholder="请输入密码/PassWord"
              v-model="loginForm.passWord"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col class="text_rigth">
                <el-button
                  size="mini"
                  type="success"
                  @click="login('loginForm')"
                >
                  <div>登录</div>
                  <div>Login</div>
                </el-button>
                <el-button size="mini">
                  <div>取消</div>
                  <div>cancal</div>
                </el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    let userVeri = function(rule, value, callback) {};
    return {
      loginForm: {
        userName: null,
        passWord: null
      },
      loginFormRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push({ path: "/home" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  // background:url("../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;
}
/deep/.el-input__suffix {
  color: green;
}
.login_form{
margin-top: 20%
}
</style>
