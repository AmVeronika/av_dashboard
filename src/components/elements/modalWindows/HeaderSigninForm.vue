<template>
<div class="signin">
  <h2 class="signin__header fs-28s">Войти</h2>
  <form class="signin__form">
    <label class="signin__form-label fs-16r">
      Логин
      <input type="text" class="signin__form-input" required placeholder="Введите ваш логин">
    </label>

    <label class="signin__form-label fs-16r">
      Пароль
      <input type="password" class="signin__form-input" required placeholder="Введите ваш пароль">
    </label>
    <main-button class="registration__form-btn fs-18s" @click="signin">Войти</main-button>
  </form>
</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "HeaderSigninForm",
  methods: {
    ...mapMutations(["changeAuthorization", "openSigninModal"]),
    signin() {
      this.changeAuthorization()
    }
  }
};
</script>

<style lang="scss">
.signin {
  margin: 0 auto;
  width: 100%;
  &__header {
    text-align: center;
  }
  &__form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    &-label {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &-input {
      border: 1px solid $form-gray;
      border-radius: 4px;
      padding: 11px 16px;
    }
    &-checkbox {
      margin-right: 12px;
    }
    &-label-checkbox {
      cursor: pointer;
    }
    &-btn {
      line-height: 44px;
    }
  }
  &__btn {
    margin-top: 6px;
  }
}
</style>