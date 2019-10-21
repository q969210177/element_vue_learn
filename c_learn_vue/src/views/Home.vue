<template>
  <div class="home">
    <el-row>
      <!-- 顶部的导航 -->
      <el-col  :span="1">
        <el-row > 
          <navMenu ></navMenu>
        </el-row>
      </el-col>
      <!-- 顶部的导航头 -->
      <el-col  :span="23" >
        <el-row>
          <navHeader ></navHeader>
        </el-row>
        <el-row>
          <router-view />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      bol:false,
      num:5
    }
  },
  
  mounted () {
    
    
  },
 
  methods: {
    
  },
  components: { 
  
  }
};
</script>
