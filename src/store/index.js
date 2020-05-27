import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      goldStats: {
        total: 10,
        perClick: 1,
        perClickCost: 10,
        pickLevels: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
  },
  mutations: {},
  actions: {},
  modules: {}
});
