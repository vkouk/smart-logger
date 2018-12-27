<template>
  <div
    class="white-text-container background-image-container"
    :style="{backgroundImage: 'url(' + image + ')'}"
  >
    <div class="opacity"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Manage your company's employees easier!</h1>
          <p>
            Create or Login with your company's account, log all of your work effort in no time.
            Edit, Create, See all of your efforts in personal profile.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      image: require("../assets/images/img-home.jpg")
    };
  }
};
</script>
