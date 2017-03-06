/**
 * Created by administrator on 2017/1/10.
 */

class Enumeration {
  constructor() {
    console.log('enumeration 构建完成...')
  }

  /**
   * code 枚举值
   * @param name
   * @returns {*[]}
   */
  globalCode(name) {
    const Enums = {
      /**
       * 成功 正常返回
       */
      SUCCESS: 0,
      SUCCESS_TEXT: 'Success',
      /**
       * 登录相关
       */
      NOT_LOGIN: -101,
      NOT_LOGIN_TEXT: '用户未登录',
    };
    return [Enums[name], Enums[name + '_TEXT']];
  }

  /**
   * status 枚举值
   * @param name
   * @returns {*[]}
   */
  statusConversion(name) {
    const Enums = {
      /**
       * 成功 正常返回
       */
      SUCCESS: 0,
      SUCCESS_TEXT: 'Success',
      /**
       * 用户相关
       */
      USER_USERNAME_ERROR: -101,
      USER_USERNAME_ERROR_TEXT: '账户名错误',
      USER_PASSWORD_ERROR: -102,
      USER_PASSWORD_ERROR_TEXT: '密码错误',
      USER_NOT_DEFINED: -103,
      USER_NOT_DEFINED_TEXT: '用户不存在',
      /**
       * 文件相关
       */
      FILE_NOT_DEFINED: -201,
      FILE_NOT_DEFINED_TEXT: '无法下载,文件不存在或者已经损坏',
    };
    return [Enums[name], Enums[name + '_TEXT']];
  }
}

export default new Enumeration();