import { createLocalVue, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import Posts from '../../../src/views/Posts';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('========== POSTS VIEW ============', () => {
  let actions;
  let store;
  const state = {
    user: { user: { id: 1 } },
    post: { posts: [], userPosts: [], loading: false, error: false },
  };

  beforeEach(() => {
    actions = {
      fetchPosts: sinon.spy(),
    };

    store = new Vuex.Store({
      modules: {
        post: {
          namespaced: true,
          state: state.post,
          actions,
        },
        user: {
          namespaced: true,
          state: state.user,
        },
      },
    });
  });

  it('dispatch action to fetchPosts when the component is created', () => {
    shallowMount(Posts, { store, localVue });
    sinon.assert.calledOnce(actions.fetchPosts);
  });
});
