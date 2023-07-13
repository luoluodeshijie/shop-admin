
<template>
  <!-- 路由的渲染出口 -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import locale from 'element-plus/dist/locale/zh-cn.mjs'
</script>
