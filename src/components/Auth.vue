<template>
  <div class="section-container border-section-container">
    <div class="container">
      <div class="row">
        <div class="col-md-12 section-container-spacer">
          <div class="text-center">
            <h2>Register / Login</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <h3>Register</h3>
          </div>
          <div>
            <register></register>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-center">
            <h3>Login</h3>
          </div>
          <div>
            <login></login>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";

export default {
  name: "Auth",
  components: {
    Login,
    Register
  }
};
</script>