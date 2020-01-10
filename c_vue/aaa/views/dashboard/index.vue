<template>
  <div class="dashboard">
      <el-row>
        <el-col>
          111
        </el-col>
        <el-col>
            <indexTable  :title="dataTitle" :tableData="dataTable" :laberProp="laberProp"></indexTable>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import table from "./table.vue"
import {api} from '@/api/system.js'
export default {
  name: 'Dashboard',

  components: {
    "indexTable":table,
  },
  data () {
    return {
      //表名
        dataTitle:"aaaa111s",
        //表格数据
        dataTable:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          //字段名字 
          laberProp:[{label:"date",name:"日期",addr:"address"},
                    {label:"name",name:"姓名",addr:"address"},
                    {label:"address",name:"地址",addr:"address"},]
    }
  },

  created () {
  console.log(api)
  
  },

  methods: {}
}
</script>

<style lang="less" scoped>
  @import "~@/styles/variables.less";

  .content-item{
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    background-color: rgba(#fff, .9);
    .box-shadow
  }
  .baidu-map{
    height: 558px;
  }
  .property{
    height: 560px;
    .all{
      height: 85px;
      margin-bottom: 15px;
      position: relative;
      background: rgba(@baseColor, .9) url('~@/assets/images/property_all_bg.png') no-repeat;
      border-radius: 3px;
      overflow: hidden;
      background-size: cover;
      padding: 15px;
      color: #fff;
      text-align: center;
      .all-item{
        float: left;
        width: 50%;
        text-align: center;
        h5{
          font-size: 14px;
          font-weight: normal;
          opacity: .8;
          color: #fff;
        }
        .total{
          font-weight: bold;
          font-size: 22px;
          text-align: center;
          position: relative;
          sub{
            opacity: .8;
            font-size: 14px;
            position: relative;
            bottom: 5px;
            line-height: 1;
            height: 12px;
            font-weight: normal;
          }
        }
      }
    }
  }
  .detail{
    height: 460px;
    padding-top: 15px;
  }
  .echarts-wrap{
    background-color: rgba(#fff, .9);
    height: 300px;
    margin-top: 15px;
    padding: 15px;
    .echart-item{
      width: 100%;
    }
  }
</style>
