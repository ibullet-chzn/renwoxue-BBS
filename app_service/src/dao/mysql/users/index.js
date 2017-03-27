/**
 * Created by administrator on 2017/1/3.
 */

import mysql from '../index';

class Users {
  constructor() {
    console.log('Users 构建完成...')
  }

  // 根据手机号添加 先查询再添加
  addUser(body) {
    return new Promise((resolve, reject) => {
      let sql = 'INSERT INTO sys_users (username,phone,title,user_desc,image) VALUES (?,?,?,?,?)';
      let data = [body.name, body.phone, body.title, body.desc, body.imageUrl];
      mysql.getPool(sql, data, (err, result) => {
        resolve(result);
      });
    });
  }

  // 查询所有用户数据
  queryAll() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM sys_users';
      mysql.getPool(sql, {}, (err, result) => {
        resolve(result);
      });
    });
  }

  // 根据用户名查询用户数据
  queryByUsername(name) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM sys_users WHERE username = ?';
      mysql.getPool(sql, [name], (err, result) => {
        resolve(result);
      });
    });
  }

  // 根据手机号查询用户数据
  queryByPhone(phone) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM sys_users WHERE phone = ?';
      mysql.getPool(sql, [phone], (err, result) => {
        resolve(result);
      });
    });
  }
}

export default new Users();