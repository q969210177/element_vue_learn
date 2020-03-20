<template>
  <div class="navbar">
    <el-row>
      <el-col
        :xs="{ span: 3 }"
        :span="1"
        class="line_heigth_20  font_size_18  text_center"
      >
        <div class="width_50  box_shandow " @click="change">
          <i
            :class="{
              'iconfont icon-caidanzhankai': !$store.state.collapseMenuCollBol,
              'iconfont icon-menu': $store.state.collapseMenuCollBol
            }"
          ></i>
        </div>
      </el-col>
      <el-col :xs="{ span: 21 }" :span="23">
        <el-row>
          <el-col
            class="text_right padding_right_10"
            :md="{ span: 2, offset: 22 }"
            :xl="{ span: 2, offset: 22 }"
            :lg="{ span: 2, offset: 22 }"
          >
            <div class="inline_block">
              <img
                class="img_size margin_top_3"
                :src="$store.state.userImgSrc"
              />
            </div>
            <div class="inline_block">
              <el-dropdown
                size="mini"
                :divided="$store.state.globalBol.t"
                :hide-on-click="$store.state.globalBol.f"
                @command="navbarDropdown"
              >
                <i class="el-icon-caret-bottom"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(v, k) in navbarDropdownData"
                    :key="k"
                    :command="v.path"
                  >
                    {{ v.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <!-- 
      

       -->
  </div>
</template>
<script src="./navbar.js"></script>
<style lang="scss" scoped>
.height_40 {
  height: 40px;
}
.navbar {
  background-color: #ccffff;
  height: 40px;
  overflow: hidden;
  box-shadow: 0px 1.5px 1px rgba(0, 0, 0, 0.2);
}
/deep/.el-dialog__title {
  color: #fff;
}
/deep/.el-input__inner {
  border: none;
  border-bottom: 1px solid #d9d9d9;
  height: 40px;
  border-radius: 0;
}
// .search_icon {
//   transform: translateY(5px);
// }
.img_size {
  width: 40px;
  height: 32px;
}
</style>
