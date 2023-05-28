<template>
  <nav class="header-nav-wrapper">
    <router-link to="/" class="header-nav-wrapper__link"> Форма </router-link>
    <router-link to="/preview" class="header-nav-wrapper__link">
      Превью
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped src="./HeaderNav.css"></style>
