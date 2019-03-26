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
  font-size: 45px;
  text-align: center;
  background: -webkit-linear-gradient(rgb(126, 63, 251, 1), rgb(63, 94, 251));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h1,
h2 {
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
}
body {
  font-family: "Lato", sans-serif;
  color: rgb(21, 21, 21);
  margin: 25px;
}
</style>
