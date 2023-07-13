import axios, { AxiosRequestConfig } from 'axios'

// https://shop.fed.lagounews.com
// const baseURL = import.meta.env.VITE_API_BASEURL
const request = axios.create({
  // baseURL: 'https://shop.fed.lagounews.com/api/admin/'
  baseURL: import.meta.env.VITE_API_BASEURL
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  // Do something before request is sent
  return config
}, async function (error) {
  // Do something with request error
  return await Promise.reject(error)
})

// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误，比如 token 过期无效、服务端异常等
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, async function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return await Promise.reject(error)
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async <T = any>(config: AxiosRequestConfig) => {
  return await request(config).then(res => {
    return ((Boolean(res.data.data)) || res.data) as T
  })
}
// request 不支持泛型
// request.get、post、put 支持响应数据泛型
// 由于我们的后端又包装了一层数据 data ，导致我们访问数据比较麻烦，所以我们自己封装了一个 request,接受一个泛型
