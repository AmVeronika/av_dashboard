<template>
  <div class="main">
    <div class="main__row">
      <HomeCurrentDate />
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
    <div class="main__row-grid"></div>
  </div>
</template>

<script>
import HomeCurrentDate from "../components/HomeCurrentDate";
import HomeStartSession from "../components/HomeStartSession";
import HomeMyProgress from "../components/HomeMyProgress";
import HomeSessionRecording from "../components/HomeSessionRecording";
import HomeCurrentProject from "../components/HomeCurrentProject";
import HomeMaterials from "../components/HomeMaterials";
import HomeOverallProgress from "../components/HomeOverallProgress";

export default {
  name: "Dashboard",
  components: {
    HomeCurrentDate,
    HomeStartSession,
    HomeMyProgress,
    HomeSessionRecording,
    HomeCurrentProject,
    HomeMaterials,
    HomeOverallProgress,
  },
};
</script>
<style lang="scss">
.main__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  column-gap: 30px;
  &--grid-3c{
    display: grid;
    grid-template-columns: repeat(3,350px);
    gap: 30px;
    justify-content: space-between;
  }
  &--grid-2c{
    display: grid;
    grid-template-columns: repeat(2,540px);
    gap: 30px;
    justify-content: space-between;
  }
}
</style>
