<template>
  <div class="login-wrap">
    <div class="login">
      <div class="login-content">
        <el-form ref="form" :model="form" :rules="rules" class="login-form" auto-complete="on" label-position="left">
          <h2 class="login-title">
            <b>XXXXX</b><br>
            <span>Xiangtou Property management platform</span>
          </h2>
          <el-form-item prop="username">
            <el-input
                v-model="form.username"
                prefix-icon="el-icon-user"
                placeholder="用户名"
                name="username"
                type="text"
                :disabled="loading"
                tabindex="1"
                auto-complete="on"
                class="login-input"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <el-input
                  :disabled="loading"
                  :key="passwordType"
                  ref="password"
                  v-model="form.password"
                  prefix-icon="el-icon-lock"
                  placeholder="密码"
                  name="password"
                  :show-password="true"
                  tabindex="2"
                  autocomplete="on"
                  @keyup.enter.native="handleSubmit"
                  class="login-input"
              />
            </el-form-item>
          </el-tooltip>
          <el-button class="login-button" :loading="loading" type="primary" style="width:100%;"
                     @click.native.prevent="handleSubmit">登录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { login } from '@/api/basic'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      },
      passwordType: 'password',
      capsTooltip: false
    }
  },

  computed: {
    ...mapGetters(['loading'])
  },

  created () {
    this.setUser({})
  },
  methods: {
    ...mapActions({ 'setUser': 'user/setUser' }),
    async handleSubmit () {
      const res = await login(this.form)
      this.setUser(res)
      this.$router.push('/dashboard')
      this.$message.success('登陆成功!')
    }
  }
}
</script>
<style lang="less">
  @import "~@/styles/variables.less";

  .login-input {
    input {
      border: 1px solid rgba(#fff, .2);
      background-color: rgba(#000, .2);
      color: #fff;

      &::-webkit-input-placeholder {
        color: rgba(#fff, .3);
      }
    }

    .el-input__icon {
      opacity: .6;
    }

    .login-button {
      background: @baseColor;
      box-shadow: 0 10px 18px rgba(@baseColor, .24);
      font-weight: normal;
    }
  }
</style>
<style lang="less" scoped>
  @import "~@/styles/variables.less";

  .login-wrap {
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/login_bg.jpg');
    background-color: #f2f2f2;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding: 34px;

    .login {
      position: absolute;
      right: 34px;
      top: 34px;
      bottom: 34px;
      left: 34px;

      .login-title {
        color: #fff;
        font-size: 40px;
        padding: 30px 0;
        text-align: center;

        span {
          opacity: .8;
          font-size: 15px;
        }
      }

      .login-content {
        position: absolute;
        right: 100px;
        width: 35%;
        height: 100%;

        .login-form {
          position: absolute;
          right: 0;
          top: 50%;
          width: 100%;
          transform: translateY(-50%);
          padding-left: 60px;
          padding-right: 60px;

          .title {
            font-size: 22px;
            font-weight: normal;
            margin-bottom: 35px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
