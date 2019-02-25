<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <logs-form></logs-form>
      </div>
      <div class="col-sm-6">
        <logs-list></logs-list>
      </div>
    </div>
  </div>
</template>

<script>
import LogsForm from "./LogsForm";
import LogsList from "./LogsList";

export default {
  name: "Logs",
  components: {
    LogsForm,
    LogsList
  }
};
</script>

<style lang="css" scoped>
.container {
  margin-top: 7rem;
}
</style>