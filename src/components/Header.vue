<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">JobMap</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand>
        <b-nav-form class="mx-auto">
          <b-form-input class="mr-sm-2 nput-default" placeholder="Type a Job..."></b-form-input>
          <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
</style>
