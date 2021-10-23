<template>
  <section class="date">
    <h2 class="date__today fs-44">Сегодня</h2>
    <p class="date__full fs-28">{{}}Пн 22, 2021 | 10:00 AM</p>
  </section>
</template>

<script>
import getDate from "../hooks/getDate";

export default {
  name: "CurrentDate",
  setup() {
    const LOL = getDate();
    return { LOL };
  },
};
</script>

<style></style>
