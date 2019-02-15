<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <logs-form></logs-form>
      </div>
      <div class="col-sm-6">test</div>
    </div>
  </div>
</template>

<script>
import LogsForm from "./LogsForm";

export default {
  name: "Logs",
  components: {
    LogsForm
  }
};
</script>

<style lang="css" scoped>
.container {
  margin-top: 7rem;
}
</style>