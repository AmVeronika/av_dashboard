<template>
  <section class="center-section">
    <Heading title="Общий прогресс" />
    <div class="overall-progress">
      <div class="overall-progress__diagram">
        <!--    <Diagram></Diagram>-->
      </div>
      <ul class="overall-progress__list">
        <li
          class="overall-progress__item fs-16"
          :style="{color:status.color}"
          v-for="status in statusСhart"
          :key="status"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="3" :stroke="status.color" stroke-width="2"/>
          </svg>
          {{ status.status }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Heading from "./elements/Heading";
// import Diagram from "@/components/elements/Diagram";

export default {
  name: "HomeOverallProgress",
  components: {
    Heading,
    // Diagram,
  },
  data() {
    return {
      statusСhart: [
        { status: "Выполнено", color: "#2ED47A" },
        { status: "В работе", color: "#FFB946" },
        { status: "Нерешённые задачи", color: "#F7685B" },
      ],
    };
  },
};
</script>

<style lang="scss">
.overall-progress {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  &__diagram{
    width: 65%;
  }
  &__list {
    width: 35%;
  }
  &__item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
