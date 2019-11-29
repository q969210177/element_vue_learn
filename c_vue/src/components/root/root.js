//引入echart实例
import echarts from "echarts";
export default {
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
    //let log = console.log;
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
                formatter: function(params) {
                  return params.value;
                  // "降水量  " +params
                  // params.value +
                  // (params.seriesData.length
                  //   ? "：" + params.seriesData[0].data
                  //   : "")
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
      indexPieChartData: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
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
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
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
  mounted() {
    //找到dom实例
    let indexLineChart = echarts.init(this.$refs.indexLineChart.$el);
    let indexPieChart = echarts.init(this.$refs.indexPieChart.$el);
    // 注入dom实例;
    indexLineChart.setOption(this.indexLineChartData);
    indexPieChart.setOption(this.indexPieChartData);
  },
  methods: {}
};
