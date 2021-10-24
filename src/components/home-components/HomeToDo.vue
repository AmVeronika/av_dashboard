<template>
  <section class="todo">
    <Heading title="Участники" />
    <div class="todo__col-title">
      <p class="todo__col-item fs-12">Задача</p>
      <p class="todo__col-item fs-12">Статус</p>
    </div>
    <div class="todo__wrap-list castom__scroll">
      <div class="todo__item" v-for="todo in todoes" :key="todo.id">
        <svg
          width="12"
          height="12"
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
        <p class="todo__item-name fs-16r">
          {{ todo.name }}
        </p>
        <p class="todo__item-status fs-12">
          {{ todo.status }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../elements/Heading";

export default {
  name: "HomeToDo",
  data() {
    return {
      selected: "",
      todoes: [
        {
          name: "Название задачи",
          status: "Выполнена",
          id: 0,
        },
        {
          name: "Название задачи",
          status: "Выполнена",
          id: 0,
        },
        {
          name: "Название задачи",
          status: "Выполнена",
          id: 0,
        },
        {
          name: "Название задачи",
          status: "Выполнена",
          id: 0,
        },
        {
          name: "Название задачи",
          status: "Выполнена",
          id: 0,
        },
      ],
    };
  },
  components: {
    Heading,
  },
};
</script>

<style lang="scss">
.todo {
  height: 350px;
  background: #ffffff;
  border-radius: 34px;
  padding: 30px;

  &__col {
    &-title {
      display: flex;
      justify-content: space-between;
      padding-right: 70px;
      color: $text-grey;
    }
  }

  &__wrap-list {
    height: 190px;
    padding-right: 16px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 17px;
    border: 1px solid #f1f1f1;
    border-radius: 14px;
    margin-bottom: 10px;
    gap: 10px;

    &-name {
      flex-grow: 1;
    }

    &-status {
      background: $task-completed;
      border-radius: 5px;
      padding: 3px 5px;
      text-align: center;
      min-width: 80px;
      color: $white;
    }
  }
}
</style>
