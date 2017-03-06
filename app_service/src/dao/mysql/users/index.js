/**
 * Created by administrator on 2017/1/3.
 */

import mysql from '../index';

class Users {
  constructor() {
    console.log('Users 构建完成...')
  }

  // 根据手机号添加 先查询再添加
  addUser() {
    return new Promise((resolve, reject)=> {
      let sql = 'INSERT INTO sys_users(uid,phone,username,password,create_time) VALUES(0,?,?,?,?)';
      let data = ['13948428888', 'ibullet', 'password', new Date()];
      mysql.getPool(sql, data, (err, result)=> {
        resolve(result);
      });
    });
  }

  // 查询所有用户数据
  queryAll() {
    return new Promise((resolve, reject)=> {
      let sql = 'SELECT * FROM sys_users';
      mysql.getPool(sql, {}, (err, result)=> {
        resolve(result);
      });
    });
  }

  // 根据手机号查询用户数据
  queryByPhone(phone) {
    return new Promise((resolve, reject)=> {
      let sql = 'SELECT * FROM sys_users WHERE phone = ?';
      mysql.getPool(sql, [phone], (err, result)=> {
        resolve(result);
      });
    });
  }
}

export default new Users();