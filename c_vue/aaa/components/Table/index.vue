<template>
  <el-card class="c-table"
           :shadow="shadow">
    <div class="action">
      <slot name="tb-action"></slot>
    </div>
    <el-table
      ref="table"
      size="mini"
      :max-height="maxHeight"
      :data="dataSource.list"
      border
      row-key="id"
      @selection-change="handelSelectionChange"
      :row-class-name="rowClassName"
      :highlight-current-row="highlightCurrentRow"
      :span-method="spanMethod"
      :default-sort="defaultSort"
    >
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :fixed="item.fixed"
        :type="item.type"
        :property="item.property"
        :label="item.label"
        :align="item.align"
        :selectable="item.selectable"
        :sortable="item.sortable"
        :show-overflow-tooltip="item.showOverflowTooltip"
        :formatter="item.formatter"
        :min-width="item.minWidth"
        :width="item.width">
        <template v-if="!item.type && !item.formatter" v-slot="scope">
          <slot :name="item.property" :row="scope.row" :$index="scope.$index">{{ scope.row[item.property] }}</slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      v-if="dataSource.total"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="dataSource.pageNum"
      :page-sizes="[10, 20, 50, 100, 200]"
      :page-size="dataSource.pageSize"
      :total="dataSource.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script>

export default {
  name: 'Table',
  props: {
    dataSource: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    defaultSort: {
      type: Object,
      default: () => ({})
    },
    rowClassName: {
      type: Function
    },
    maxHeight: {
      type: Number,
      default: window.innerHeight - 80
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    spanMethod: Function,
    // 是否全部展开
    defaultExpandAllRows: {
      type: Boolean,
      default: true
    },
    shadow: {
      default: 'always'
    }
  },

  methods: {
    handleCurrentChange (current) {
      this.$emit('current-change', current)
    },
    handelSelectionChange (selection) {
      this.$emit('selection-change', selection)
    },
    handleSizeChange (size) {
      this.$emit('size-change', size)
    },

    toggleRowSelection (row) {
      this.$refs.table.toggleRowSelection(row)
    },

    clearSelection () {
      this.$refs.table.clearSelection()
    }
  }
}
</script>

<style lang="less" scoped>
  @keyframes toggleSlide {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .c-table {
    .action {
      padding-bottom: 10px;
    }

    .icon, .placeholder {
      display: inline-block;
      margin-right: 10px;
      width: 17px;
      height: 17px;
      vertical-align: middle;
      cursor: pointer;
    }

    .icon {
      line-height: 14px;
      text-align: center;
      background: #fff;
      border: 1px solid #e8e8e8;
    }

    .operate-group {
      display: flex;
      flex-wrap: wrap;

      .item {
        display: block;
        flex: 1;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    }

    .pagination {
      margin-top: 20px;
      text-align: right;
    }

    .tree-ctrl {
      position: relative;
      margin-right: 4px;
      cursor: pointer;
    }

    .tree-placeholder {
      display: inline-block;
      margin-right: 4px;
      width: 14px;
      height: 20px;
      vertical-align: middle;
    }
  }
</style>
