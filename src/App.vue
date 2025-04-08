<template>
  <div class="routes">
    <button
      class="btn"
      :class="openedPage === 1 ? 'btn-primary' : 'btn-secondary'"
      @click="openedPage = 1"
    >
      Первая задача
    </button>
    <button
      class="btn"
      :class="openedPage === 2 ? 'btn-primary' : 'btn-secondary'"
      @click="openedPage = 2"
    >
      Вторая задача
    </button>
  </div>
  <main>
    <TaskPage v-if="openedPage === 1" />
    <SecondPage v-if="openedPage === 2" />
  </main>
</template>

<script lang="ts" setup>
import TaskPage from "@/pages/FirstTask/TaskPage.vue";
import { ref } from "vue";
import SecondPage from "@/pages/SecondTask/SecondPage.vue";

const openedPage = ref(1);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  overflow-x: hidden;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
}

.button-container {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.btn-primary {
  background-color: #2c3e50;
  color: white;
  border-color: #2c3e50;

  &:hover {
    background-color: darken(#2c3e50, 10%);
    border-color: darken(#2c3e50, 10%);
  }

  &:active {
    background-color: darken(#2c3e50, 15%);
    border-color: darken(#2c3e50, 15%);
  }
}

.btn-secondary {
  background-color: white;
  color: #2c3e50;
  border-color: #2c3e50;

  &:hover {
    background-color: #f8f9fa;
    border-color: darken(#2c3e50, 10%);
  }

  &:active {
    background-color: #e9ecef;
    border-color: darken(#2c3e50, 15%);
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 768px) {
  body {
    overflow: auto;
  }
}
</style>
