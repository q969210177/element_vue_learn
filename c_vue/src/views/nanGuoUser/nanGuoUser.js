//import Table from "../../views/ez_table/table.vue";
// components: {
//   eztable: Table
// },
export default {
  data() {
    return {
      tableProp: [
        { prop: "groupBuyId", label: "序号", width: 30 },
        { prop: "groupBuyName", label: "团购名字", width: 100 },
        { prop: "groupBuyUserName", label: "用户名", width: 50 },
        { prop: "groupBuyIdUserTel", label: "电话", width: 100 },
        { prop: "groupBuyIdLouDong", label: "楼栋", width: 60 },
        { prop: "groupBuyHouseNumber", label: "门牌号", width: 60 },
        { prop: "groupBuyPackageA", label: "主食A", width: 50 },
        { prop: "groupBuyPackageB", label: "主食B", width: 50 },
        { prop: "groupBuyPackageC", label: "平价蔬菜", width: 50 },
        { prop: "groupBuyPackageD", label: "蔬菜A", width: 50 },
        { prop: "groupBuyPackageE", label: "蔬菜B", width: 50 },
        { prop: "groupBuyPackageF", label: "水产A", width: 50 },
        { prop: "groupBuyPackageG", label: "水产B", width: 50 },
        { prop: "groupBuyPackageH", label: "水产C", width: 50 },
        { prop: "groupBuyPackageI", label: "肉食A", width: 50 },
        { prop: "groupBuyPackageJ", label: "肉食B", width: 50 },
        { prop: "groupBuyPackageK", label: "厨房套餐", width: 50 },
        { prop: "groupBuyPackageL", label: "平价瘦肉", width: 50 },
        { prop: "groupBuyPackageM", label: "水果A", width: 50 },
        { prop: "groupBuyPackageN", label: "水果B", width: 50 },
        { prop: "groupBuytotalPrice", label: "总价", width: 50 }
      ],
      tableData: null,
      dialogVisible: false,
      search: null,
      pageTion: {
        totalPage: null,
        pageSizes: [10, 20, 50, 100],
        pageS: 10,
        currentPage: 1,
        pageCount: Math.ceil(this.totalPage / this.pageS)
      },
      userFormData: {},
      changeUrl: null
    };
  },
  beforeMount() {
    this.requestTbaleData({
      serach: this.search,
      start: this.pageTion.start,
      count: this.pageTion.pageS
    });
  },
  methods: {
    //表头搜索事件
    tableSearchIput() {
      if (this.search !== null) {
        this.requestTbaleData({
          serach: this.search,
          start: this.pageTion.start,
          count: this.pageTion.pageS
        });
      }
    },
    //当页码值改变的事件
    sizeChange(page) {
      this.pageTion.pageS = page;
      this.requestTbaleData({
        serach: this.search,
        count: page
      });
    },
    //当页面条数发生改变的事件
    currentChange(page) {
      let pages = (page - 1) * this.pageTion.pageS;
      // this.requestTbaleData(start, count, search);
      this.requestTbaleData({
        start: pages,
        count: this.pageTion.pageS,
        serach: this.search
      });
    },
    //请求表格数据
    requestTbaleData(option = {}) {
      this.$get("/nanGuo/nanGuouser.php", option).then(res => {
        this.tableData = res.data.data;
        this.pageTion.totalPage = +res.data.count[0]["count(1)"];
        this.dialogVisible = false;
      });
    },
    //编辑删除操作的事件
    changTabeData(url, option) {
      this.$post(url, option).then(res => {
        if (res.data.code === 0) {
          this.$alertMessage(
            {
              text: res.data.msg,
              show: true,
              duration: 5000
            },
            this.requestTbaleData({
              start: 0,
              count: this.pageTion.pageS,
              serach: this.search
            })
          );
        } else {
          this.$alertMessage({
            text: res.data.msg,
            type: "error",
            show: true,
            duration: 5000
          });
        }
      });
    },
    //搜索高亮关键字
    changeDataCol(val, key) {
      let text = val;
      if (text[key] === null) {
        text[key] = 0;
        val[key] = 0;
      } else {
        if ((val + "").indexOf(this.search) !== 1 && this.search !== null) {
          //变量接受是因为修改了 v-for的数据可能会造成无限循环所以 用一个变量代理一下
          let transit;
          transit = (val[key] + "").replace(
            this.search,
            '<font color="red">' + this.search + "</font>"
          );

          return transit;
        } else {
          return `<span>${text[key]}</span>`;
        }
      }
    },
    //表格的删除编辑打开motal框
    changeRowTable(scope, statusKey) {
      let arr = ["nanGuo/nanGuoChange.php", "nanGuo/nanGuoDel.php"];
      this.changeUrl = arr[statusKey];
      this.dialogVisible = true;
      this.userFormData = scope.row;
    },
    submitUserChange() {
      this.changTabeData(this.changeUrl, { userData: this.userFormData });
    }
  }
};
