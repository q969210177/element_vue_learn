<template>
    <div class="navbar line_heigth_20">
        <el-row>
            <el-col :span="1"  class="font_size_24  text_center box_shandow" >
                <div  @click="change">
                    <!-- 'el-icon-caret-left el-icon-caret-right' -->
                    <i :class="{'el-icon-caret-left':!$store.state.collapseMenuCollBol,'el-icon-caret-right':$store.state.collapseMenuCollBol}" ></i>
                </div>
            </el-col>
            <el-col  :span="2" class="box_shandow text_center">
                <div @click="changePassWord()" class="font_size_14">
                    修改密码
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col >
                <el-dialog  title="修改密码" :visible.sync="dialogFormVisible" :close-on-click-modal = "$store.state.globalBol.false">
                <el-form :model="changePassWordForm">
                    <el-form-item label="账户名">
                    <el-input  v-model="changePassWordForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item  label="旧密码">
                        <el-input  v-model="changePassWordForm.oldPassWord"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input  v-model="changePassWordForm.newPassWord"></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码">
                        <el-input  v-model="changePassWordForm.ComparisonPassword"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button >取 消</el-button>
                    <el-button type="primary" >确 定</el-button>
                </div>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./navbar.js"></script>
<style lang="scss" scoped>
    .navbar{
        background-color: aquamarine
    }
    /deep/.el-dialog__header {
        background: red
    }
    
</style>