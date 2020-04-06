/* eslint-disable vue/no-unused-vars */
<template>
  <div class="padding_5">
    <div>
      <el-table :data="tableData" max-height="800px" border size="mini" stripe>
        <el-table-column
          v-for="(v, k) in tableProp"
          :prop="v.prop"
          :label="v.label"
          :key="k"
          :min-width="v.width"
        >
          <template slot-scope="scope">
            <span v-html="changeDataCol(scope.row, v.prop)"></span>
          </template>
        </el-table-column>
        <el-table-column align="center" min-width="auto">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
              @change="tableSearchIput(scope)"
            />
          </template>
          <template slot-scope="scope">
            <div>
              <el-button
                type="info"
                size="mini"
                @click="changeRowTable(scope, 0)"
              >
                编辑
              </el-button>
            </div>
            <div class="margin_top_5">
              <el-button
                type="danger"
                size="mini"
                @click="changeRowTable(scope, 1)"
              >
                删除
              </el-button>
            </div>
          </template>
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
    <div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="30%"
        :close-on-click-modal="false"
        :destroy-on-close="true"
      >
        <el-form label-width="80px" :model="userFormData">
          <el-form-item
            v-for="v in tableProp"
            :key="v.groupBuyId"
            :label="v.label"
          >
            <el-input v-model="userFormData[v.prop]"></el-input>
          </el-form-item>
          <el-form-item class="text_right">
            <el-button size="mini" @click="dialogVisible = false">
              取 消
            </el-button>
            <el-button size="mini" type="primary" @click="submitUserChange()">
              提交
            </el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script src="./nanGuoUser.js"></script>

<style lang="scss" scope>
/deep/ .cell:empty::before {
  content: "0";
  color: red;
}
</style>
