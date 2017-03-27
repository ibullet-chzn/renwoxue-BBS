/**
 * Created by administrator on 2017/3/10.
 */

export default {
  install(Vue, options){

    let say = function () {
      console.log('哈哈哈哈');
    };

    Vue._say = say;
    Vue.prototype.$say = say;
  }
}
