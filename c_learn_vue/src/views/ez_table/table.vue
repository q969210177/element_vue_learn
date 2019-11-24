<template>
    <div>
    <el-table :data="tableData"  style="width: 100%">
      <el-table-column v-for="(v,k) in laberProp" :key="k"  :prop="v.label" :label="v.name" width="180">

      </el-table-column>
    </el-table>
    <div>{{title}}</div>
    </div>
</template>

<script>
    export default {
        name:"table",
        props: {
            //表名
            title: {
                type:String,
                default:"hello"
            },
            //表数据
            tableData:{
                type:Array,
                default:[{}]
            },
            //字段名
            laberProp:{
                type:Array,
                default:[{}]
            }
        },
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>