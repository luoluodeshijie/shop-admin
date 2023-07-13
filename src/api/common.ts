/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import type { ILoginInfo } from './types/common'

// interface ResponseData<T = any> {
//   status: number
//   msg: string
//   data: T
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getLoginInfo = async () => {
  // return await request({
  //   method: 'GET',
  //   url: '/login/info'
  // })

  // return await request.get<ResponseData<{
  //   status: number
  //   msg: string
  //   data: {
  //     logo_square: string
  //     logo_rectangle: string
  //     login_logo: string
  //     slide: string[]
  //   }
  // }>>('/login/info').then(res => {
  //   return res.data
  // })

  return await request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getCaptcha = async () => {
  return await request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' //  请求获取图片数据
  })
}
