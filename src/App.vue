<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
*,
body,
html {
  font-family: "Montserrat", sans-serif;
  background: #fff4e0;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
