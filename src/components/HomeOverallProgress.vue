<template>
  <section class="center-section">
    <Heading title="Общий прогресс" />
    <div class="overall-progress">
      <Diagram />
    </div>
  </section>
</template>

<script>
import Heading from "./elements/Heading";
import Diagram from "./elements/Diagram";

export default {
  name: "HomeOverallProgress",
  components: {
    Heading,
    Diagram
  },
  data() {
    return {
      statusСhart: [
        { status: "Выполнено", color: "#2ED47A" },
        { status: "В работе", color: "#FFB946" },
        { status: "Нерешённые задачи", color: "#F7685B" }
      ]
    };
  }
};
</script>

<style lang="scss">
.overall-progress {
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  &__diagram {
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
