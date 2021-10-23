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
.overall-progress{
  margin-top: 35px;
}
</style>
