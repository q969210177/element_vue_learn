<template>
<<<<<<< HEAD
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="indexMethod"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="11"
      layout="total, sizes, prev, pager, next, jumper"
      :total="12"
    >
    </el-pagination>
  </div>
=======
    <div>
        Document
        
    </div>
>>>>>>> b3d983b221849008494837fae4bc39944546e6fa
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          tag: "公司"
        }
      ],
      //默认初始页数
      currentPage: 1
    };
  },
  mounted() {},
  methods: {
    indexMethod(index) {
      return index * 2;
    }
  }
};
</script>

<style lang="scss" scoped></style>
