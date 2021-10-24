<template>
  <div class="main">
    <div class="main__row">
      <CurrentDate />
      <HomeStartSession />
    </div>
    <div class="main__row--grid-3c">
      <HomeMyProgress />
      <HomeSessionRecording />
      <HomeCurrentProject />
    </div>
    <div class="main__row--grid-2c">
      <HomeMaterials />
      <HomeOverallProgress />
    </div>
    <div class="main__row--grid-2c">
      <HomeParticipants />
      <HomeToDo />
    </div>
  </div>
</template>

<script>
import CurrentDate from "../components/CurrentDate";
import HomeStartSession from "../components/home-components/HomeStartSession";
import HomeMyProgress from "../components/home-components/HomeMyProgress";
import HomeSessionRecording from "../components/home-components/HomeSessionRecording";
import HomeCurrentProject from "../components/home-components/HomeCurrentProject";
import HomeMaterials from "../components/home-components/HomeMaterials";
import HomeOverallProgress from "../components/home-components/HomeOverallProgress";
import HomeParticipants from "../components/home-components/HomeParticipants";
import HomeToDo from "../components/home-components/HomeToDo";

export default {
  name: "Dashboard",
  components: {
    CurrentDate,
    HomeStartSession,
    HomeMyProgress,
    HomeSessionRecording,
    HomeCurrentProject,
    HomeMaterials,
    HomeOverallProgress,
    HomeParticipants,
    HomeToDo,
  },
};
</script>
<style lang="scss">
.main__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  &--grid-3c {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    gap: 30px;
    justify-content: space-between;
  }
  &--grid-2c {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 30px;
    justify-content: space-between;
  }
}
</style>
