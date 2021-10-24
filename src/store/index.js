import { createStore } from "vuex";

export default createStore({
  state: {
    authorization: true, // авторизован ли пользователь
    registrModal: false, // Открыть/закрыть модальное окно регистрации
    signinModal: false, // Открыть/закрыть модальное окно входа
  },
  getters: {
    getAuthorization: (state) => state.authorization,
    getRegistrModal: (state) => state.registrModal,
    getSigninModal: (state) => state.signinModal,
  },
  mutations: {
    changeAuthorization(state) {
      state.authorization = !state.authorization;
    },
    openRegistrModal(state) {
      state.registrModal = true;
    },
    hideModal(state){
      state.registrModal = false;
      state.signinModal = false;
    },
    openSigninModal(state) {
      state.signinModal = true;
    },

  },
  actions: {},
  modules: {},
});
