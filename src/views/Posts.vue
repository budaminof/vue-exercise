<template>
  <div class="wrapper">
    <Loading v-if="loading" class="center"/>
    <Error v-if="error" class="center"/>
    <PostsList v-if="!loading && !error" :posts="userPosts" :info="infoUser"/>
    <PostsList v-if="!loading && !error" :posts="posts" :info="infoOtherUsers"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostsList from '../components/PostsList';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default {
  components: { PostsList, Loading, Error },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      posts: state => state.post.posts,
      userPosts: state => state.post.userPosts,
      loading: state => state.post.loading,
      error: state => state.post.error,
    }),
    infoUser() {
      return `posts by user ${this.user.id}`;
    },
    infoOtherUsers() {
      return 'posts by everyone else';
    },
  },
  methods: {
    ...mapActions('post', {
      fetchPosts: 'fetchPosts',
    }),
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.center {
  margin: 0 auto;
}
</style>
