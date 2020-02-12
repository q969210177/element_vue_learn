import Table from "../../views/ez_table/table.vue";
export default {
  components: {
    eztable: Table
  },
  data() {
    return {
      serachText: null,
      serachData: null,
      specialStatis: false,
      serachLaberProp: [
        { label: "rumorContener", name: "使用简介" },
        { label: "rumorTitle", name: "药品名" },
        { label: "rumorApply", name: "服用方式" },
        { label: "specialMedicalOrder", name: "特别医嘱" }
      ],
      tableOption: {
        border: true
      }
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
            this.specialStatis = true;
            this.serachData = res.data.data;
          }
        });
      }
    }
  }
};
