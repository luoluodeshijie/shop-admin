import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import elementPlus from './plugins/element-plus'
// 加载全局样式
import './styles/index.scss'

const pinia = createPinia()
createApp(App)
  .use(pinia)
  .use(router)
  .use(elementPlus, { size: 'mini' })
  .mount('#app')
