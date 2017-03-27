/**
 * Created by administrator on 2017/1/10.
 */

class Random {
  constructor() {
    console.log('random 构建完成...')
  }

  timestampIdRandom(userId) {
    // 获取当前时间戳
    let timestamp = new Date().getTime();
    // 生成5位随机数
    let random = parseInt(Math.random() * (99999 - 10000) + 10000);
    return timestamp.toString() + userId.toString() + random.toString();
  }
}

export default new Random();