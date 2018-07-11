import {SEARCH}from './mutation-type.js';

export default {
  [SEARCH](state, name) {
    state.name = name;
  },

};
