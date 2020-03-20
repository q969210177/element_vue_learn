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
    //
    operatingButton: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$attrs);
  },
  methods: {
    handleClick(item) {
      this.$emit("handleClick", item);
    }
  }
};
