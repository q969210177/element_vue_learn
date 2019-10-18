export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      arr: ["one", "two", "three"]
    };
  },
  mounted() {
    this.arr = this.arr[1];
  },
  methods: {
    mouseout() {},
    onMouseOver(row, column, cell, event) {
      // 遍历所有行
      //let row = document.getElementsByClassName("tr");
      //let col = document.getElementsByClassName("td");
      //console.log(row, column, cell, event);
    },
    elMouse(row, column, cell, event) {
      // console.log(cell);
    }
  }
};
