<template>
  <section class="person-stat">
    <div class="person-stat__heading">
      <h3 class="fs-28">Мой прогресс</h3>
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
        <span class="person-stat__data-value">0</span>%
      </p>
      <div class="person-stat__bg">
        <svg
          class="person-stat__svg"
          width="55"
          height="55"
          viewBox="0 0 66 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.5512 53.0094L29.2273 32.6854V3.66667C29.2273 1.64162 30.8689 0 32.894 0C34.919 0 36.5606 1.64162 36.5606 3.66667V29.6479L54.7367 47.8239L65.0404 37.5202C65.3554 37.2052 65.894 37.4283 65.894 37.8738V61.8333C65.894 62.1095 65.6701 62.3333 65.394 62.3333H41.4344C40.9889 62.3333 40.7659 61.7948 41.0808 61.4798L49.5512 53.0094Z"
            fill="#FABB18"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M25.0737 61.4798C25.3887 61.7948 25.1656 62.3333 24.7201 62.3333H0.500001C0.223858 62.3333 0 62.1095 0 61.8333V37.6132C0 37.1677 0.538573 36.9446 0.853555 37.2596L10.2547 46.6608L21.3588 37.2651L26.0957 42.8632L15.4582 51.8642L25.0737 61.4798Z"
            fill="#FABB18"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeMyProgress",
};
</script>

<style lang="scss">

</style>
