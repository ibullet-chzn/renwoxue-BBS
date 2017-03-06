/**
 * Created by administrator on 2016/12/29.
 */

import demoService from '../services/demoService';

class UserCtrl {
  constructor() {
    console.log('userCtrl 构造成功...');
  }

  /**
   * 登录
   * @param body {object}
   *   .username {string}
   *   .password {string}
   * @returns {object}
   */
  async login(body) {
    // 处理参数 校验等
    console.log(body);
    // 请求ser判断用户信息 并返回结果给路由接口
    return await userSer.login(body);
  }

  /**
   * 获取用户信息
   * @param userId
   * @returns {Promise}
   */
  async getUserInfo(userId) {
    return await userSer.getUserInfo(userId);
  }
}

export default new UserCtrl();