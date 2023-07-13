import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: 'role',
      name: 'permission-role',
      component: async () => await import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: 'admin',
      name: 'permission-admin',
      component: async () => await import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理员'
      }
    },
    {
      path: 'rule',
      name: 'permission-rule',
      component: async () => await import('@/views/permission/rule/index.vue'),
      meta: {
        title: '权限规则'
      }
    }
  ]
}

export default routes
