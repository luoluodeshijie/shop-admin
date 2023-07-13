import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      // 配置选项
      cache: false // 禁用缓存
    }),
    checker({
      typescript: true
    }),
    vueJsx({
      // 配置
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src') // 绝对路径
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // /foo/123 => http://localhost:4567/foo/123
      // '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/admin': {
        // /admin/login => https://shop.fed.lagounews.com/api/admin//login
        target: 'https://shop.fed.lagounews.com/api', // 代理的目标地址
        // 兼容给予名字的虚拟主机
        // a.com localhost:xxx
        // b.com localhost:xxx
        // HTTP 请求头部的 origin 字段
        // 我们在开发模式：默认的 origin 是真实的 origin:localhost:3000
        // changeOrigin： true ，代理服务会把 origin 修改为目标地址 http://jsonplaceholder.typicode.com
        changeOrigin: true

        // 路径重写
        // http://jsonplaceholder.typicode.com/api/xxx
        // /api/xxx  =>  http://jsonplaceholder.typicode.com/api/xxx
        // http://jsonplaceholder.typicode.com/xxx
        //    /api/xxx  =>  http://jsonplaceholder.typicode.com/xxx
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
