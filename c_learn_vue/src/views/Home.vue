<template>
  <div class="home">
    <el-row>
      <!-- 顶部的导航 -->
      <el-col  :span="4">
        <el-row > 
          <navMenu></navMenu>
        </el-row>
          
      </el-col>
      <el-col  :span="20" >
        <el-row>
          <navHeader></navHeader>
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
      bol:true,
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
