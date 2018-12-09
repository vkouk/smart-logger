<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo__text">
        <router-link to="/">SmartLogger</router-link>
      </div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  & > div {
    margin: 10px 0;
  }
  &__logo {
    border: 2px solid #393e46;
    padding: 25px;
    transform: skew(160deg);
    &__text {
      & > a {
        font-weight: 700;
        color: #393e46;
        text-decoration: none;
        margin-right: 10px;
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.5s ease;
      }
    }
  }
}
</style>
