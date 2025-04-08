<script lang="ts" setup>
import TaskPcture from "@/pages/SecondTask/components/TaskPcture.vue";
import DataTable from "@/pages/SecondTask/components/DataTable.vue";
import FormulaList from "@/pages/SecondTask/components/FormulaList.vue";
import { useDataStore } from "@/pages/FirstTask/store/dataStore";
import { computed } from "vue";
import SecondDataTable from "@/pages/SecondTask/components/SecondDataTable.vue";
import { useSecondDataStore } from "@/pages/SecondTask/store/dataStore";

const taskText =
  "Механизм, описание структуры которого представлено в задаче части № 2 задания № 2 является идеальным (рис. 3.3). Определить силу, которую необходимо приложить к грузу 1 для прекращения движения в момент времени t , а также силу, которая сформируется при продолжении движения груза 1 в момент времени t в точке М большого цилиндра блока 3 механизма. Радиусы цилиндров блоков 2 и 3, а также необходимые кинематические параметры взять из решения задачи задания № 2.";

const store = useDataStore();
const secondStore = useSecondDataStore();

function calcFormulas() {
  console.log(secondStore.m1);
  if (secondStore.m1 <= 0) return 0;
  for (let i = 1; i < 7; i++) {
    secondStore.calc(i);
  }
}

const answer = computed(() => {
  if (!secondStore.fm) return "";
  secondStore.roundAllNumbersSecond();
  return `Для прекращения движения груза 1 в момент времени t=${store.t} с к нему необходимо приложить силу равную , при этом в момент времени t=${store.t} с в точке М большого цилиндра блока 3 механизма сформируется сила равная ${secondStore.fm}.`;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="left">
      <TaskPcture />
      <DataTable />
      <SecondDataTable />
      <label for="quantity" style="margin-top: 20px">
        Количество знаков после запятой:
      </label>
      <input
        id="quantity"
        v-model="secondStore.symbolsQuantity"
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
