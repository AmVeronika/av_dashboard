<template>
  <section class="center-section materials">
    <Heading title="Материалы" />
    <select class="materials__select fs-16" v-model="selected">
      <option class="materials__option" disabled value="">Категории</option>
      <option
        class="materials__option"
        :style="{ background: material.category }"
        v-for="material in materialsList"
        :key="material.id"
      >
        {{ material.name }}
      </option>
    </select>
    <div class="materials__wrap-list">
      <ul class="materials__list castom__scroll">
        <li
          class="materials__item"
          v-for="material in materialsList"
          :key="material.id"
        >
          <span
            class="materials__item-category"
            :style="{ background: material.category }"
          ></span>
          <p class="materials__item-name fs-16r">{{ material.name }}</p>
          <main-link
            class="materials__item-link fs-14"
            :href="material.url"
            target="_blank"
            >Перейти</main-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Heading from "../elements/Heading";
import MainLink from "../elements/MainLinks";

export default {
  name: "HomeMaterials",
  data() {
    return {
      selected: "",
      materialsList: [
        {
          category: "#FABB18",
          name: "Application Programming Interface",
          url: "https://ru.vuejs.org/v2/guide/migration-vue-router.html#v-link-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%BE",
          id: 0,
        },
        {
          category: "#FB7B48",
          name: "Java Script",
          url: "https://router.vuejs.org/ru/",
          id: 1,
        },
        {
          category: "#FB7B48",
          name: "JavaScript-фреймворк",
          url: "https://gb.ru/lessons/167810/homework",
          id: 2,
        },
        {
          category: "#FA3338",
          name: "library",
          url: "https://www.google.com/",
          id: 3,
        },
        {
          category: "#FA3338",
          name: "Application Programming Interface",
          url: "https://ru.vuejs.org/v2/guide/migration-vue-router.html#v-link-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%BE",
          id: 0,
        },
        {
          category: "#FABB18",
          name: "Java Script",
          url: "https://router.vuejs.org/ru/",
          id: 1,
        },
        {
          category: "#FABB18",
          name: "JavaScript-фреймворк",
          url: "https://gb.ru/lessons/167810/homework",
          id: 2,
        },
        {
          category: "#FABB18",
          name: "library",
          url: "https://www.google.com/",
          id: 3,
        },
      ],
    };
  },
  components: {
    MainLink,
    Heading,
  },
};
</script>

<style lang="scss">
.materials {
  &__select {
    margin-top: 20px;
    width: 100%;
    padding: 14px;
    border: 1px solid $form-gray;
    border-radius: 14px;
    font-weight: 600;
    margin-bottom: 15px;
    &-circle {
      display: inline-block;
      width: 37px;
      height: 37px;
      background: $col-orange;
      border-radius: 50px;
    }
  }
  &__list {
    overflow: auto;
    height: 296px;
    padding-right: 16px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 17px;
    border: 1px solid #F1F1F1;
    border-radius: 14px;
    margin-bottom: 10px;
    gap: 20px;

    &-link {
      color: $white;
      padding: 6px 14px;
      background: $black;
      border-radius: 10px;
      border: 1px solid $black;
    }

    &-category {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    &-name {
      flex-grow: 1;
    }
  }
}
</style>
