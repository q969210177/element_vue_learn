<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <c-table
        :columns="columns"
        :dataSource="dataSource"
    >
      <template v-slot:tb-action>
        <el-button
            slot="t-action"
            v-has="'SYSTEM_PRIVILEGE_CREATE'"
            size="mini"
            type="primary"
            @click="handleToggleModal()"
        >新增
        </el-button>
      </template>
      <template v-slot:icon="scope">
        <i :class="scope.row.icon"></i>
      </template>
      <template v-slot:options="scope">
        <el-button type="text"
                   size="mini"
                   v-has="'SYSTEM_PRIVILEGE_MODIFY'"
                   icon="el-icon-edit"
                   @click="handleToggleModal('update', scope.row)">编辑
        </el-button>
        <el-button type="text"
                   v-has="'SYSTEM_PRIVILEGE_ADDSUB'"
                   size="mini" icon="el-icon-plus"
                   @click="handleToggleModal('add', scope.row)">新增子菜单
        </el-button>
        <el-button type="text"
                   v-has="'SYSTEM_PRIVILEGE_DELETE'"
                   size="mini"
                   style="color: #F56C6C"
                   icon="el-icon-delete"
                   @click="handleDelete(scope.row)">删除
        </el-button>
      </template>
    </c-table>

    <b-modal
        :visible="visible"
        :modalType="modalType"
        :data="updateObj"
        :active="tab"
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
  name: 'Privilege',

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
        name: '',
        url: ''
      },
      dataSource: { list: [] },
      tab: 'menu',
      columns: [
        {
          type: 'index',
          width: 50,
          align: 'center'
        },
        {
          label: '名称',
          property: 'name',
          width: 240
        },
        {
          label: '权限地址',
          property: 'path'
        },
        {
          label: '图标',
          property: 'icon',
          width: 60
        },
        {
          label: '序号',
          property: 'seq',
          width: 60
        },
        {
          label: '请求方式',
          property: 'method',
          width: 140
        },
        {
          label: '操作',
          property: 'options',
          width: 220
        }
      ],
      pagination: {
        current: 1,
        pageSize: 10
      }
    }
  },

  created () {
    this.getData()
  },

  methods: {
    async getData (params = {}) {
      if (this.tab === 'menu') {
        this.dataSource.list = await API.getPrivilegeMenuTree()
      } else {
        this.dataSource = await API.getPrivilegeApiList({
          ...this.pagination,
          ...params
        })
      }
    },

    // 切换tab
    handleChangeTab (tab, event) {
      this.getData()
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
      this.getData()
    },

    // 添加
    async handleCreate (params) {
      await API.createPrivilege(params)
      this.$message({
        message: '创建信息成功',
        type: 'success'
      })
      this.handleToggleModal('close')
      this.getData()
    },

    // 更新
    async handleUpdate (params) {
      await API.updatePrivilege(params)
      this.$message({
        message: '更新信息成功',
        type: 'success'
      })
      this.handleToggleModal('close')
      this.getData()
    },

    // 删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除该信息，是否继续？', '删除信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await API.deletePrivilege(row.id)
        this.getData()
        this.$message({
          message: '删除信息成功',
          type: 'success'
        })
      }).catch((e) => {
        this.$message('取消删除')
      })
    },

    // 切换页码
    handleChangePage (current) {
      this.getData({
        current
      })
    },

    // 切换每页显示数量
    handleChangeSize (size) {
      this.getData({
        pageSize: size
      })
    },

    // 查询
    handleSearch () {
      this.getData(this.searchForm)
    },

    // 重置
    handleReset () {
      this.searchForm = {
        name: ''
      }

      this.getData()
    }
  }
}
</script>

<style scoped>

</style>
