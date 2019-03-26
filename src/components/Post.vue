<template>
  <div>
    <slot name="title"></slot>
    <slot name="body"></slot>
  </div>
</template>

<style scoped>
div:after {
  display: block;
  content: "";
  height: 3px;
  background: rgb(63, 94, 251);
  transform: scaleX(0.0001);
  transition: transform 250ms ease-in-out;
  box-shadow: inset -200px 0px 30px -25px rgb(126, 63, 251, 1),
    inset 200px 0px 30px -25px rgba(34, 236, 161, 1);
}
div:hover:after {
  transform: scaleX(1);
}
</style>
