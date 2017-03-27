// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';

Vue.use(VueResource);

// 添加第三方 UI 插件
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

// 添加 全局 directive
import './directives'

// 添加 全局 filter
import './filters'

// 引入数据状态机 store
import store from './store'

// 添加自定义插件
import test from './plugins'
Vue.use(test);

Vue.config.productionTip = false;

// ajax 请求的全局拦截器
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    let {status, body} = response;
    if (status == 200) {
      if (body.code != 0) {
        response.status = 500;
        response.statusMessage = body.message || '系统异常';
        response.statusText = 'Internal Server Error';
        response.ok = false;
      } else {
        response.data = body.data;
      }
    } else {
      response.statusMessage = '系统异常';
    }
    return response;
  })
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
});
