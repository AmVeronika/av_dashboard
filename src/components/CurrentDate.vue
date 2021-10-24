<template>
  <section class="date">
    <h2 class="date__today fs-44">Сегодня</h2>
    <p class="date__full fs-28">
      {{ dayOfWeek }} {{ day }}, {{ year }} | {{ time }}
    </p>
  </section>
</template>

<script>
import getDate from "../hooks/getDate";

export default {
  name: "CurrentDate",
  setup() {
    const { dateObj } = getDate();

    const { dayOfWeek, day, month, year, time } = dateObj.value;
    return {
      dayOfWeek,
      day,
      month,
      year,
      time,
    };
  },
};
</script>

<style></style>
