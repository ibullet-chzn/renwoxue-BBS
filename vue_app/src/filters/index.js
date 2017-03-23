/**
 * Created by administrator on 2017/3/10.
 */

import Vue from 'vue'

Vue.filter('transform', function (value) {
  const types = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'S',
    5: 'SS',
    6: 'SSS',
  };
  return types[value];
});
