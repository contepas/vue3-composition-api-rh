<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Play' }">Play</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, computed, useCssModule } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  --primary: #367ee9;
  --secondary: #a0aec0;
  --accent: #718096;
  --background: #fff;
  --main: #0d0106;
  --header: #2d3748;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
