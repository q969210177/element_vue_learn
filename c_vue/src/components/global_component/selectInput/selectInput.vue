<template>
  <div>
    <!-- @select="handleSelect" -->
    <el-autocomplete
      :fetch-suggestions="serachList"
      placeholder="请输入导航名"
      @select="handSelect"
    >
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  name: "AutoSelect",
  props: {
    serlist: {
      type: Array,
      default: null
    }
  },
  data() {
    return { returnSerach: [] };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    //element封装的组件事件 传入返回的数据然后进行会掉
    serachList(queryString, callback) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      callback(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.serlist;
    },
    //时间传递 注册一个自定义事件
    handSelect(item) {
      this.$emit("handSelect", item);
      //this.$router.push({ path: item.path });
    }
  }
};
</script>

<style></style>
