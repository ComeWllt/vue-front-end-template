import { expect } from 'chai';
import exampleModule from '@/store/modules/exampleModule';
import { EXAMPLE_MUTATION } from '@/store/constants/mutation-types';

describe('mutations', () => {
  describe('example module', () => {
    it('should change example text', () => {
      const state = {
        exampleText: 'Hello, World!',
      };
      const payload = {
        newText: 'Hi, I am the new text',
      };
      exampleModule.mutations[EXAMPLE_MUTATION](state, payload);
      expect(state.exampleText).to.equal(payload.newText);
    });
  });
});
