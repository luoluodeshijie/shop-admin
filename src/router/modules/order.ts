import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  meta: {
    title: '订单管理'
  },
  children: [
    {
      path: 'list',
      name: 'order_list',
      component: async () => await import('@/views/order/list/index.vue'),
      meta: {
        title: '订单列表'
      }
    },
    {
      path: 'offline',
      name: 'order_offline',
      component: async () => await import('@/views/order/offline/index.vue'),
      meta: {
        title: '线下订单'
      }
    }
  ]
}

export default routes
