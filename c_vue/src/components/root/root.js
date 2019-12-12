//引入echart实例
import echarts from "echarts";
import Axios from "axios";
export default {
  name: "index",
  data() {
    let color = [
      "#2c71ad",
      "#5abb5a",
      "#f7af4a",
      "#df504a",
      "#62AA2A",
      "#f5f5f5",
      "#A6F16C"
    ];
    return {
      indexLineChartData: {
        color,
        title: {
          text: "一周电量使用情况"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          },
          lineStyle: {
            color: "#000",
            width: "1"
          }
        },
        legend: {
          data: ["总表电量", "1楼电量", "2楼电量", "3楼电量", "4楼电量"]
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: color,
                width: "1"
              }
            },
            axisPointer: {
              label: {
                //浮动的显示
                formatter: function(params) {
                  return params.value;
                }
              }
            },
            data: [
              "星期一",
              "星期二",
              "星期三",
              "星期四",
              "星期五",
              "星期六",
              "星期天"
            ]
          },
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: "#000"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "总表电量",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random())
            ]
          },
          {
            name: "1楼电量",
            type: "line",
            smooth: true,
            data: [
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random())
            ]
          },
          {
            name: "2楼电量",
            type: "line",
            smooth: true,
            data: [
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random())
            ]
          },
          {
            name: "3楼电量",
            type: "line",
            smooth: true,
            data: [
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random())
            ]
          },
          {
            name: "4楼电量",
            type: "line",
            smooth: true,
            data: [
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random()),
              Math.ceil(Math.random() * 1000 * Math.random())
            ]
          }
        ]
      },
      //饼图数据
      indexPieChartData: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["1楼电费", "2楼电费", "3楼电费", "4楼电费"]
        },
        series: [
          {
            name: "电费",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "1楼电费" },
              { value: 310, name: "2楼电费" },
              { value: 234, name: "3楼电费" },
              { value: 135, name: "4楼电费" }
            ]
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
          icon: "el-icon-eleme",
          name: ["未读消息", Math.ceil(Math.random() * 1000 * Math.random())],
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
  beforeMount() {
    // let token = sessionStorage.getItem("id");
    // if (token !== this.$route.params.token) {
    //   this.$message({
    //     message: "登录过期",
    //     type: "warning",
    //     showClose: true,
    //     onClose: () => {
    //       this.$router.push({
    //         name: "login"
    //       });
    //     }
    //   });
    // }
  },
  mounted() {
    //找到dom实例
    let indexLineChart = echarts.init(this.$refs.indexLineChart.$el);
    let indexPieChart = echarts.init(this.$refs.indexPieChart.$el);
    // 注入dom实例;
    indexLineChart.setOption(this.indexLineChartData);
    indexPieChart.setOption(this.indexPieChartData);
    Axios({
      method: "post",
      url: "http://localhost/php/menu/menu.php"
    }).then(res => {
      console.log(res);
    });
  },
  methods: {
    // test() {
    //   this.$router.push({ name: "" });
    // }
  }
  // beforeUpdate(to, from, next) {
  //   console.log(111);
  //   next();
  // }
};
