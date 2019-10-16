<template>
  <div class="home">
    <el-row>
      <!-- 顶部的导航 -->

      <el-col :span="4" class="border_red">
          <navMenu></navMenu>
      </el-col>
      <el-col :span="20" class="border_red">
        <navHeader></navHeader>
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
