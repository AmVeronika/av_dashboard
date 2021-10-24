<template>
  <div class="main">
    <div class="main__row">
      <CurrentDate />
      <ProjectsAddNew />
    </div>
    <div class="main__row--grid-2c">
      <ProjectPreview />
    </div>
  </div>
</template>
<script>
import CurrentDate from "../components/CurrentDate";
import ProjectsAddNew from "../components/projects-components/ProjectsAddNew";
import ProjectPreview from "../components/projects-components/ProjectsPreview";

export default {
  name: "Projects",
  components: {
    ProjectPreview,
    CurrentDate,
    ProjectsAddNew,
  },
};
</script>

<style scoped></style>
