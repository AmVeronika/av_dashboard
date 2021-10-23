<template>
  <Header />
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/header-components/Header";

export default {
  components: {
    NavBar,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 100px 1fr;
  min-height: 100vh;
}
</style>
