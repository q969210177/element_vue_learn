//引入echart实例
import echarts from "echarts";
export default {
  data() {
    return {
      demoData: {
        title: { text: "demo" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      cardData: [
        {
          icon: "el-icon-user-solid",
          name: ["新用户", Math.ceil(Math.random() * 1000 * Math.random())],
          data: "",
          class: "user"
        },
        {
          icon: "el-icon-chat-dot-square",
          name: ["未处理事件", Math.ceil(Math.random() * 1000 * Math.random())],
          data: "",
          class: "chat"
        },
        {
          icon: "el-icon-female",
          name: ["女生", Math.ceil(Math.random() * 1000 * Math.random())],
          data: "",
          class: "female"
        },
        {
          icon: "el-icon-camera",
          name: ["图片", Math.ceil(Math.random() * 1000 * Math.random())],
          data: "",
          class: "camera"
        }
      ]
    };
  },
  mounted() {
    //找到dom实例
    let dom = this.$refs.demo.$el;
    // 注入dom实例;
    let myChart = echarts.init(dom);
    myChart.setOption(this.demoData);
    // console.log(echarts);
  },
  methods: {}
};
