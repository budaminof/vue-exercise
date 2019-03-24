<template>
  <div id="app">
    <h1>blog posts library</h1>
    <Posts/>
  </div>
</template>

<script>
import Posts from './views/Posts';

export default {
  name: 'App',
  components: { Posts },
};
</script>

<style>
h1 {
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}
body {
  font-family: "Lato", sans-serif;
  color: rgb(21, 21, 21);
  margin: 25px;
}
</style>
