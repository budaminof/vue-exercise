<template>
  <div class="wrapper">
    <PostsList :posts="userPosts" :info="infoUser"/>
    <PostsList :posts="posts" :info="infoOtherUsers"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostsList from '../components/PostsList';

export default {
  components: { PostsList },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      posts: state => state.post.posts,
      userPosts: state => state.post.userPosts,
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
</style>
