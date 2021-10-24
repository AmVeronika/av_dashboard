<template>
  <button class="main-btn fs-14">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "main-button",
};
</script>

<style lang="scss">
.main-btn {
  color: $white;
  padding: 6px 14px;
  background: $black;
  border-radius: 10px;
  border: 1px solid $black;
}
</style>
