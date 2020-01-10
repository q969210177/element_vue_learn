<template>
  <div class="echarts" :style="{ width: width, height: height }"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'Radar',
  props: {
    width: {
      type: String,
      default: '98%'
    },

    height: {
      type: String,
      default: '280px'
    },

    options: {
      type: Object,
      default () {
        return {
          title: '',
          data: []
        }
      }
    }
  },
  data () {
    return {
      Radar: null
    }
  },
  watch: {
    options: {
      deep: true,
      handler (val) {
        this.$nextTick(() => this.initRadar())
      }
    }
  },
  methods: {
    initRadar () {
      const placeCount = this.options.data.map(item => item.placeCount)
      const suiteCount = this.options.data.map(item => item.suiteCount)

      this.Radar = echarts.init(this.$el)
      this.Radar.setOption({
        title: {
          text: this.options.title,
          textStyle: {
            color: '#cea775',
            fontWeight: 'normal',
            fontSize: '16px'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        radar: {
          radius: '66%',
          center: ['50%', '50%'],
          indicator: this.options.data.map(item => ({ name: item.name }))
        },
        series: [{
          type: 'radar',
          data: [
            {
              value: placeCount,
              name: '资产处'
            },
            {
              value: suiteCount,
              name: '资产套'
            }
          ],
          animationDuration: 300
        }]
      })
    }
  }
}
</script>
