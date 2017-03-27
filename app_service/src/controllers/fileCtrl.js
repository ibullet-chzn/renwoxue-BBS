import fs from 'fs'
import path from 'path'
import util from '../models/util'
import random from '../models/random'
import encapsulation from '../models/encapsulation'

import config from '../config'

import fileSer from '../services/fileSer';

class FileCtrl {
  constructor() {
    console.log('fileCtrl 构造成功...');
  }

  /**
   * 文件上传接口 支持包含其他数据的传递
   * @param files
   * @param fields
   * @returns {Promise.<*>}
   */
  async upload(files, fields) {
    // 文件格式校验 此处不校验
    // query 数据校验
    if (!util.objectIsEmpty(fields)) {
      console.log(fields);
    }
    // 获取文件后缀
    let fileNameParsing = files[0].filename.split('.');
    let fileSuffix = fileNameParsing[fileNameParsing.length - 1];
    // 创建文件地址
    let filename = random.timestampIdRandom('010');
    let filePath = path.join(config.file_path, filename + '.' + fileSuffix);
    // 创建写文件流
    let stream = fs.createWriteStream(filePath);
    files[0].pipe(stream);
    // 判断是否要存数据库
    if (!util.objectIsEmpty(fields)) {
      return await fileSer.upload(filePath, fileSuffix, fields);
    } else {
      return encapsulation.service('SUCCESS', {
        path: path.join(config.address, filePath)
      });
    }
  }

  /**
   * 文件下载
   * 根据 文件路径下载 file
   * @param body
   * @returns {Promise.<{status: number, errMessage: string, data: Object}>}
   */
  async download(body) {
    let queryFileResult = await fileSer.queryFileByPath(body.file);
    // 读取文件流
    return new Promise((resolve, reject) => {
      if (queryFileResult.status === 0) {
        let crs = fs.createReadStream(path.join(queryFileResult.result.filePath));
        crs.on('readable', () => {
          resolve({
            fileName: queryFileResult.result.fileName,
            file: crs.read()
          });
        });
        crs.on('error', () => {
          reject(queryFileResult);
        });
      } else {
        reject(queryFileResult);
      }
    });
  }
}

export default new FileCtrl();
