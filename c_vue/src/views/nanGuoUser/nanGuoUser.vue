/* eslint-disable vue/no-unused-vars */
<template>
  <div class="padding_5">
    <div>
      <el-table :data="tableData" max-height="800px" border size="mini" stripe>
        <el-table-column
          v-for="(v, k) in tableProp"
          :prop="v.prop"
          :label="v.label"
          min-width="auto"
          :key="k"
          sortable
        >
          <!--  tableData[k][tableProp[k].prop] -->
          <template slot-scope="scope">
            <span v-html="changeDataCol(scope.row, v.prop)"></span>
          </template>
        </el-table-column>
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
              @blur="tableSearchIput(scope)"
            />
          </template>
          <!-- <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="changeRowTable(scope)">
              编辑
            </el-button>
          </template> -->
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="text_center">
      <el-pagination
        :current-page="pageTion.currentPage"
        :page-sizes="pageTion.pageSizes"
        :page-size="pageTion.pageS"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageTion.totalPage"
        @size-change="sizeChange"
        @current-change="currentChange"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </div>
    <!-- 编辑页面 -->
    <!-- <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :close-on-click-modal="false"
      >
        <span>{{ userFormData }}</span>
        <span slot="footer" class="dialog-footer">
          <el-button size="mini" @click="dialogVisible = false"
            >取 消</el-button
          >
          <el-button size="mini" type="primary" @click="dialogVisible = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
    </div> -->
  </div>
</template>

<script src="./nanGuoUser.js"></script>

<style></style>
