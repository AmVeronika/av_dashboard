<template>
  <div class="header__account">
    <h5 class="header__user-name fs-16">Вероника Михотина</h5>
    <p class="header__user-proff fs-12">Frontend developer</p>
    <div class="header__user-avatar" @click="togglePopUp">
      <img
        src="../../assets/img/users/user-avatar1.png"
        alt="аватар"
        class="header__user-img"
      />
      <pop-up v-show="showPopUp">
        <HeaderAuthPopUp />
      </pop-up>
    </div>
  </div>
</template>

<script>
import HeaderAuthPopUp from "../elements/popUp/HeaderAuthPopUp";
import popUp from "../../mixins/popUp";

export default {
  name: "HeaderAccount",
  components: { HeaderAuthPopUp },
  mixins: [popUp],
};
</script>

<style lang="scss">
.header {
  &__account {
    display: grid;
    grid-template-columns: 1fr 57px;
    align-items: end;
    justify-items: end;
    column-gap: 31px;
    cursor: pointer;
  }

  &__user-name {
  }
  &__user-proff {
    color: $text-grey;
    align-self: flex-start;
  }
  &__user-avatar {
    width: 57px;
    height: 57px;
    grid-row: 1/3;
    grid-column: 2/3;
    position: relative;
  }
  &__user-img {
    width: 100%;
  }
}
</style>
