<template>
  <div class="header-wrap">
    <div class="left-item">
      <hamburger :is-active="collapse" class="hamburger-container" @toggleClick="toggleCollapse"/>
      <breadcrumb class="breadcrumb-container"/>
    </div>
    <div class="right-menu">
<!--      <el-dropdown class="message-container right-menu-item hover-effect" trigger="click">-->
<!--        <div class="message-wrapper">-->
<!--          <el-badge :value="agentTask.length" :max="99">-->
<!--            <i class="el-icon-bell"></i>-->
<!--          </el-badge>-->
<!--        </div>-->
<!--        <el-dropdown-menu slot="dropdown">-->
<!--          <message :data="agentTask" />-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
      <el-dropdown class="avatar-container right-menu-item hover-effect">
        <div class="avatar-wrapper">
          <span>{{ user.name }}</span>
          <img src="../../../assets/images/avatar.png" class="user-avatar">
<!--          <img :src="user.avatar" class="user-avatar">-->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <div class="el-icon-s-check" @click="handleToggleModal"> 修改密码</div>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <div class="el-icon-switch-button" @click="logout"> 退出</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <update-password-modal
        :visible="modalVisible"
        @handleToggleModal="handleToggleModal"
    />
  </div>
</template>

<script>
import Hamburger from '../Hamburger'
import Breadcrumb from '../Breadcrumb'
import UpdatePasswordModal from './UpdatePasswordModal'
import { mapGetters, mapActions } from 'vuex'
import { logout } from '@/api/basic'

export default {
  components: {
    Hamburger,
    Breadcrumb,
    UpdatePasswordModal
  },
  computed: {
    ...mapGetters([
      'user',
      'collapse'
    ])
  },
  data () {
    return {
      modalVisible: false,
      agentTask: []
    }
  },
  created () {
  },
  methods: {
    ...mapActions({ 'toggleCollapse': 'app/toggleCollapse', 'clearUser': 'user/clearUser' }),
    async logout () {
      this.$confirm('退出后将清理登陆信息，是否继续？', '退出确认', {
        type: 'warning'
      }).then(async () => {
        await logout()
        this.clearUser()
        this.$message({
          message: '用户成功退出！',
          type: 'success'
        })
        this.$router.push('/login')
      })
    },
    handleToggleModal () {
      this.modalVisible = !this.modalVisible
    }
  }
}
</script>

<style lang="less" scoped>
  .header-wrap{
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .left-item{
    float: left;
    height: 100%;
    line-height: 46px;
  }
  .hamburger-container{
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container{
    line-height: 46px;
    height: 100%;
    float: left;
    padding-top: 18px;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 46px;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 10px;
      .avatar-wrapper {
        margin-top: 4px;
        position: relative;
        line-height: 36px;
        span{
          font-size: 14px;
          padding-left: 12px;
          padding-right: 12px;
        }
        .user-avatar {
          cursor: pointer;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 17px;
          font-size: 12px;
        }
      }
    }
    .message-container{
      margin-right: 5px;
    }
  }
</style>
<style lang="less">
  .el-breadcrumb__inner, .el-breadcrumb__inner a{
    font-weight: normal!important;
  }
  .message-container{
    .el-badge__content.is-fixed{
      top: 11px;
    }
  }
</style>
