<template>
  <div class="header-auth" @click="showPopUp = !showPopUp">
    <svg class="header-auth-svg" width="57" height="57" viewBox="0 0 66 66" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="4.75" y="0.75" width="57" height="57" rx="28.5" fill="black" />
      <path
        d="M46.7942 43.5145C47.3838 43.3917 47.7345 42.7769 47.4745 42.2337C46.497 40.1922 44.7984 38.3974 42.5613 37.0623C39.9481 35.5028 36.7464 34.6575 33.4527 34.6575C30.1589 34.6575 26.9572 35.5028 24.3441 37.0623C22.107 38.3974 20.4083 40.1921 19.4309 42.2336C19.1708 42.7769 19.5215 43.3917 20.1111 43.5145L25.2918 44.5942C30.6745 45.716 36.2308 45.716 41.6135 44.5942L46.7942 43.5145Z"
        fill="#FABB18" />
      <ellipse cx="33.2152" cy="20.3125" rx="8.3125" ry="8.3125" fill="#FABB18" />
    </svg>
    <pop-up v-show="showPopUp">
      <HeaderAuthPopUp />
    </pop-up>
  </div>
</template>

<script>
import HeaderAuthPopUp from "../elements/popUp/HeaderAuthPopUp";
import popUp from "../../mixins/popUp";

export default {
  name: "HeaderAuth",
  components: { HeaderAuthPopUp },
  mixins: [popUp]
};
</script>

<style lang="scss">
.header-auth {
  position: relative;
}

.header-auth-svg {
  cursor: pointer;

  rect, path, ellipse {
    transition: 0.3s ease-out;
  }

  &:hover {
    rect {
      fill: #FABB18;
    }

    path, ellipse {
      fill: $black;
    }
  }
}
</style>