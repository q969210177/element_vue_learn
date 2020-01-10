<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-row>
      <el-col :span="6">
        <el-card style="margin-right: 10px">
          <div slot="header" class="clearfix">
            <span>数据类别</span>
          </div>
          <el-table
              size="mini"
              :data="types"
              style="width: 100%">
            <el-table-column
                type="index"
                width="40">
            </el-table-column>
            <el-table-column
                prop="label"
                label="名称">
            </el-table-column>
            <el-table-column
                width="80"
                label="操作">
              <template slot-scope="scope">
                <el-button type="text"
                           size="mini"
                           icon="el-icon-view"
                           @click="handleSearchByType(scope.row.value)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="18">
<!--        <el-card class="search-panel">-->
<!--          <el-form :inline="true" :model="searchForm">-->
<!--            <el-form-item prop="type" label="数据类别：">-->
<!--              <el-select v-model="searchForm.type" placeholder="请选择字典类别">-->
<!--                <el-option-->
<!--                    v-for="item in types"-->
<!--                    :key="item.value"-->
<!--                    :label="item.label"-->
<!--                    :value="item.value">-->
<!--                </el-option>-->
<!--              </el-select>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="名称：">-->
<!--              <el-input size="mini" v-model="searchForm.name" placeholder="请输入名称"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="编号：">-->
<!--              <el-input size="mini" v-model="searchForm.code" placeholder="请输入编号"></el-input>-->
<!--            </el-form-item>-->
<!--            <el-form-item>-->
<!--              <el-button size="mini" type="primary" @click="handleSearch">查询</el-button>-->
<!--              <el-button size="mini" @click="handleReset">重置</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
<!--        </el-card>-->
        <c-table
            :columns="columns"
            :dataSource="dataSource"
        >
          <template v-slot:tb-action>
            <el-button
                slot="t-action"
                size="mini"
                type="primary"
                @click="handleToggleModal()"
            >新增
            </el-button>
          </template>
          <template v-slot:enable="scope">
            <el-switch size="mini" v-model="scope.row.enable" @change="handleToggleEnable(scope.row)"></el-switch>
          </template>
          <template v-slot:options="scope">
            <el-button type="text" size="mini" icon="el-icon-edit" @click="handleToggleModal('update', scope.row)">编辑
            </el-button>
            <el-button type="text" size="mini" icon="el-icon-plus" @click="handleToggleModal('add', scope.row)">新增子数据
            </el-button>
            <!-- <el-button type="text" size="mini" style="color: red;" icon="el-icon-delete" @click="handleDelete(scope.row)">删除</el-button> -->
          </template>
        </c-table>
      </el-col>
    </el-row>

    <b-modal
        :visible="visible"
        :modalType="modalType"
        :types="types"
        :data="updateObj"
        @handleToggleModal="handleToggleModal"
        @handleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import Table from '@/components/Table'
import Modal from './components/Modal'
import * as API from '@/api/system'

export default {
  name: 'Dictionary',

  components: {
    'c-table': Table,
    'b-modal': Modal
  },

  data () {
    return {
      visible: false,
      modalType: 'close',
      updateObj: {},
      searchForm: {
        type: '',
        name: '',
        code: ''
      },
      dataSource: {
        list: []
      },
      types: [],
      columns: [
        {
          type: 'index',
          width: 50,
          align: 'center'
        },
        {
          label: '类别',
          property: 'typeName',
          width: 140
        },
        {
          label: '名称',
          property: 'name',
          width: 140
        },
        {
          label: '编号',
          property: 'code',
          width: 100
        },
        {
          label: '备用字段',
          property: 'spare'
        },
        {
          label: '状态',
          property: 'enable',
          width: 100,
          align: 'center'
        },
        {
          label: '操作',
          property: 'options',
          width: 160
        }
      ]
    }
  },

  created () {
    this.getData()
    this.getTypes()
  },

  methods: {
    async getData (params) {
      this.dataSource.list = await API.getDictionaryTrees(params)
    },

    async getTypes () {
      this.types = await API.getDictionaryTypes()
      this.searchForm.type = this.types[0].value
    },

    // 显示|隐藏弹窗
    handleToggleModal (type = 'add', row = {}) {
      this.modalType = type
      this.updateObj = row
      this.visible = !this.visible
    },

    // 弹窗提交用户
    async handleSubmit (params) {
      if (this.modalType === 'add') {
        this.handleCreate(params)
      } else if (this.modalType === 'update') {
        this.handleUpdate(params)
      }
    },

    // 添加
    async handleCreate (params) {
      await API.createDictionary(params)
      this.$message({
        message: '创建信息成功',
        type: 'success'
      })
      this.handleToggleModal()
      this.getData()
    },

    // 更新
    async handleUpdate (params, type = '') {
      await API.updateDictionary(params)
      this.$message({
        message: '更新信息成功',
        type: 'success'
      })
      if (!(type === 'switch')) {
        this.handleToggleModal()
      }
      this.getData()
    },

    // 删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除该信息，是否继续？', '删除信息', {
        type: 'warning'
      }).then(async () => {
        await API.deleteDictionary(row.id)
        this.$message({
          message: '删除信息成功',
          type: 'success'
        })
        this.getData()
      }).catch(() => {
        this.$message('取消删除')
      })
    },

    // 启用开关
    handleToggleEnable (row) {
      this.handleUpdate(row, 'switch')
    },
    handleSearchByType (type) {
      this.searchForm.type = type
      this.handleSearch()
    },
    // 查询
    handleSearch () {
      this.getData(this.searchForm)
    }
  }
}
</script>

<style scoped>
  .item {
    font-size: 12px;
    padding: 8px 0;
    border-bottom: 1px solid #e8e8e8;
  }
</style>
