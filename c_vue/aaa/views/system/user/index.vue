<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <div class="search-wrap">
      <el-form :inline="true" ref="searchForm" :model="searchForm" label-width="100px" class="demo-form-inline">
        <el-form-item prop="username" label="用户名：">
          <el-input size="mini" v-model="searchForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="姓名：">
          <el-input size="mini" v-model="searchForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item prop="gender" label="性别：">
          <el-select size="mini" v-model="searchForm.gender" clearable placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="2"></el-option>
            <el-option label="未知" :value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="handleSearch">查询</el-button>
          <el-button size="mini" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <c-table
        :columns="columns"
        :dataSource="dataSource"
        @current-change="handleChangePage"
        @size-change="handleChangeSize"
    >
      <template v-slot:tb-action>
        <el-button
            v-has="'SYSTEM_USER_CREATE'"
            slot="t-action"
            size="mini"
            type="primary"
            @click="handleToggleModal('add')"
        >新增
        </el-button>
      </template>
      <template v-slot:name="scope">
        <el-button size="mini" type="text" @click="handleToggleModal('show', scope.row)">{{ scope.row.name }}
        </el-button>
      </template>
      <template v-slot:gender="scope">
        <el-tag v-if="scope.row.gender === 1">男</el-tag>
        <el-tag type="success" v-else-if="scope.row.gender === 2">女</el-tag>
        <el-tag size="small" v-else type="danger">未知</el-tag>
      </template>
      <template v-slot:enable="scope">
        <el-switch v-if="hasPer('SYSTEM_USER_ENABLE_SWITCH')" size="mini" v-model="scope.row.enable" @change="handleToggleEnable(scope.row)"></el-switch>
        <div v-else>
          <el-tag size="mini" v-if="scope.row.enable">使用中</el-tag>
          <el-tag size="mini" v-if="!scope.row.enable" type="info">已禁用</el-tag>
        </div>
      </template>
      <template v-slot:options="scope">
        <el-button type="text"
                   v-has="'SYSTEM_USER_MODIFY'"
                   size="mini"
                   icon="el-icon-edit"
                   @click="handleToggleModal('update', scope.row)">编辑
        </el-button>
        <!--        <el-button type="text" size="mini" style="color: #F56C6C" icon="el-icon-delete"-->
        <!--                   @click="handleDelete(scope.row)">删除-->
        <!--        </el-button>-->
      </template>
    </c-table>
    <b-modal
        :visible="visible"
        :modalType="modalType"
        :data="updateObj"
        @handleToggleModal="handleToggleModal"
        @handleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import Table from '@/components/Table'
import Modal from './components/Modal'
import { hasPer } from '@/utils/permission'
import { getUserPage, createUser, deleteUser, updateUser } from '@/api/system'

export default {
  name: 'User',

  components: {
    'c-table': Table,
    'b-modal': Modal
  },

  data () {
    return {
      visible: false,
      modalType: 'add',
      updateObj: {},
      searchForm: {
        username: '',
        name: '',
        gender: null
      },
      pagination: {
        current: 1,
        pageSize: 20
      },
      dataSource: { list: [] },
      columns: [
        {
          type: 'index',
          width: 50
        },
        {
          label: '姓名',
          property: 'name',
          width: 150
        },
        {
          label: '登录名',
          property: 'username',
          width: 120
        },
        {
          label: '所在组织',
          property: 'orgName',
          width: 220
        },
        {
          label: '性别',
          property: 'gender',
          width: 80,
          align: 'center'
        },
        {
          label: '身份证号',
          property: 'cardNo'
        },
        {
          label: '手机号',
          property: 'mobile',
          width: 100
        },
        {
          label: '状态',
          property: 'enable',
          width: 100,
          align: 'center'
        },
        {
          label: '创建时间',
          property: 'createTime',
          align: 'center',
          width: 160
        },
        {
          label: '更新时间',
          property: 'modifyTime',
          align: 'center',
          width: 160
        },
        {
          label: '操作',
          property: 'options',
          width: 120,
          fixed: 'right'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.dataSource = await getUserPage({ ...this.searchForm, ...this.pagination })
    },
    hasPer (perCode) {
      return hasPer(perCode)
    },
    // 显示|隐藏弹窗
    handleToggleModal (type = 'close', row = {}) {
      this.modalType = type
      this.updateObj = row
      this.visible = !this.visible
    },

    // 弹窗提交
    handleSubmit (params) {
      if (this.modalType === 'add') {
        this.handleCreate(params)
      } else if (this.modalType === 'update') {
        this.handleUpdate(params)
      }
    },

    // 添加
    async handleCreate (params) {
      await createUser(params)
      this.$message({
        message: '创建信息成功',
        type: 'success'
      })
      this.handleToggleModal()
      this.getData()
    },

    // 更新
    async handleUpdate (params, type = '') {
      await updateUser(params)
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
        await deleteUser(row.id)
        this.$message({
          message: '删除用户成功',
          type: 'success'
        })
        this.getData()
      }).catch(() => {
        this.$message('取消删除')
      })
    },

    // 切换页码
    handleChangePage (current) {
      this.pagination.current = current
      this.getData()
    },

    // 切换每页显示数量
    handleChangeSize (size) {
      this.pagination.pageSize = size
      this.getData()
    },

    // 查询
    handleSearch () {
      this.getData()
    },

    // 重置
    handleReset () {
      this.$refs.searchForm.resetFields()
      this.getData()
    },

    // 启用开关
    handleToggleEnable (row) {
      this.handleUpdate(row, 'switch')
    }
  }
}
</script>

<style lang="less" scoped>
  .action {
    margin-bottom: 10px;
  }
</style>
