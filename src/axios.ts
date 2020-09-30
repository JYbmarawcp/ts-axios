import { config } from 'shelljs'
import { AxiosInstance } from './types'
import Axios from './core/axios'
import { extend } from './helpers/utils'

// instance本身是一个函数,合并了Axios类的所有原型和实例属性
function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
