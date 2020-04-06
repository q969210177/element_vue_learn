<template>
  <div class="width_80 padding_top_20 comFather">
    <div class="border_ccc padding_2">
      <div class="text_center  margin_bottom_10">
        {{ form.groupBuyName }}
      </div>
      <el-form
        ref="nanGuoUserform"
        :model="form"
        label-width="auto"
        :rules="nanGupRules"
      >
        <el-form-item label="姓名" prop="groupBuyUserName">
          <el-input v-model="form.groupBuyUserName"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="groupBuyIdUserTel">
          <el-input v-model="form.groupBuyIdUserTel"></el-input>
        </el-form-item>
        <el-form-item label="输入楼栋" prop="groupBuyIdLouDong">
          <el-select
            v-model="form.groupBuyIdLouDong"
            placeholder="请选择楼栋区域"
          >
            <el-option v-for="(v, k) in loudongList" :value="v" :key="k">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="门牌号码" prop="groupBuyHouseNumber">
          <el-input v-model="form.groupBuyHouseNumber"></el-input>
          <div class="font_size_8 font_col_ccc text_center line_heigth_10">
            举例:2903
          </div>
        </el-form-item>
        <!-- @change="checked => checkRow(v, k)"    @change="checked => checkRow(k)" -->
        <el-form-item label="套餐选择" prop="userVegMenu">
          <el-checkbox-group v-model="form.checkBoxStaus">
            <div v-for="(v, k) in tsertList" :key="k">
              <div>
                <!-- 选择按钮 -->
                <el-checkbox
                  @change="checked => checkRow(v, k)"
                  :label="v.groupbuyId"
                  name="userVegMenu"
                >
                  {{ v.name }}
                </el-checkbox>
                <!-- 单价-->
                <span>
                  <el-button type="text">单价:{{ v.pic }}</el-button>
                </span>
                <!-- 點擊查看详情 -->
                <span class="margin_left_5">
                  <el-button
                    @click="lookDetails(k)"
                    type="text"
                    style="color:red"
                  >
                    详情
                  </el-button>
                </span>
              </div>
              <!-- 计数器 :disabled="v" @change="vegMenuChange($event)"  @change="
                      (oldval, newval) => vegMenuChange(oldval, newval, k, v)
                    " .toFixed(2)-->
              <div>
                <span>
                  <el-input-number
                    v-model="form.sizeNum[k]"
                    size="mini"
                    :min="0"
                    @change="vegMenuChange($event, v, k)"
                    :disabled="form.numsControlsStatus[k]"
                  ></el-input-number>
                </span>
              </div>
            </div>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="总价"
          >{{ form.groupBuytotalPrice }}元
        </el-form-item>
        <el-form-item class="text_center">
          <el-button
            size="mini"
            type="primary"
            @click="nanGuoSumit('nanGuoUserform')"
          >
            提交
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 模态框详情 -->
    <el-dialog
      ref="comDialogImg"
      :title="commonDialog.comDialogTitle"
      :visible.sync="commonDialog.state"
      width="100%"
      fullscreen
    >
      <div class="text_center">
        <div class="padding_top_5 padding_bottom_5">
          <img width="300px" height="" :src="commonDialog.comDialogImgSrc" />
        </div>

        <div class=" font_size_22 margin_top_5">
          {{ commonDialog.comDialogPrompt }}
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" round @click="commonDialog.state = false">
          返回首页
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./Common.js"></script>

<style lang="scss" scoped>
@import "./Common.scss";
</style>
