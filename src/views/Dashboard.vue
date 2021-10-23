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
import HomeCurrentDate from "../components/home-components/HomeCurrentDate";
import HomeStartSession from "../components/home-components/HomeStartSession";
import HomeMyProgress from "../components/home-components/HomeMyProgress";
import HomeSessionRecording from "../components/home-components/HomeSessionRecording";
import HomeCurrentProject from "../components/home-components/HomeCurrentProject";
import HomeMaterials from "../components/home-components/HomeMaterials";
import HomeOverallProgress from "../components/home-components/HomeOverallProgress";

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
    grid-template-columns: repeat(3,minmax(100px,1fr));
    gap: 30px;
    justify-content: space-between;
  }
  &--grid-2c{
    display: grid;
    grid-template-columns: repeat(2,minmax(300px,1fr));
    gap: 30px;
    justify-content: space-between;
  }
}
</style>
