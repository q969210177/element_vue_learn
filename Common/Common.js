import Table from "../../views/ez_table/table.vue";
export default {
  components: {
    eztable: Table
  },
  data() {
    return {
      serachText: null,
      serachData: null,
      serachLaberProp: [
        { label: "rumorName", name: "药品名" },
        { label: "rumorBirth", name: "药品成分" },
        { label: "rumorState", name: "使用方式" },
        { label: "rumorApply", name: "适用症状" }
      ],
      tableOption: {
        border: true
      },
      operatingButton: ["查看"],
      drugDilogStatus: false,
      drugDilogData: ""
    };
  },
  mounted() {},
  methods: {
    serchRumor() {
      if (this.serachText === null || this.serachText === "") {
        this.$alertMessage({
          text: "搜索內容不能為空",
          type: "error",
          show: true
        });
      } else {
        this.$get("/rumor/serchRumor.php", {
          serachText: this.serachText
        }).then(res => {
          //当code码不为0 弹出error
          if (res.data.code !== "0") {
            this.$alertMessage({
              text: res.data.error,
              type: "warning",
              show: true
            });
          } else {
            this.serachData = res.data.data;
          }
        });
      }
    },
    buttonClick(item) {
      this.drugDilogStatus = true;
      this.drugDilogData = item;
      console.log(item);
    },
    drugDilogClose() {}
  }
};
