<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <c-table
        :columns="columns"
        :dataSource="dataSource"
    >
      <template v-slot:tb-action>
        <el-button
            v-has="'SYSTEM_ORG_CREATE'"
            slot="t-action"
            size="mini"
            type="primary"
            @click="handleToggleModal('add')"
        >新增
        </el-button>
      </template>
      <template v-slot:type="scope">
        <el-tag v-if="scope.row.type === 1">公司</el-tag>
        <el-tag type="warning" v-else-if="scope.row.type === 2">委管公司</el-tag>
        <el-tag v-else type="success">部门</el-tag>
      </template>
      <template v-slot:enable="scope">
        <el-switch size="mini" v-model="scope.row.enable" @change="handleToggleEnable(scope.row)"></el-switch>
      </template>
      <template v-slot:options="scope">
        <el-button
            type="text"
            size="mini"
            v-has="'SYSTEM_ORG_MODIFY'"
            icon="el-icon-edit"
            @click="handleToggleModal('update', scope.row)">编辑
        </el-button>
        <el-button type="text"
                   size="mini"
                   v-has="'SYSTEM_ORG_ADDSUB'"
                   icon="el-icon-plus"
                   @click="handleToggleModal('add', scope.row)">新增子架构
        </el-button>
        <el-button type="text"
                   size="mini"
                   v-has="'SYSTEM_ORG_DELETE'"
                   style="color: #F56C6C;"
                   icon="el-icon-delete"
                   @click="handleDelete(scope.row)">删除
        </el-button>
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
import { createOrganization, updateOrganization, deleteOrganization, getOrganizationTree } from '@/api/system'

export default {
  name: 'Organization',

  components: {
    'c-table': Table,
    'b-modal': Modal
  },

  data () {
    return {
      visible: false,
      modalType: 'close',
      updateObj: {},
      dataSource: {
        list: []
      },
      columns: [
        // {
        //   type: 'index',
        //   width: 50,
        //   align: 'center'
        // },
        {
          label: '名称',
          property: 'name'
        },
        {
          label: '编号',
          property: 'code',
          width: 120
        },
        {
          label: '类型',
          property: 'type',
          width: 120
        },
        {
          label: '创建时间',
          property: 'createTime',
          align: 'center',
          width: 160
        },
        {
          label: '操作',
          property: 'options',
          width: 260
        }
      ]
    }
  },

  created () {
    this.getData()
  },
  methods: {
    async getData () {
      this.dataSource.list = await getOrganizationTree()
    },

    // 显示|隐藏弹窗
    handleToggleModal (type = 'close', row = {}) {
      console.log(row)
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
      await createOrganization(params)
      this.$message({
        message: '创建信息成功',
        type: 'success'
      })
      this.handleToggleModal()
      this.getData()
    },

    // 更新
    async handleUpdate (params, type = '') {
      await updateOrganization(params)
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
        await deleteOrganization(row.id)
        await this.getData()
        this.$message({
          message: '删除信息成功',
          type: 'success'
        })
      }).catch(() => {
        this.$message('取消删除')
      })
    },

    // 启用开关
    handleToggleEnable (row) {
      this.handleUpdate(row, 'switch')
    }
  }
}
</script>

<style scoped>

</style>
