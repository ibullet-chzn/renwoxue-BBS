/**
 * Created by administrator on 2017/3/10.
 */

import Vue from 'vue'

// initial state
const state = {
  status: -1
};

const getters = {
  getters_users_getInfo: state => {
    console.log('getters 调用啦');
    // return new Promise((resolve, reject) => {
    //   Vue.http.post('/api/getUserInfo').then(res => {
    //     if (res.data.status === 0) {
    //       state.id = res.data.result.id;
    //     }
    //     resolve(state);
    //   }, err => {
    //     resolve(err);
    //   });
    // });
  }
};

const actions = {
  async actions_users_getInfo ({getters, commit}) {
    console.log('actions 调用啦');
    //return await getters.getters_users_getInfo;
  }
};

// mutations
const mutations = {
  USERS_CLEARINFO (state){
    console.log('mutations 调用啦')
    //state.status = -1;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
