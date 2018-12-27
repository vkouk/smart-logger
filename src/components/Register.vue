<script>
import { SIGNUP_MUTATION } from "../mutations";
import router from "../router";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      error: ""
    };
  },
  methods: {
    onSubmit() {
      this.$apolloProvider.defaultClient
        .mutate({
          mutation: SIGNUP_MUTATION,
          variables: {
            email: this.email,
            name: this.name,
            password: this.password
          }
        })
        .then(() => {
          router.push("/");
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
        <label for="name">Name</label>
        <input type="text" v-model="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="name">Password</label>
        <input type="password" v-model="password" class="form-control">
      </div>
      <div class="form-group">
        <button @click="onSubmit" class="btn btn-primary">Register</button>
      </div>
      <transition>
        <p class="alert" :class="{ 'alert-danger': error }">{{error}}</p>
      </transition>
    </form>
  </div>
</template>