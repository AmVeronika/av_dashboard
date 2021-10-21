<template>
  <section class="center-section">
    <div class="person-stat__heading">
      <h3 class="fs-28">Материалы</h3>
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
    <select class="center-section__select fs-16" value="Название материала">
      <option value="Название материала" class="center-section__option"><span>Название материала</span><router-link to="/"></router-link>Перейти</option>
      <option value="Название материала1" class="center-section__option"><span>Название материала1</span><router-link to="/"></router-link>Перейти</option>
      <option value="Название материала2" class="center-section__option"><span>Название материала2 </span><router-link to="/"></router-link>Перейти</option>
      <option value="Название материала3" class="center-section__option"><span>Название материала3 </span><router-link to="/"></router-link>Перейти</option>
    </select>
  </section>
</template>

<script>
export default {
  name: "HomeMaterials",
};
</script>

<style>

</style>
