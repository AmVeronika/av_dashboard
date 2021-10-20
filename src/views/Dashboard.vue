<template>
  <div class="main">
    <div class="main__row">
      <CurrentDate />
      <StartSession />
    </div>
    <div class="main__row"></div>
    <div class="main__row"></div>
    <div class="main__row"></div>
  </div>
</template>

<script>
import CurrentDate from "../components/CurrentDate";
import StartSession from "../components/StartSession";

export default {
  name: "Dashboard",
  components: {
    CurrentDate,
    StartSession,
  },
};
</script>
<style lang="scss">
.main__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
