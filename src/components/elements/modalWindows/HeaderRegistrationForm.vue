<template>
<div class="registration">
  <h2 class="registration__header fs-28s">Регистрация</h2>
  <form class="registration__form">
    <label class="registration__form-label fs-16r">
      Имя и фамилия
      <input type="text" class="registration__form-input" required placeholder="Ваши Имя и фамилия">
    </label>
    <label class="registration__form-label fs-16r">
      Логин
      <input type="text" class="registration__form-input" required placeholder="Придумайте логин">
    </label>
    <label class="registration__form-label fs-16r">
      Пароль
      <input type="password" class="registration__form-input" required placeholder="Придумайте пароль">
    </label>
    <label class="registration__form-label fs-16r">
      Повторить пароль
      <input type="password" class="registration__form-input" required placeholder="Повторите пароль">
    </label>
    <label class="registration__form-label-checkbox fs-16r">
      <input type="checkbox" class="registration__form-checkbox" required>
      Согласие на обработку данных
    </label>
    <main-button class="registration__form-btn fs-18s">Зарегистрироваться</main-button>
  </form>
<!--  <button class="registration__btn fs-16r">Уже есть аккаунт? Войти</button>-->
</div>
</template>

<script>
export default {
  name: "HeaderRegistrationForm"
};
</script>

<style lang="scss">
.registration {
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