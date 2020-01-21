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
                <el-button
                  size="mini"
                  type="success"
                  @click="login('loginForm')"
                >
                  <div>登录</div>
                  <div>Login</div>
                </el-button>
                <el-button size="mini" @click="homepage">
                  <div>首页</div>
                  <div>home</div>
                </el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <!-- <el-dialog
      width="350px"
      title="用户注册"
      :visible.sync="registereUserStatus"
      center
      :show-close="$store.state.globalBol.f"
      @close="closeRegister('insterUserForm')"
    >
      <el-form
        ref="insterUserForm"
        :rules="registereUserRules"
        :model="registereUserForm"
        label-width="80px"
      >
        <el-form-item ref="insterUserFrom" label="用户名" prop="name">
          <el-input v-model="registereUserForm.name" autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item class="margin_top_10" label="用户分组" prop="selectUser">
          <el-select v-model="registereUserForm.selectUser">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col class="text_rigth">
              <el-button @click="closeRegister('insterUserForm')"
                >取 消</el-button
              >
              <el-button type="primary" @click="insterUser('insterUserForm')"
                >确 定</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog> -->
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
</style>
