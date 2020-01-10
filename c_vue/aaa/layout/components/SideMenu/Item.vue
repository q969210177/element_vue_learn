<template>
  <el-menu-item v-if="!item.children || item.children.length === 0" :index="item.path">
    <i v-if="item.icon" :class="item.icon"></i>
    <span v-if="item.name" slot="title">{{ item.name }}</span>
  </el-menu-item>
  <el-submenu v-else :index="'_'+item.id">
    <template slot="title">
      <i v-if="item.icon" :class="item.icon"></i>
      <span v-if="item.name" slot="title">{{ item.name }}</span>
    </template>
    <v-item
        v-for="child in item.children"
        :item="child"
        :key="'_'+child.id"
    />
  </el-submenu>
</template>

<script>

export default {
  name: 'VItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
