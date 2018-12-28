<template>
  <ul class="nav navbar-nav navbar-right">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li v-if="userExists">
      <router-link to="/logs">Activity Logs</router-link>
    </li>
    <li v-if="userExists">
      <router-link :to="{ name : 'profile', params : { id : user.id } }">Profile</router-link>
    </li>
    <li v-if="!userExists">
      <router-link to="/auth">Auth</router-link>
    </li>
    <li v-if="userExists">
      <a @click="onLogout">Logout</a>
    </li>
  </ul>
</template>

<script>
import { GET_USER_QUERY } from "../../queries";
import router from "../../router";

export default {
  name: "Nav",
  data() {
    return {
      user: {}
    };
  },
  computed: {
    userExists() {
      return Object.keys(this.user).length > 0;
    }
  },
  methods: {
    fetchUser() {
      this.$apolloProvider.defaultClient
        .query({
          query: GET_USER_QUERY
        })
        .then(({ data }) => {
          if (data.me) {
            this.user = data.me;
          }
        });
    },
    onLogout(e) {
      e.preventDefault();
      localStorage.removeItem("token");
      this.user = {};
      router.push("/auth");
    }
  },
  created() {
    if (!this.userExists && localStorage.getItem("token")) {
      this.fetchUser();
    }
  }
};
</script>
