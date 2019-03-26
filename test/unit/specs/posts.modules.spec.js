import { expect } from 'chai';
import { mutations, actions } from '../../../src/store/modules/post';
import PostService from '../../../src/services/PostService';
import posts from '../../__mocks__/data';

describe('========== POST MODULE ============', () => {
  describe('MUTATIONS', () => {
    const state = {
      posts: [],
      userPosts: [],
      loading: false,
      error: false,
    };
    it('set loading to true or false', () => {
      expect(state.loading).to.equal(false);
      mutations.LOADING(state, true);
      expect(state.loading).to.equal(true);
      mutations.LOADING(state, false);
      expect(state.loading).to.equal(false);
    });

    it('set error to true or false', () => {
      expect(state.error).to.equal(false);
      mutations.ERROR(state, true);
      expect(state.error).to.equal(true);
      mutations.ERROR(state, false);
      expect(state.error).to.equal(false);
    });

    it('set posts of the filter data returned for all the users (but current user)', () => {
      expect(state.posts).to.have.lengthOf(0);
      mutations.SET_POSTS(state, posts.filter(item => Number(item.userId) !== 1));
      expect(state.posts).to.have.lengthOf(8);
    });

    it('set posts of the filtered data for the current user with id of 1', () => {
      expect(state.userPosts).to.have.lengthOf(0);
      mutations.SET_USER_POSTS(state, posts.filter(item => Number(item.userId) === 1));
      expect(state.userPosts).to.have.lengthOf(3);
    });
  });

  describe('ACTIONS', () => {
    const rootState = { user: { user: { id: 1 } } };

    it('calls the API and commit filtered data on sucess', async () => {
      const commit = sinon.spy();
      const postsAPI = sinon.stub(PostService, 'getPosts');
      postsAPI.resolves({ data: posts });
      await actions.fetchPosts({ commit, rootState });

      expect(commit.args).to.have.length(5);
      expect(commit.args[2][1].length).to.equal(8);
      expect(commit.args[2][0]).to.equal('SET_POSTS');
      expect(commit.args[2][1].length).to.equal(8);
      expect(commit.args[3][0]).to.equal('SET_USER_POSTS');
      expect(commit.args[3][1].length).to.equal(3);
      expect(postsAPI.calledOnce).to.be.true;
      PostService.getPosts.restore();
    });

    it('commit error when the API call fails', async () => {
      const commit = sinon.spy();
      const postsAPI = sinon.stub(PostService, 'getPosts');
      postsAPI.rejects(new Error());
      await actions.fetchPosts({ commit, rootState });

      expect(postsAPI.calledOnce).to.be.true;
      expect(commit.args).to.have.length(4);
      expect(commit.args[3]).to.deep.equal(['ERROR', true]);
      PostService.getPosts.restore();
    });
  });
});
