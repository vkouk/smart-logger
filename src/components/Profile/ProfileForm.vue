<template>
    <div class="form">
        <form class="form__container">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="text" v-model="email" :placeholder="user.email" class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" :placeholder="user.name" class="form-control">
            </div>
            <div class="form-group">
                <label for="avatar">Avatar</label>
                <input type="text" v-model="avatar" :placeholder="user.avatar" class="form-control">
            </div>
            <div class="form-group">
                <button @click="onUpdateProfile" class="btn btn-info" :disabled="email.length === 0 && name.length === 0 && avatar.length === 0">Update Profile</button>
            </div>
            <transition>
                <p class="alert" :class="{ 'alert-danger': error, 'alert-success': success }">{{error}}{{success}}</p>
            </transition>
        </form>
    </div>
</template>

<script>
import { UPDATE_USER_MUTATION } from "../../mutations";

export default {
  name: "ProfileForm",
  props: ["user"],
  data() {
    return {
      email: "",
      name: "",
      avatar: "",
      error: "",
      success: ""
    };
  },
  methods: {
    onUpdateProfile(e) {
      e.preventDefault();

      const variables = {
        email: this.email,
        name: this.name,
        avatar: this.avatar
      };

      if (this.email === "" || this.email === null) {
        delete variables.email;
      }
      if (this.name === "" || this.name === null) {
        delete variables.name;
      }
      if (this.avatar === "" || this.avatar === null) {
        delete variables.avatar;
      }

      this.$apolloProvider.defaultClient
        .mutate({
          mutation: UPDATE_USER_MUTATION,
          variables
        })
        .then(data => {
          const user = JSON.stringify(data.data.updateUser);
          localStorage.setItem("user", user);
          this.success = "Your data has been changed successfully.";
        })
        .catch(
          error => (this.error = error.message.replace("GraphQL error:", ""))
        );
    }
  }
};
</script>

<style lang="css" scoped>
.form__container {
    margin-top: 30px;
}
</style>
