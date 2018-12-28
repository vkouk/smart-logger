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
        <label for="avatar">Avatar</label>
        <input type="text" v-model="avatar" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
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

<script>
import { SIGNUP_MUTATION } from "../../mutations";
import router from "../../router";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      name: "",
      avatar: "",
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
            avatar: this.avatar,
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
