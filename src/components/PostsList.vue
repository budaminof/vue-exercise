<template>
  <div>
    <h2>List container</h2>
    <Post/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Post from './Post';

export default {
  components: { Post },
  created() {
    this.fetchPosts();
  },
  computed: {
    ...mapState(['post']),
  },
  methods: {
    ...mapActions('post', {
      fetchPosts: 'fetchPosts',
    }),
  },
};
</script>

<style scoped>
</style>
