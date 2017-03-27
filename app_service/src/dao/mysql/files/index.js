/**
 * Created by administrator on 2017/1/3.
 */

import mysql from '../index';

class FileDao {
  constructor() {
    console.log('fileDao 构建完成...')
  }

  /**
   * 查询所有数据
   * @returns {Promise}
   */
  queryAll() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM oss_files';
      mysql.getPool(sql, {}, (err, result) => {
        resolve(result);
      });
    });
  }

  /**
   * 根据 path 查询
   * @param path
   * @returns {Promise}
   */
  queryByPath(path) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT * FROM oss_files WHERE file_path = ?';
      mysql.getPool(sql, [path], (err, result) => {
        resolve(result);
      });
    });
  }

  /**
   * 添加一条file数据
   * @param filePath
   * @param fileSuffix
   * @param fields
   * @returns {Promise}
   */
  insert(filePath, fileSuffix, fields) {
    return new Promise((resolve, reject) => {
      let sql = 'INSERT INTO oss_files (id,file_name,file_suffix,file_path,author,type,level,create_time) VALUES (0,?,?,?,?,?,?,?)';
      mysql.getPool(sql, [fields.filename, fileSuffix, filePath, fields.author, fields.type, fields.level, new Date()], (err, result) => {
        console.log(result);
        resolve(result);
      });
    });
  }
}

export default new FileDao();