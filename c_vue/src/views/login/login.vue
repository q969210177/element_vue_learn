<template>
  <div class="login">
    <div>
      <el-form
        ref="loginForm"
        :status-icon="$store.state.globalBol.t"
        :model="loginForm"
        :rules="loginFormRules"
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
          <div class="text_right">
            <el-button
              size="mini"
              type="success"
              class="btn btn-primary btn-ghost btn-shine"
              @click="login('loginForm')"
            >
              <div>登录</div>
              <div>Login</div>
            </el-button>
            <el-button
              class="btn btn-primary btn-ghost btn-shine"
              size="mini"
              @click="homepage"
            >
              <div>首页</div>
              <div>home</div>
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>

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
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
/deep/.el-input__suffix {
  color: green;
}
/deep/.el-button:focus,
.el-button:hover {
  background: transparent;
  color: #0c0;
}
.login_form {
  padding-top: 20vh;
}
</style>
