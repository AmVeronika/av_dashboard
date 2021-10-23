import { ref, computed } from "vue";

export default function getDate() {
  const moment = require("moment");
  const date = moment().locale("ru").format("llll").split(" ");
  const dayOfWeek = ref(
    date[0].charAt(0).toUpperCase() + date[0].substring(1).replace(/,/, "")
  );
  const day = ref(date[1]);
  const month = ref(date[2].replace(/\./, ""));
  const year = ref(date[3]);
  const time = ref(date[5]);
  const dateObj = {
    dayOfWeek: dayOfWeek,
    day: day,
    month: month,
    year: year,
    time: time,
  };

  const sec = computed(() => {
    return ref(moment().format("LTS"));
  });

  return {
    dateObj,
    sec,
  };
}
