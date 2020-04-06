<template>
  <div>
    <el-form
      ref="form"
      class="page-form"
      :class="className"
      :model="data"
      :rules="rules"
      :label-width="labelWidth"
    >
      <el-form-item
        v-for="(item, index) in getConfigList()"
        :key="index"
        :prop="item.value"
        :label="item.label"
        :class="item.className"
      >
        <!-- solt -->
        <template v-if="item.type === 'slot'">
          <slot :name="'form-' + item.value" />
        </template>
        <!-- 普通输入框 -->
        <el-input
          v-if="item.type === 'input' || item.type === 'password'"
          v-model="data[item.value]"
          :type="item.type"
          :disabled="item.disabled"
          :placeholder="getPlaceholder(item)"
          @focus="handleEvent(item.event)"
        />
        <!-- 文本输入框 -->
        <el-input
          v-if="item.type === 'textarea'"
          v-model.trim="data[item.value]"
          :type="item.type"
          :disabled="item.disabled"
          :placeholder="getPlaceholder(item)"
          :autosize="{ minRows: 2, maxRows: 10 }"
          @focus="handleEvent(item.event)"
        />
        <!-- 计数器 -->
        <el-input-number
          v-if="item.type === 'inputNumber'"
          v-model="data[item.value]"
          size="small"
          :min="item.min"
          :max="item.max"
          @change="handleEvent(item.event)"
        />
        <!-- 选择框 -->
        <el-select
          v-if="item.type === 'select'"
          v-model="data[item.value]"
          :disabled="item.disabled"
          :clearable="item.clearable"
          :filterable="item.filterable"
          :placeholder="getPlaceholder(item)"
          @change="handleEvent(item.event, data[item.value])"
        >
          <el-option
            v-for="(childItem, childIndex) in listTypeInfo[item.list]"
            :key="childIndex"
            :label="childItem.key"
            :value="childItem.value"
          />
        </el-select>
        <!-- 日期选择框 -->
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="data[item.value]"
          :type="item.dateType"
          :picker-options="item.TimePickerOptions"
          :clearable="item.clearable"
          :disabled="item.disabled"
          :placeholder="getPlaceholder(item)"
          @focus="handleEvent(item.event)"
        />
        <!-- 信息展示框 -->
        <el-tag v-if="item.type === 'tag'">
          {{
            $fn.getDataName({
              dataList: listTypeInfo[item.list],
              value: "value",
              label: "key",
              data: data[item.value]
            }) || "-"
          }}
        </el-tag>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./ez_form.js">
export default {};
</script>

<style></style>
