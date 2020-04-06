import eztable from "@/components/ez_table/table.vue";
export default {
  components: {
    eztable
  },
  data() {
    return {
      tableProp: [
        { prop: "groupbuyId", label: "序号" },
        { prop: "name", label: "名字" },
        { prop: "imgSrc", label: "图片路径" },
        { prop: "pic", label: "单价" }
      ],
      tableData: [],
      tableOption: {
        border: true,
        stripe: true
      }
    };
  },
  mounted() {
    this.$get("nanGuo/nanGuoMenu.php").then(res => {
      this.tableData = res.data;
    });
  },
  methods: {
    changeNanGuoMenu(item) {
      console.log(item);
    }
  }
};
