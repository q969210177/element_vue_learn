//引入组件 搜索框//多个组件封装公用
import serachInput from "../../components/global_component/selectInput/selectInput.vue";
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
        // {
        //   value: "对话未来",
        //   path: "/future",
        //   span:8
        // },
        { value: "社区团购统计", path: "/common", span: 8 }
      ],
      backgroundImgSrc: ""
    };
  },

  mounted() {
    this.$get("welcome/welcomImg.php")
      .then(res => {
        this.backgroundImgSrc = res.data.imgUrl;
        let fatherDom = document.getElementById("fa");
        fatherDom.style = `background: url(${this.backgroundImgSrc});background-size: 100% 100%`;
      })
      .catch(() => {
        let fatherDom = document.getElementById("fa");
        fatherDom.style = `background: url('http://969210177.cn/img/MyHomeland.jpg');background-size: 100% 100%`;
      });
    //获取用户的操作系统
    this.test = window.navigator.platform;
  },
  methods: {
    //根据选择进行路由跳转或者是跳转到GitHub页面
    handSelect(item) {
      if (item.value === "GitHub地址") {
        window.open("https://github.com/q969210177/element_vue_learn");
      } else {
        this.$router.push({ path: item.path });
      }
    }
  }
};
