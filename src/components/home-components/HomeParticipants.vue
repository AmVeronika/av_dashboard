<template>
  <section class="participants">
    <Heading title="Участники" />
    <div class="participants__col-title">
      <p class="participants__col-item fs-12">Данные участника</p>
      <p class="participants__col-item fs-12">Сегодня</p>
      <p class="participants__col-item fs-12">Всего</p>
    </div>
    <div class="participants__wrap-list castom__scroll">
      <div
        class="participants__item"
        v-for="participant in participantsList"
        :key="participant.id"
      >
        <img
          class="participants__item-img"
          src="../../assets/img/users/user-avatar1.png"
          alt="Аватар пользователя"
        />
        <div class="participants__item-user-info">
          <p class="participants__item-name fs-16r">
            {{ participant.name }}
          </p>
          <p class="participants__item-prof fs-12">
            {{ participant.prof }}
          </p>
        </div>
        <p class="participants__item-time fs-14">
          {{ participant.currentTime }}
        </p>
        <p class="participants__item-time fs-14">
          {{ participant.totalTime }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "../elements/Heading";

export default {
  name: "HomeParticipants",
  data() {
    return {
      selected: "",
      participantsList: [
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
          id: 0,
        },
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
          id: 0,
        },
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
          id: 0,
        },
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
          id: 0,
        },
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
          id: 0,
        },
        {
          imgUrl: "#FABB18",
          name: "ФИО",
          prof: "Creating UI and Research",
          currentTime: "08:12:05",
          totalTime: "18:12:05",
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
.participants {
  height: 350px;
  background: #ffffff;
  border-radius: 34px;
  padding: 30px;

  &__col {
    &-title {
      display: grid;
      grid-template-columns: 1fr 80px 80px;
      gap: 20px;
      padding-right: 25px;
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

    &-time {
      background: $col-light-orange;
      border-radius: 10px;
      padding: 10px;
      text-align: center;
      min-width: 80px;
    }

    &-user-info {
      flex-grow: 1;
    }

    &-img {
      width: 37px;
    }

    &-name {
      flex-grow: 1;
    }
  }
}
</style>
