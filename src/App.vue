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
@import "./assets/css/styles.css";

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
