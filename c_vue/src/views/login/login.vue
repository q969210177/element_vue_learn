<template>
  <div class="login">
    <!--  -->
    <el-row class="login_form">
      <el-col
        :xs="{ span: 12, offset: 6 }"
        :sm="{ span: 12, offset: 6 }"
        :md="{ span: 6, offset: 10 }"
        :lg="{ span: 6, offset: 9 }"
      >
        <el-form
          ref="loginForm"
          :status-icon="$store.state.globalBol.t"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="auto"
        >
          <el-form-item prop="userName">
            <el-input
              v-model="loginForm.userName"
              placeholder="请输入用户名/UserName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input
              v-model="loginForm.passWord"
              type="password"
              placeholder="请输入密码/PassWord"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col class="text_rigth">
                <el-button size="mini" type="text" @click="registereUser()">
                  <div>注册</div>
                  <div>registered</div>
                </el-button>
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
    <!--:wrapper-closable="$store.state.globalBol.f" direction="ltr" 注册{{ loading ? '提交中 ...' : '确 定' }}  @click="$refs.drawer.closeDrawer()"@click="cancelForm"-->
    <el-drawer
      ref="drawer"
      title="用户注册"
      :visible.sync="registereUserStatus"
      direction="rtl"
    >
      <span>1111</span>
    </el-drawer>
  </div>
</template>

<script src="./login.js"></script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  // background:url("../assets/img/login_bg.jpg") no-repeat;
  background-size: cover;
}
/deep/.el-input__suffix {
  color: green;
}
.login_form {
  padding-top: 20vh;
}
/deep/.el-form-item {
  margin-bottom: 12px;
}
</style>
