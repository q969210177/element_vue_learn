<template>
<div>
  <el-row>
      <!-- <el-col :span="12" class="border_red">
         <table border >
      <tr  v-for="(v,k) in 20" :key="v"  class="tr" >
        <td class="td" v-for="(index) in 30" :key="index" @click="onMouseOver(k,index)">
          {{index}}
        </td>
      </tr>
    </table>
      </el-col> :row-class-name="table_tdr"-->
      <el-col :span="12" class="border_red"> 
        <el-table :data="tableData" >
          <el-table-column ref="a"  prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
       
        
      </el-col>
  </el-row>
   
     
</div>
  </template>

  <script src="./root.js">
    
  </script>
 <style lang="scss" scoped>
  .bg_b{
    background: #000;
  }
 </style>