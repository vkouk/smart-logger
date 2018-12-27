<script>
import { SIGNIN_MUTATION } from "../mutations";
import router from "../router";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    onSubmit() {
      this.$apolloProvider.defaultClient
        .mutate({
          mutation: SIGNIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(data => {
          const token = data.data.signin.token;
          localStorage.setItem("token", token);
          router.push("/");
          window.location.reload();
        })
        .catch(error => {
          this.error = error.message.replace("GraphQL error:", "");
        });
    }
  }
};
</script>

<template>
  <div class="form">
    <form @submit.prevent="onSubmit" class="form__container">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="name">Password</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <div class="form-group">
        <button @click="onSubmit" class="btn btn-primary">Login</button>
      </div>
      <transition>
        <p class="alert" :class="{ 'alert-danger': error }">{{error}}</p>
      </transition>
    </form>
  </div>
</template>

<style lang="scss">
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
