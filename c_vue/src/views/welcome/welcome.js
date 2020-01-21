import serachInput from "../global_component/selectInput/selectInput.vue";
export default {
  components: {
    serachInput: serachInput
  },
  data() {
    return {
      serList: [
        { value: "后台模板首页", path: "/login", span: 8 },
        {
          value: "GitHub地址",
          path: "https://github.com/q969210177/element_vue_learn",
          span: 8
        },
        {
          value: "对话未来",
          path: "/future",
          span: 8
        }
      ],
      backgroundImgSrc: "",
      test: ""
    };
  },

  mounted() {
    this.$get("welcome/welcomImg.php").then(res => {
      this.backgroundImgSrc = res.data.imgUrl;
      let fatherDom = document.getElementById("fa");
      fatherDom.style = `background: url(${this.backgroundImgSrc});background-size: 100% 100%`;
    });
    this.test = window.navigator.platform;
    //let b = window.NavigatorID;
    console.log(this.test);
    //console.log(b);

    // console.log(this.serList);
  },
  methods: {
    handSelect(item) {
      if (item.value === "GitHub地址") {
        window.open("https://github.com/q969210177/element_vue_learn");
      } else {
        this.$router.push({ path: item.path });
      }
    }
  }
};
