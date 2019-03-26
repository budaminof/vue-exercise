<template>
  <div class="posts">
    <h2>{{info}}</h2>
    <Post v-for="post in posts" :key="post.id">
      <template slot="title">
        <h3>{{post.title}}</h3>
      </template>
      <template slot="body">
        <p>{{post.body}}</p>
      </template>
    </Post>
  </div>
</template>

<script>
import Post from './Post';

export default {
  components: { Post },
  props: {
    info: {
      type: String,
      required: true,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-post {
  border-right: 5px solid rgb(21, 21, 21);
  padding-right: 30px;
}

.posts {
  height: 90vh;
  overflow: scroll;
  width: 45vw;
}

h2 {
  text-transform: uppercase;
}
</style>
