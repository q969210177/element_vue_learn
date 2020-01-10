export default {
  data() {
    return {
      table: true,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
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
      timer: null,
      drawer: true
    };
  },
  methods: {
    handleClose(done) {
      console.log(done);
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    open() {
      console.log(1111);
    }
  },
  beforeRouteEnter(to, from, next) {
    let id = sessionStorage.getItem("token");
    console.log(id[4]);
    if (id[4] !== "1") {
      next(vm => {
        vm.$alertMessage({
          text: "您没有权限访问此页面",
          type: "error",
          show: true
        });
        next("/404");
      });
    } else {
      next();
    }
    next();
  }
};
