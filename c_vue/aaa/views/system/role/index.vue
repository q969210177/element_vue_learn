<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-row :gutter="20">
      <el-col :span="14">
        <c-table
            :columns="columns"
            :dataSource="dataSource"
            highlight-current-row
        >
          <template v-slot:tb-action>
            <el-button
                slot="t-action"
                size="mini"
                v-has="'SYSTEM_ROLE_CREATE'"
                type="primary"
                @click="handleToggleModal('add')"
            >新增
            </el-button>
          </template>
          <template v-slot:options="scope">
            <el-button type="text"
                       size="mini"
                       v-has="'SYSTEM_ROLE_MODIFY'"
                       icon="el-icon-edit"
                       @click="handleToggleModal('update', scope.row)">编辑
            </el-button>
            <el-button type="text"
                       size="mini"
                       class="success-color"
                       icon="el-icon-setting"
                       @click="handleChooseRow(scope.row)">配置权限
            </el-button>
            <el-button type="text"
                       v-has="'SYSTEM_ROLE_DELETE'"
                       size="mini"
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
      </el-col>
      <el-col :span="10">
        <el-card>
          <el-row>
            <el-col :span="12">
              <div class="current">当前选择：<strong>{{ currentRole.name || '' }}</strong></div>
            </el-col>
            <el-col style="text-align: right" :span="12">
              <el-button
                  type="primary"
                  size="mini"
                  v-has="'SYSTEM_ROLE_SAVE'"
                  @click="handleSaveRolePr">保存</el-button>
            </el-col>
          </el-row>
          <el-tree
              :data="menus"
              check-strictly
              default-expand-all
              node-key="id"
              show-checkbox
              ref="tree"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Table from '@/components/Table'
import Modal from './components/Modal'
import {
  getRoles,
  getPrivilegeMenuTree,
  distributionRole,
  getRoleById,
  updateRole,
  deleteRole,
  createRole
} from '@/api/system'

export default {
  name: 'Role',

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
        name: ''
      },
      tab: 'menu',
      dataSource: { list: [] },
      columns: [
        {
          type: 'index',
          width: 50,
          align: 'center'
        },
        {
          label: '编号',
          property: 'code',
          width: 120
        },
        {
          label: '名称',
          property: 'name'
        },
        {
          label: '操作',
          property: 'options',
          width: 220
        }
      ],
      menus: [],
      apiColumns: [
        {
          type: 'selection'
        },
        {
          label: '名称',
          property: 'name'
        },
        {
          label: '权限地址',
          property: 'url'
        },
        {
          label: '请求方式',
          property: 'method'
        }
      ],
      currentRole: {},
      chooseMenu: []
    }
  },

  created () {
    this.getData()
    this.getMenus()
  },

  methods: {
    async getData () {
      this.dataSource.list = await getRoles()
    },

    async getMenus () {
      const formatMenus = (data) => {
        return data.map(item => ({
          ...item,
          label: item.name,
          children: formatMenus(item.children)
        }))
      }
      const data = await getPrivilegeMenuTree()
      this.menus = formatMenus(data)
    },

    // 保存角色权限
    async handleSaveRolePr () {
      this.chooseMenu = this.$refs['tree'].getCheckedKeys()
      if (this.currentRole && this.currentRole.id) {
        await distributionRole(this.currentRole.id, {
          privilegeIds: this.chooseMenu
        })

        this.$message({
          message: '保存信息成功',
          type: 'success'
        })

        this.getData()
      } else {
        this.$message('请先选择一个角色')
      }
    },

    // 角色表格选择
    handleChooseRow (val) {
      this.currentRole = val
      this.getRoleDetail(val.id)
    },

    // 获取角色详情
    async getRoleDetail (id) {
      const data = await getRoleById(id)
      this.chooseMenu = data.privileges.filter(item => item.type !== 3).map(item => item.id)
      this.$refs.tree.setCheckedKeys(this.chooseMenu)
    },

    // 显示|隐藏弹窗
    handleToggleModal (type = 'close', row = {}) {
      console.log('---->', type)
      this.modalType = type
      this.updateObj = row
      this.visible = !this.visible
    },

    // 弹窗提交
    async handleSubmit (data) {
      if (this.modalType === 'add') {
        this.handleCreate(data)
      } else if (this.modalType === 'update') {
        this.handleUpdate(data)
      }
    },

    // 添加
    async handleCreate (data) {
      await createRole(data)
      this.$message({
        message: '创建信息成功',
        type: 'success'
      })
      this.handleToggleModal()
      this.getData()
    },

    // 更新
    async handleUpdate (params, type = '') {
      await updateRole(params)
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
        console.log(row.id)
        await deleteRole(row.id)
        this.$message({
          message: '删除信息成功',
          type: 'success'
        })
        this.getData()
      })
    },

    // 启用开关
    handleToggleEnable (row) {
      this.handleUpdate(row, 'switch')
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

<style lang="less" scoped>
  @import "~@/styles/variables.less";

  .current {
    margin: 5px 0;
    font-size: 14px;

    strong {
      color: @baseTextColor;
    }
  }
</style>
