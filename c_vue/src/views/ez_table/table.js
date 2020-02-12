export default {
  name: "Table",
  props: {
    //表名
    title: {
      type: String,
      default: null
    },
    //表数据
    tableData: {
      type: Array,
      default: null
    },
    //字段名
    laberProp: {
      type: Array,
      default: null
    },
    //表格 边框 选项
    tableOption: {
      type: Object,
      default: {
        border: false
      }
    }
  },
  data() {
    return {};
  }
};
