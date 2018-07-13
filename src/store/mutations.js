import {KEY,VALUE}from './mutation-type.js';

export default {
  [KEY](state, key) {
    state.key = key;
  },
  [VALUE](state, value) {
    state.value = value;
  },
};
