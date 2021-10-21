<template>
  <section class="person-stat">
    <div class="person-stat__heading">
      <h3 class="fs-28">Текущий проект</h3>
      <button class="person-stat__btn">
        <svg
            width="6"
            height="17"
            viewBox="0 0 6 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.61538 5.23077C4.05982 5.23077 5.23077 4.05982 5.23077 2.61538C5.23077 1.17095 4.05982 0 2.61538 0C1.17095 0 0 1.17095 0 2.61538C0 4.05982 1.17095 5.23077 2.61538 5.23077Z"
              fill="black"
          />
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.61538 17C4.05982 17 5.23077 15.829 5.23077 14.3846C5.23077 12.9402 4.05982 11.7692 2.61538 11.7692C1.17095 11.7692 0 12.9402 0 14.3846C0 15.829 1.17095 17 2.61538 17Z"
              fill="black"
          />
        </svg>
      </button>
    </div>
    <div class="person-stat__wrap">
      <p class="person-stat__data fs-44">
        <span class="person-stat__data-value">Название</span>
      </p>
      <div class="person-stat__bg">
        <svg
            class="person-stat__svg"
            width="55"
            height="55"
            viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3 51.5C3 52.3284 3.67157 53 4.5 53H59.5C60.3284 53 61 52.3284 61 51.5V13.3235C61 12.4951 60.3284 11.8235 59.5 11.8235H26.2L17.9406 3.44684C17.6587 3.16095 17.274 3 16.8725 3H4.5C3.67157 3 3 3.67157 3 4.5V51.5Z" stroke="#FABB18" stroke-width="6"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeCurrentProject",
};
</script>
