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
