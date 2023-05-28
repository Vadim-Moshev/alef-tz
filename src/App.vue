<template>
  <header class="header">1</header>
  <main class="main">
    <div class="content-wapper"></div>
  </main>
  <footer class="footer"></footer>


  <!-- <router-view /> -->
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.header {
  height: 50px;
  background-color: wheat;
}

.main {
  height: 100%;
  flex: auto;
}

.content-wapper {
  height: 100px;
  background-color: navy;
  width: 616px;
  margin: 0 auto;
}

.footer {
  height: 50px;
  background-color: aqua;
}
</style>
