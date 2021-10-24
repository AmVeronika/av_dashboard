<template>
  <section class="add-project">
    <h3 class="start__title fs-28">Добавить проект</h3>
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="90" height="90" rx="24" fill="#FABB18" />
      <path
        d="M45.45 18V45M45.45 72V45M45.45 45H18H72"
        stroke="black"
        stroke-width="13"
      />
    </svg>
  </section>
</template>

<script>
export default {
  name: "ProjectsAddNew",
};
</script>

<style lang="scss">
.add-project {
  background: $white;
  border-radius: 34px;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
}
</style>
