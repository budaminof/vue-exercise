import PostService from '../../services/PostService';

export const namespaced = true;

export const state = {
  posts: [],
  userPosts: [],
  loading: false,
  error: false,
};

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  SET_USER_POSTS(state, posts) {
    state.userPosts = posts;
  },
  LOADING(state, status) {
    state.loading = status;
  },
  ERROR(state, status) {
    state.error = status;
  },
};

export const actions = {
  async fetchPosts({ commit, rootState }) {
    commit('LOADING', true);
    commit('ERROR', false);
    try {
      const res = await PostService.getPosts();
      const userPosts = res.data
        .filter(item => Number(item.userId) === Number(rootState.user.user.id));
      const posts = res.data.filter(item => Number(item.userId) !== Number(rootState.user.user.id));
      commit('SET_POSTS', posts);
      commit('SET_USER_POSTS', userPosts);
      commit('LOADING', false);
    } catch (err) {
      commit('LOADING', false);
      commit('ERROR', true);
    }
  },
};
