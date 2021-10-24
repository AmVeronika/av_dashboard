<template>
  <Header />
  <NavBar></NavBar>
  <modal-window v-if="getRegistrModal">
   <HeaderRegistrationForm/>
  </modal-window>
  <modal-window v-if="getSigninModal">
    <HeaderSigninForm/>
  </modal-window>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar";
import Header from "./components/header-components/Header";
import { mapGetters } from "vuex";
import HeaderRegistrationForm from "./components/elements/modalWindows/HeaderRegistrationForm";
import HeaderSigninForm from "./components/elements/modalWindows/HeaderSigninForm";


export default {
  components: {
    NavBar,
    Header,
    HeaderRegistrationForm,
    HeaderSigninForm
  },
  computed: {
    ...mapGetters(["getRegistrModal", "getSigninModal"]),
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
