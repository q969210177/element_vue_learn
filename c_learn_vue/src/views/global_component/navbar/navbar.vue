<template>
    <div class="navbar">
        <el-row>
            <el-col :xs="{span:2}" :span="1" class="font_size_24  text_center box_shandow">
                <div @click="change">
                    <!-- 'el-icon-caret-left el-icon-caret-right' -->
                    <i
                        :class="{'el-icon-caret-left':!$store.state.collapseMenuCollBol,'el-icon-caret-right':$store.state.collapseMenuCollBol}"></i>
                </div>
            </el-col>
            <el-col :span="6">
                <img class="vertical_align_middle" width="auto" height="40px"
                    src="https://colinbendell.cloudinary.com/image/upload/c_crop,f_auto,g_auto,h_350,w_400/v1512090971/Wizard-Clap-by-Markus-Magnusson.gif"
                    alt="" srcset="">
                <!-- //<el-avatar  ></el-avatar> -->
            </el-col>
            <el-col :span="2" class="box_shandow text_center">
                <div @click="changePassWord()" class="font_size_14">
                    修改密码
                </div>
            </el-col>
        </el-row>
        <el-row>
            <!-- :show-close="$store.state.globalBol.f" -->
            <el-col>
                <el-dialog title="修改密码" :visible.sync="dialogFormVisible"
                    :close-on-click-modal="$store.state.globalBol.f">
                    <el-form ref="ruleForm" :model="changePassWordForm" :rules="changePassWordFormRules">
                        <el-form-item label="账户名" prop="userName">
                            <el-input v-model="changePassWordForm.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="旧密码" prop="oldPassWord">
                            <el-input v-model="changePassWordForm.oldPassWord"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="newPassWord">
                            <el-input v-model="changePassWordForm.newPassWord"></el-input>
                        </el-form-item>
                        <el-form-item label="确认新密码" prop="ComparisonPassword">
                            <el-input v-model="changePassWordForm.ComparisonPassword"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button size="mini">取 消</el-button>
                        <el-button type="primary" size="mini">确 定</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script src="./navbar.js"></script>
<style lang="scss" scoped>
@import url("./navbar.scss");
</style>