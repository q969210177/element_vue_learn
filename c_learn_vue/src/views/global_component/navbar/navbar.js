export default {
  name: "navbar",
  data() {
    return {
      changePassWordForm: {
        uid: "",
        userName: "",
        oldPassWord: "",
        newPassWord: "",
        ComparisonPassword: ""
      },
      changePassWordFormRules: {
        userName: [
          { required: true, message: "账户名不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        oldPassWord: [
          { required: true, message: "原始密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        newPassWord: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        ComparisonPassword: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
        // validatePass
      },
      dialogFormVisible: false,
      timeout: null
    };
  },
  mounted() {},
  methods: {
    change() {
      this.$store.state.collapseMenuCollBol = !this.$store.state
        .collapseMenuCollBol;
    },
    changePassWord() {
      this.dialogFormVisible = true;
    },
    debounceInput(value) {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      } else {
        this.timeout = setTimeout(() => {
          this.$emit("input", value);
        }, 1000);
      }
    }
  }
};
