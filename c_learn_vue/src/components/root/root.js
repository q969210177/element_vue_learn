export default {
  data() {
    // <cell :class='[cellRow==curCell.tableTr||cellCol==curCell.y?"highLight":""]'></cell>
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
          date: { background: true, time: 2012 },
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      curCell: {
        x: 0,
        y: 0
      },

      tableTd: ""
    };
  },
  mounted() {},
  methods: {}
};
