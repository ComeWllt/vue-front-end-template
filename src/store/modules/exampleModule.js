import { EXAMPLE_MUTATION } from '@/store/constants/mutation-types';

const exampleModule = {
  state: {
    exampleText: 'Hello World!',
  },
  actions: {},
  mutations: {
    [EXAMPLE_MUTATION]: (state, payload) => {
      state.exampleText = payload.newText;
    },
  },
  getters: {},
  modules: {},
};

export default exampleModule;
