<template>
  <header class="header">
    <router-link to="/" class="header-logo">
      <img src="./assets/logo.png" alt="" />
    </router-link>
    <HeaderNav />
  </header>
  <main class="main">
    <div class="content-wapper">
      <router-view @saveData="saveData" />
    </div>
  </main>
  <footer class="footer">
    <span class="footer__span">All rights reserved</span>
  </footer>
</template>

<script>
import HeaderNav from "./components/HeaderNav/HeaderNav";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
  data() {
    return {
      userData: null,
    };
  },
  methods: {
    saveData(payload) {
      this.userData = payload;
    },
  },
};
</script>

<style src="./App.css"></style>
