import Vue from 'vue';
import Vuex from 'vuex';
import exampleModule from './modules/exampleModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    exampleModule: exampleModule,
  },
});
export default store;
