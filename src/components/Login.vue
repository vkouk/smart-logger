<script>
import gql from "graphql-tag";
import router from "../router";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

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
      <input type="text" v-model="email" class="form__input">
      <input type="password" v-model="password" class="form__input">
      <button @click="onSubmit" class="form__btn">Login</button>
      <p class="form__error">{{error}}</p>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__input {
    margin: 10px auto;
    padding: 5px 25px;
  }
  &__error {
    color: #de1212;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
}
</style>