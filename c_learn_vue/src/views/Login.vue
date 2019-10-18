<template>
    <div class="login">
        <el-row class="login_form  padding_top_20">
            <el-col :xs="{span:12,offset:6}" :sm="{span:12,offset:6}" :md="{span:6,offset:8}" :lg="{span:6,offset:8}">
                <el-form :model="loginForm" ref="form" label-width="auto">
                    <el-form-item >
                        <el-input placeholder="请输入用户名/UserName" v-model="loginForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input placeholder="请输入密码/PassWord" v-model="loginForm.passWord"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row>
                            <el-col class="text_rigth">
                                <el-button size="mini" type="success" @click="login()">
                            <div>登录</div>
                            <div>Login</div>
                        </el-button>
                        <el-button size="mini" >
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
    export default {
        data() {
            return {
                loginForm:{
                    userName:null,
                    passWord:null,
                }
            }
        },
        methods: {
            login() {
                this.$router.push({path:"/home"})
            }
        },
    }
</script>

<style lang="scss" scoped>
.login{
    height: 100vh;
    background:url("../assets/img/login_bg.jpg") no-repeat;
    background-size:cover;
}

</style>