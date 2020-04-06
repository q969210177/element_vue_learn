<template>
  <div class="padding_5">
    <eztable
      :laberProp="tableProp"
      :tableData="tableData"
      :tableOption="tableOption"
      :operatingButton="['编辑']"
      @handleClick="changeNanGuoMenu"
    >
    </eztable>
  </div>
</template>

<script src="./nanGuoMenu.js"></script>

<style></style>
