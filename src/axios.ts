import { config } from 'shelljs'
import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/axios'
import { extend } from './helpers/utils'
import defaults from './defaults'

// instance本身是一个函数,合并了Axios类的所有原型和实例属性
function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance(defaults)

export default axios
