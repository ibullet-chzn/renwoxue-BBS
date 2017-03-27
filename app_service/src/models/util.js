/**
 * Created by administrator on 2017/1/10.
 */

class Util {
  constructor() {
    console.log('util 构建完成...')
  }

  objectIsEmpty(object) {
    let hasAttribute = true;
    for (let i in object) {
      hasAttribute = false;
    }
    return hasAttribute;
  }
}

export default new Util();