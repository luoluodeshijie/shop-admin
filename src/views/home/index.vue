<template>
  <h1>首页</h1>
  <el-button>测试按钮</el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="Pick a day"
  />
</template>

<script lang="ts" setup>
import User from '@/api/user'
const value1 = ''
console.log(User)
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

h1 {
  color: $color;
}
</style>
