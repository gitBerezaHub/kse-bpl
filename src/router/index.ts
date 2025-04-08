import { createMemoryHistory, createRouter } from "vue-router";

import SecondPage from "@/pages/SecondTask/SecondPage.vue";
import TaskPage from "@/pages/FirstTask/TaskPage.vue";

const routes = [
  { path: "/", component: TaskPage },
  { path: "/second", component: SecondPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
