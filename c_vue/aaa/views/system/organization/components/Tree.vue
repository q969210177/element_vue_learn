<template>
  <TreeChart :json="treeData" />
</template>

<script>
import TreeChart from 'vue-tree-chart'
export default {
  components: {
    TreeChart
  },
  data () {
    return {
      treeData: {
        name: 'root',
        children: [
          {
            name: 'children1'
          },
          {
            name: 'children2',
            mate: {
              name: 'mate'
            },
            children: [
              {
                name: 'grandchild'
              },
              {
                name: 'grandchild2'
              },
              {
                name: 'grandchild3'
              }
            ]
          },
          {
            name: 'children3'
          }
        ]
      }
    }
  }
}
</script>
