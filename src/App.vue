<template>
  <main>
    <TaskPage />
  </main>
</template>

<script lang="ts" setup>
import TaskPage from "@/pages/TaskPage.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  overflow: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}
</style>
