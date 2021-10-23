<template>
  <a class="main-btn fs-14">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "main-link",
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
