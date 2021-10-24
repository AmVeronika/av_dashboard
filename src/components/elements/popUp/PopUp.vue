<template>
  <div class="pop-up">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pop-up",
};
</script>

<style lang="scss">
.pop-up {
  position: absolute;
  top: 100%;
  right: 0;
  background: $white;
  border-radius: 10px;
  padding: 20px 25px;
  box-shadow: 0px 1px 3px #fabb18;
  transition: 0.15s ease-out;
  &:hover {
    box-shadow: 0px 4px 10px $col-orange;
    transition: 0.15s ease-out;
  }
}
</style>
