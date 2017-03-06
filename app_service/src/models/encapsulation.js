/**
 * Created by administrator on 2017/1/10.
 */

import enumeration from './enumeration'

/**
 * 数据接口封装
 * 依赖枚举类型
 */
class Encapsulation {
  constructor() {
    console.log('encapsulation 构建完成...')
  }

  /**
   * service 返回结果处理
   * @param enums {string}
   * @param result {object}
   * @param errMessage {string}
   * @returns {{status: number, errMessage: string, data: object}}
   *
   * 错误码 每个service层接口自定义
   */
  service(enums, result, errMessage) {
    return {
      status: enumeration.statusConversion(enums)[0],
      errMessage: errMessage || enumeration.statusConversion(enums)[1],
      result: result
    }
  }

  /**
   * body 返回结果处理
   * @param enums {string}
   * @param data {object}
   * @returns {{code: number, message: string, result: object}}
   *
   * 错误码 来自枚举类型
   */
  body(enums, data) {
    return {
      code: enumeration.globalCode(enums)[0],
      message: enumeration.globalCode(enums)[1],
      data: data
    }
  }
}

export default new Encapsulation();