<template>
  <div class="main">
    <div class="main__row">
      <HomeCurrentDate />
      <HomeStartSession />
    </div>
    <div class="main__row">
      <HomeMyProgress/>
      <HomeSessionRecording/>
      <HomeCurrentProject/>
    </div>
    <div class="main__row">
      <HomeMaterials/>
      <HomeOverallProgress/>
    </div>
    <div class="main__row"></div>
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
    HomeOverallProgress
  },
};
</script>
<style lang="scss">
.main__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 73px;
  column-gap: 34px;
}
</style>
