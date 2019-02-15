<template>
  <div class="form">
    <form class="form__container">
      <div class="form-group">
        <label for="log">Log Title</label>
        <input type="text" v-model="log" placeholder="Enter your log..." class="form-control">
      </div>
      <div class="form-group">
        <label for="log">Log Time</label>
        <input
          type="number"
          v-model.number="logTime"
          placeholder="Enter your logTime..."
          class="form-control"
        >
      </div>
      <div class="form-group">
        <button
          @click.prevent="addLog"
          class="btn btn-info"
          :disabled="log.length === 0"
        >Update Profile</button>
      </div>
      <p
        class="alert"
        :class="{ 'alert-danger': error, 'alert-success': success }"
      >{{error}}{{success}}</p>
    </form>
  </div>
</template>

<script>
import LogsForm from "./LogsForm";
import { CREATE_LOG } from "../../mutations";

export default {
  name: "LogsForm",
  data() {
    return {
      log: "",
      logTime: 0,
      error: "",
      success: ""
    };
  },
  methods: {
    addLog() {
      this.$apolloProvider.defaultClient
        .mutate({
          mutation: CREATE_LOG,
          variables: {
            log: this.log,
            logTime: this.logTime
          }
        })
        .then(() => {
          this.log = "";
          this.logTime = 0;
        })
        .catch(
          error => (this.error = error.message.replace("GraphQL error:", ""))
        );
    }
  }
};
</script>