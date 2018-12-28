<template>
  <header>
    <nav class="navbar navbar-fixed-top navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle uarr collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse-uarr"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="header__logo">
            <div class="header__logo__text">
              <router-link to="/">SmartLogger</router-link>
            </div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse-uarr">
          <Nav></Nav>
        </div>
      </div>
    </nav>
  </header>
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
  &__logo {
    border: 2px solid #393e46;
    padding: 10px;
    margin-top: 15px;
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
        &:hover {
          text-decoration: none;
          color: #777;
        }
      }
    }
  }
}
</style>
