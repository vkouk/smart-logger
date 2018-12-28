<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="form__info">
          <h3>Hi, {{user.name}}</h3>
          <img :src="user.avatar" :alt="user.name" class="img-circle img-responsive img-thumbnail">
        </div>
        <p>Edit or update your personal profile.</p>
        <profile-form :user="user"></profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileForm from "./ProfileForm";

export default {
  name: "Profile",
  components: {
    ProfileForm
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    };
  }
};
</script>

<style lang="css" scoped>
.container {
  margin: 30px auto;
}
.col-sm-12 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
  .img-thumbnail {
    max-height: 80px;
  }
  .form__info {
    display: flex;
    align-items: center;
  }
</style>
