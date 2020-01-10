// import { log } from "util";
export default {
  data() {
    let regular = /^[a-zA-Z0-9]{4,16}$/;
    let loginUser = (rule, value, callback) => {
      if (regular.test(value)) {
        callback();
      } else {
        callback(new Error("用户名非法"));
      }
    };
    return {
      loginForm: {
        userName: "admin",
        passWord: "admin"
      },
      loginFormRules: {
        userName: [{ validator: loginUser, trigger: "blur" }],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 16, message: "长度在 3 到 16 个字符", trigger: "blur" }
        ]
      },

      registereUserStatus: false
    };
  },
  mounted() {},
  methods: {
    //登录按钮的事件
    login(formName) {
      this.$refs[formName].validate(valid => {
        //验证通过才发请求否则就 跳出 return false
        if (valid) {
          this.$post("/login/login.php", {
            user: this.loginForm.userName
          }).then(res => {
            //登录成功调用生成token的方法
            this.setToken(res.data.data[0].menuId, res.data.sum);
            //当用户登录成功的时候
            if (res.data.code === "0") {
              this.$alertMessage(
                {
                  text: "登录成功",
                  type: "success",
                  show: true,
                  duration: 1000
                },
                this.successDo(res.data.data[0].menuId)
              );
              //登录验证弹出没有通过就留在当前页``
            } else {
              this.$alertMessage({
                text: res.data.error,
                type: "error",
                show: true
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    //生成token
    setToken(menuId, sum) {
      let token = "" + new Date().getTime() + sum;
      token = token.split("");
      for (let i = 0; i < token.length - 1; i++) {
        // 如果前一个数 大于 后一个数 就交换两数位置
        if (-token[i] > -token[i + 1]) {
          let temp = token[i];
          token[i] = token[i + 1];
          token[i + 1] = temp;
        }
      }
      token[4] = menuId;
      token = token.join("");
      sessionStorage.setItem("token", token);
      console.log(token);
    },
    //登陆成功跳转页面
    successDo(id) {
      setTimeout(() => {
        this.$store.state.menuId = id;
        this.$router.push({
          name: "首页",
          params: { menuId: id }
        });
        this.$store.dispatch("getMenuData", {
          menuId: id,
          vm: this
        });
      }, 1000);
    }
  }
};
