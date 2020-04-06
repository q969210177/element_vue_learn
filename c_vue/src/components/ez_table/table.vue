<template>
  <div>
    <el-table
      :data="tableData"
      :border="$attrs.tableOption.border"
      :stripe="$attrs.tableOption.stripe"
    >
      <el-table-column
        v-for="(v, k) in laberProp"
        :key="k"
        :prop="v.prop"
        :label="v.label"
        min-width="180"
      >
      </el-table-column>

      <el-table-column
        v-if="operatingButton"
        fixed="right"
        label="操作"
        min-width="100"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(v, k) in operatingButton"
            :key="k"
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            {{ v }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./table.js"></script>

<style lang="scss" scoped></style>
