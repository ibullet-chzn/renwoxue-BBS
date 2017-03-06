/**
 * Created by administrator on 2016/12/29.
 */

const mysql = require('mysql');
import config from '../../config';

class Mysql {
  constructor() {
    let db_pool_config = {};
    Object.assign(db_pool_config, config.db, config.db_pool);
    this.pool = mysql.createPool(db_pool_config);
    console.log('mysql 构建完成...')
  }

  getPool(sql, data, cb) {
    this.pool.getConnection((err, connection)=> {
      connection.query(sql, data, (err, result)=> {
        try {
          cb(err, result);
        } catch (e) {
          console.log(e);
        } finally {
          connection.release();
        }
      });
    });
  }
}

export default new Mysql();