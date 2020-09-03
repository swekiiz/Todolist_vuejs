import { createStore } from 'vuex';

export default createStore({
  state: {
    list: [],
    isDeleteVisible: false,
  },
  mutations: {
    addListMutations(state, value) {
      state.list.push(value);
    },
    delListMutations(state, value) {
      const i = state.list.indexOf(value);
      if (i > -1) {
        state.list.splice(i, 1);
      }
    },
    swapVisibleMutations(state) {
      state.isDeleteVisible = !state.isDeleteVisible;
    },
  },
  actions: {
    ADDLIST({ commit }, value) {
      commit('addListMutations', value.text);
    },
    DELLIST({ commit }, value) {
      commit('delListMutations', value.text);
    },
    SWAPVISIBLE({ commit }) {
      commit('swapVisibleMutations');
    },
  },
  modules: {},
});
