<template>
  <ul class="header__nav__list">
    <li class="header__nav__item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="header__nav__item">
      <router-link to="/profile/1">Profile</router-link>
    </li>
    <li class="header__nav__item">
      <router-link to="/login">Login</router-link>
    </li>
    <li class="header__nav__item">
      <router-link to="/register">Register</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss">
.header__nav {
  &__list {
    display: flex;
    padding: 0;
  }
  &__item {
    list-style: none;
    & > a {
      font-weight: 700;
      color: #393e46;
      text-decoration: none;
      margin-right: 15px;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.5s ease;
      &.is-active {
        &::after {
          content: "";
          border: 2px solid #fc3c3c;
          display: flex;
          width: 35px;
        }
      }
    }
  }
}
</style>