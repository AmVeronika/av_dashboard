<template>
  <div class="modal-window" @click="hideModal">
    <div @click.stop class="modal-window__container">
      <slot></slot>
    </div>

  </div>
</template>

<script>

import { mapMutations } from "vuex";

export default {
  name: "modal-window",
  methods: {
    ...mapMutations(['hideModal'])
  }
};
</script>

<style lang="scss">
.modal-window {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.73);
  z-index: 10;
  &__container {
    display: flex;
    min-width: 485px;
    padding: 48px;
    padding-bottom: 30px;
    background: $white;
    border-radius: 34px;
  }
}
</style>
