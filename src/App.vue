<template>
  <div class="wrapper">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
@import "./assets/css/styles.css";

a:hover {
  cursor: pointer;
}

#nprogress .bar {
  background: #777;
}

#nprogress .spinner-icon {
  border-top-color: #777;
  border-left-color: #777;
}

.form-control {
  padding: 10px 40px;
}
</style>
