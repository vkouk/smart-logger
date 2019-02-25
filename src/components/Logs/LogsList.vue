<template>
  <div class="col-md-6">
    <h3 class="template-title-example">Logs</h3>
    <ol>
      <li v-for="log in logs" :key="log.id">{{log.log}} / {{log.logTime}} Hours</li>
    </ol>
  </div>
</template>

<script>
import { GET_LOGS } from "../../queries";

export default {
  name: "LogsList",
  data() {
    return {
      logs: []
    };
  },
  methods: {
    fetchLogs() {
      return this.$apolloProvider.defaultClient
        .query({
          query: GET_LOGS
        })
        .then(({ data: { logs } }) => {
          this.logs = logs;
        })
        .catch(
          error => (this.error = error.message.replace("GraphQL error:", ""))
        );
    }
  },
  mounted() {
    this.fetchLogs();
  }
};
</script>