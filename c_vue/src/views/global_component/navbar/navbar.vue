<template>
  <div class="navbar">
    <el-row>
      <el-col
        :xs="{ span: 3 }"
        :span="1"
        class="line_heigth_20  font_size_18  text_center"
      >
        <div @click="change" class="width_50  box_shandow ">
          <!-- 'el-icon-caret-left el-icon-caret-right' -->
          <i
            :class="{
              'iconfont icon-caidanzhankai': !$store.state.collapseMenuCollBol,
              'iconfont icon-menu': $store.state.collapseMenuCollBol
            }"
          ></i>
        </div>
      </el-col>
      <!-- :md="{span:5,offset:15}" :lg="{span:5,offset:15}" :xl="{span:5,offset:15}" hidden-md-and-down -->
      <el-col :xs="{ span: 21 }" :span="23">
        <el-row>
          <el-col class="hidden-sm-and-down text_rigth" :md="{ span: 22 }" :xl="{ span: 22 }" :lg="{ span: 22 }">
            <!-- <div class="inline_block ">
              <i class="search_icon el-icon-search font_size_24"></i>
            </div> -->
            <div class="inline_block">
              <el-autocomplete v-model="routerSerach" :fetch-suggestions="querySearch" placeholder="请输入导航名" @select="handleSelect"></el-autocomplete>
            </div>
            <!-- :popper-append-to-body="$store.state.globalBol.f" @blur="navbarSerach=false" -->
          </el-col>
          <el-col
            class="text_rigth padding_right_10"
            :md="{ span: 2 }"
            :xl="{ span: 2 }"
            :lg="{ span: 2 }"
          >
            <!-- 最后的跳舞阶段 -->
            <div class="inline_block">
              <el-image :src="src" class="img_size margin_top_3"> </el-image>
            </div>
            <div class="inline_block">
              <el-dropdown
                @command="navbarDropdown"
                size="mini"
                :divided="$store.state.globalBol.t"
                :hide-on-click="$store.state.globalBol.f"
              >
                <i class="el-icon-caret-bottom"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    :command="v.path"
                    v-for="(v, k) in navbarDropdownData"
                    :key="k"
                  >
                    {{ v.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
        <!--  :show-close="$store.state.globalBol.f" -->
      </el-col>
    </el-row>
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
.search_icon {
  transform: translateY(5px);
}
.img_size {
  width: 40px;
  height: 32px;
}
</style>