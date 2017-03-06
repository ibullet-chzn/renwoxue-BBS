/**
 * Created by administrator on 2016/12/29.
 */

import users from '../dao/mysql/users';

import encapsulation from '../models/encapsulation'

export default async(ctx, next) => {
  let queryUserByPhoneResult = await users.queryByPhone('18777156326');
  if (queryUserByPhoneResult.length == 0) {
    let addUserResult = await users.addUser();
    return encapsulation.service('SUSSESS', {
      userId: addUserResult.insertId
    });
  }
  return encapsulation.service('SUCCESS', {
    message: '该手机号已经被注册'
  });
}

class UserSev {
  constructor() {
    console.log('userSev 构造成功...');
  }

  async login(body) {
    // 调用数据库接口查询数据
    let queryUserByUsernameResult = await userDao.queryByUsername(body.username);
    // 处理查询到的数据
    if (queryUserByUsernameResult[0]) {
      // 判断密码是否符合
      if (queryUserByUsernameResult[0].password === body.password) {
        // 更新登录时间
        await userDao.updateLastLoginTime(queryUserByUsernameResult[0].id, queryUserByUsernameResult[0].this_login_time);
        return encapsulation.service('SUCCESS', {id: queryUserByUsernameResult[0].id}, '登录成功');
      }
      // 返回给ctrl数据
      return encapsulation.service('USER_PASSWORD_ERROR');
    }
    return encapsulation.service('USER_USERNAME_ERROR');
  }
}

export default new UserSev();