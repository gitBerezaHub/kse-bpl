<script lang="ts" setup>
import TaskPcture from "@/components/TaskPcture.vue";
import DataTable from "@/components/DataTable.vue";
import FormulaList from "@/components/FormulaList.vue";
import { useDataStore } from "@/store/dataStore";
import { computed } from "vue";

const taskText =
  "Разветвленная электрическая схема содержит четыре сопротивления R1, R2, R3, R4, два источника электрической энергии с электродвижущими силами ε, ε1 и гальванометр G. Направления электрических токов ветвей указаны стрелочками. Cчитая, что электрический ток в ветви с гальванометром G отсутствует, т.е. IG = 0, определить сопротивление, электрические токи в каждой ветви разветвленной электрической схемы и напряжения в ветвях без источников электрической энергии";

const store = useDataStore();

function calcFormulas() {
  if (store.E <= 0) return 0;
  for (let i = 1; i < 16; i++) {
    store.calc(i);
  }
}

const answer = computed(() => {
  if (!store.R2) return "";
  store.roundAllNumbers();
  return `Сопротивление R2 = ${store.R2}; Электрические токи в каждой ветви разветвленной электрической схемы I1 = ${store.I1};  I3 = I4 = ${store.I3} и I = ${store.I}; Напряжения в ветвях без источников электрической энергии Uab = ${store.Uab}; Ucd = ${store.Ucd} и Uda = U2 = ${store.Uda}.`;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="left">
      <TaskPcture />
      <DataTable />
      <label for="quantity" style="margin-top: 20px">
        Количество знаков после запятой:
      </label>
      <input
        id="quantity"
        v-model="store.symbolsQuantity"
        style="width: 30%"
        type="number"
      />
      <button class="start-btn" @click="calcFormulas">Посчитать</button>
    </div>
    <div class="right">
      <p class="task-text"><strong>Задача: </strong>{{ taskText }}</p>
      <FormulaList />
      <p class="answer"><strong>Ответ:</strong> {{ answer }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left,
.right {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.left {
  width: 40%;
}

.right {
  width: 55%;
}

.task-text {
  padding: 5px 30px 10px 0;
}

.start-btn {
  width: 50%;
  height: 40px;
  margin: 40px auto;
  cursor: pointer;
}

.answer {
  padding-right: 30px;
}

@media (max-width: 1000px) {
  .page-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .left,
  .right {
    width: 80%;
  }
}
</style>
