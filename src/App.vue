<template>
  <Header />
  <NavBar></NavBar>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default {
  components: {
    NavBar,
    Header,
  },
};
</script>

<style lang="scss"></style>
