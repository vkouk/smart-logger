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
  data: function() {
    return {
      //test data
      email: "vkouk@gmail.com",
      password: "vaskouk"
    };
  },
  methods: {
    onLogin() {
      this.$apolloProvider
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
        });
    }
  }
};
</script>

<template>
  <button @click="onLogin">Login</button>
</template>
