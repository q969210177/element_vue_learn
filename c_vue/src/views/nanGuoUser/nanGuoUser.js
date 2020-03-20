//import Table from "../../views/ez_table/table.vue";
// components: {
//   eztable: Table
// },
export default {
  data() {
    return {
      tableProp: [
        { prop: "groupBuyId", label: "序号" },
        { prop: "groupBuyName", label: "团购名字" },
        { prop: "groupBuyUserName", label: "用户名" },
        { prop: "groupBuyIdUserTel", label: "电话" },
        { prop: "groupBuyIdLouDong", label: "楼栋" },
        { prop: "groupBuyHouseNumber", label: "门牌号" },
        { prop: "groupBuyPackageA", label: "瘦肉" },
        { prop: "groupBuyPackageB", label: "五花肉" },
        { prop: "groupBuyPackageC", label: "排骨" },
        { prop: "groupBuytotalPrice", label: "总价" }
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
      userFormData: {}
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
      });
    },
    //搜索高亮关键字
    changeDataCol(val, key) {
      //console.log(val);
      let text = val;
      if ((val + "").indexOf(this.search) !== 1 && this.search !== null) {
        let text_2 = val[key] + "";
        text_2 = text_2.replace(
          this.search,
          '<font color="red">' + this.search + "</font>"
        );

        return text_2;
      } else {
        return `<span>${text[key] === null ? 0 : text[key]}</span>`;
      }
    },
    //表格的删除编辑操作
    changeRowTable(scope) {
      this.dialogVisible = true;
      this.userFormData = scope.row;

      console.log(Object.keys(scope.row));
    }
  }
};
