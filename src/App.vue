<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img src="./assets/logo.png" alt="" />
    </router-link>
    <HeaderNav />
  </header>
  <main class="main">
    <div class="content-wapper"></div>
  </main>
  <footer class="footer">
    <span class="footer__span">All rights reserved</span>
  </footer>

  <!-- <router-view /> -->
</template>

<script>
import HeaderNav from "./components/HeaderNav/HeaderNav";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style src="./App.css"></style>
