import {SEARCH} from './mutation-types.js'

export default {
  nameAsyn({commit}, {name}) {
    commit(SEARCH, name);
  }
};
