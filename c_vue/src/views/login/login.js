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
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      registereUserStatus: false
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
            url: "http://localhost:8888//datajs/login/login.php",
            data: user
          }).then(res => {
            if (res.data.code === "0") {
              let userId = res.data.data[0].userId;
              console.log(userId);
              this.$message({
                message: "登录成功",
                type: "success"
              });
            } else {
              this.$message({
                message: res.data.error,
                type: "warning"
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    registereUser() {
      this.registereUserStatus = true;
    },
    handleClose(done) {
      console.log(done);
    }
  }
};
