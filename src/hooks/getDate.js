import { ref } from "vue";

export default function getDate() {
  const moment = require("moment");
  const date = ref();
  const dayOfWeek = ref();
  const day = ref();
  const month = ref();
  const year = ref();
  const time = ref();
  const dateObj = ref({});

  date.value = moment().locale("ru").format("llll").split(" ");
  dayOfWeek.value =
    date.value[0].charAt(0).toUpperCase() +
    date.value[0].substring(1).replace(/,/, "");

  day.value = date.value[1];
  month.value = date.value[2].replace(/\./, "");
  year.value = date.value[3];
  time.value = date.value[5];

  dateObj.value = {
    dayOfWeek: dayOfWeek,
    day: day,
    month: month,
    year: year,
    time: time,
  };

  return {
    dateObj,
  };
}
