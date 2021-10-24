<template>
  <section class="center-section project">
    <h3 class="project__title fs-28">Название проекта</h3>
    <div class="project__wrap-list">
      <img
        class="project__preview"
        src="../../assets/img/preview.png"
        alt="Превью проекта"
      />
      <div class="project__progress">
        <p class="project__box-title fs-18">Прогресс</p>
        <meter
          class="project__progress__meter"
          value="50"
          max="100"
          optimum="90"
          low="60"
        ></meter>
      </div>
      <div class="project__participants">
        <p class="project__box-title fs-18">Участники</p>
        <div class="project__participants-block castom__scroll">
          <div
            class="project__item"
            v-for="participant in participantsList"
            :key="participant.id"
          >
            <img
              class="project__item-img"
              src="../../assets/img/users/user-avatar1.png"
              alt="Аватар пользователя"
            />
            <p class="project__item-name fs-16r">
              {{ participant.name }}
            </p>
          </div>
        </div>
      </div>
      <div class="project__btns">
        <main-link class="project__link project__link--maket fs-16r" href="#"
          >Ссылка на макет
        </main-link>
        <main-button class="project__link fs-16r">Выбрать</main-button>
        <main-link class="project__link fs-16r" href="#">GitHUB</main-link>
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 28.7499V34.9999H11.25L29.6833 16.5666L23.4333 10.3166L5 28.7499ZM34.5167 11.7332C35.1667 11.0832 35.1667 10.0332 34.5167 9.38323L30.6167 5.48323C29.9667 4.83323 28.9167 4.83323 28.2667 5.48323L25.2167 8.53323L31.4667 14.7832L34.5167 11.7332V11.7332Z"
              fill="#C2CFE0"
            />
          </svg>
        </button>
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9998 31.6667C9.9998 33.5 11.4998 35 13.3331 35H26.6665C28.4998 35 29.9998 33.5 29.9998 31.6667V11.6667H9.9998V31.6667ZM31.6665 6.66667H25.8331L24.1665 5H15.8331L14.1665 6.66667H8.33313V10H31.6665V6.66667Z"
              fill="#C2CFE0"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectPreview",
  data() {
    return {
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
};
</script>

<style lang="scss">
.project {
  &__wrap-list {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 56px 200px 100px;
    gap: 20px;
  }

  &__progress {
    &__meter {
      width: 100%;
      height: 40px;
    }
  }

  &__preview {
    grid-row: 1/4;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &__link {
    text-align: center;
    &--maket {
      flex-basis: 100%;
    }
  }

  &__participants-block {
    height: 170px;
    padding-right: 16px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 15px;
    border: 1px solid #f1f1f1;
    border-radius: 14px;
    margin-bottom: 10px;
    gap: 10px;

    &-img {
      width: 37px;
    }

    &-name {
      flex-grow: 1;
    }
  }

  &__title {
    grid-column: 1/3;
  }
}
</style>
