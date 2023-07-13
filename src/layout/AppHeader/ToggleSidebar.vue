<template>
  <el-icon
    v-if="mainStore.isCollapse"
    @click="toggleSidebar"
  >
    <Expand />
  </el-icon>
  <el-icon
    v-else
    @click="toggleSidebar"
  >
    <Fold />
  </el-icon>
</template>

<script lang="ts" setup>
import { Expand, Fold } from '@element-plus/icons-vue'
import { useMainStore } from '@/store/main'

const mainStore = useMainStore()

const toggleSidebar = (): void => {
  mainStore.setIsCollapse(!mainStore.isCollapse)
}

</script>

<style lang="scss" scoped></style>
