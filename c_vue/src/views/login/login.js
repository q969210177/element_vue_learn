import Axios from "axios";
import qs from "qs";
// import { log } from "util";
export default {
  data() {
    //let userVeri = function(rule,value,callback) {};
    return {
      loginForm: {
        userName: "admin",
        passWord: "admin"
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
  mounted() {
    let token = "" + new Date().getTime();
    token = token.split("");
    token.splice(5, 1, "x");
    token = token.join("");
    //     var a = 'asdfsdfsdfsadf';
    // a=a.split('')；  //将a字符串转换成数组
    // a.splice(1,1,'xxxxx')； //将1这个位置的字符，替换成'xxxxx'. 用的是原生js的splice方法。
    // console.log(a);   //结果是：
    // ["a", "xxxxx", "d", "f", "s", "d", "f", "s", "d", "f", "s", "a", "d", "f"]

    // a.join('');  //将数组转换成字符串。  完成。
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let user = qs.stringify({ user: this.loginForm.userName });
          Axios({
            method: "post",
            url: "http://localhost//php/login/login.php",
            data: user
          }).then(res => {
            if (res.data === 404) {
              this.$message({
                message: "没有注册的用户",
                type: "warning"
              });
            } else {
              let token = "" + new Date().getTime() + res.data.num;
              token = token.split("");
              for (let i = 0; i < token.length - 1; i++) {
                // 如果前一个数 大于 后一个数 就交换两数位置
                if (-token[i] > -token[i + 1]) {
                  let temp = token[i];
                  token[i] = token[i + 1];
                  token[i + 1] = temp;
                }
              }
              token[4] = res.data.data[0].userID;
              token = token.join("");
              sessionStorage.setItem("id", token);
              this.$message({
                message: "登录成功",
                type: "success",
                showClose: true,
                onClose: () => {
                  this.$router.push({
                    name: "首页",
                    params: { id: "1", token }
                  });
                }
              });
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
