<template>
  <section class="person-stat">
    <Heading title="Текущий проект" />
    <div class="person-stat__wrap">
      <p class="person-stat__data fs-44">
        <span class="person-stat__data-value">Название</span>
      </p>
      <div class="person-stat__bg">
        <svg
          class="person-stat__svg"
          width="55"
          height="55"
          viewBox="0 0 64 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 51.5C3 52.3284 3.67157 53 4.5 53H59.5C60.3284 53 61 52.3284 61 51.5V13.3235C61 12.4951 60.3284 11.8235 59.5 11.8235H26.2L17.9406 3.44684C17.6587 3.16095 17.274 3 16.8725 3H4.5C3.67157 3 3 3.67157 3 4.5V51.5Z"
            stroke="#FABB18"
            stroke-width="6"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "./elements/Heading";

export default {
  name: "HomeCurrentProject",
  components: {
    Heading,
  },
};
</script>
