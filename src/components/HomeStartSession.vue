<template>
  <section class="start">
    <h3 class="start__title fs-28">Начать сессию</h3>
    <svg
      class="start__svg"
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="90" height="90" rx="24" />
      <path
        d="M60 42.0359C62.6667 43.5755 62.6667 47.4245 60 48.9641L41.25 59.7894C38.5833 61.329 35.25 59.4045 35.25 56.3253L35.25 34.6747C35.25 31.5955 38.5833 29.671 41.25 31.2106L60 42.0359Z"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: "StartSession",
};
</script>

<style lang="scss">
.start {
  background: $white;
  border-radius: 34px;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  &__svg {
    fill: $col-orange;
    stroke: $col-orange;
    stroke-width: 1px;
    border-radius: 24px;
    & path {
      fill: $black;
    }
  }
}
</style>
