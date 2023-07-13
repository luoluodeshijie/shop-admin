<template>
  <el-menu
    :unique-opened="false"
    default-active="$router.path"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="rgba(255,255,255,0.7)"
    active-text-color="#2d8cf0"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><setting /></el-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/attr">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/classify">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/reply">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><document /></el-icon>
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          角色
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          管理员
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          权限规则
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>订单管理</span>
      </template>
      <el-menu-item index="/order/list">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          订单列表
        </template>
      </el-menu-item>
      <el-menu-item index="/order/offline">
        <el-icon><icon-menu /></el-icon>
        <template #title>
          线下订单
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store/main'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

const mainStore = useMainStore()
const { isCollapse } = storeToRefs(mainStore)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
