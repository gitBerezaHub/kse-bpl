<script setup lang="ts">
import TaskPcture from "@/components/TaskPcture.vue";
import DataTable from "@/components/DataTable.vue";
import FormulaList from "@/components/FormulaList.vue";
import { useDataStore } from "@/store/dataStore";
import { computed } from "vue";
const taskText =
  "Механизм состоит из двух блоков 2 и 3, каждый из которых образован совокупностью жестко связанных большого и малого цилиндров. Большой цилиндр 2 взаимодействует (без скольжения) с малым цилиндром 3 в точке В. Малый цилиндр 2 НЕ взаимодействует с большим цилиндром 3. К большему цилиндру 2 в точке А на «нерастяжимом тросе» подвешен груз 1, который совершает «прямолинейное движение» по заданному уравнению. Определить «путь», пройденный грузом 1, а так же «скорость», «нормальное», «тангенциальное» и «полное ускорение» точки М большого цилиндра блока 3 механизма в момент времени t.";

const store = useDataStore();
function calcFormulas() {
  if (store.R2 < 1 || store.r2 < 1 || store.R3 < 1 || store.r3 < 1) return 0;
  for (let i = 1; i < 16; i++) {
    store.calc(i);
  }
}

const answer = computed(() => {
  if (!store.am) return "";
  store.roundAllNumbers();
  return `В момент времени t=${store.t} с груз 1 прошел «путь» равный ${store.S1} мм, а точка М большого цилиндра блока 3 механизма имеет «нормальное ускорение» ${store.anm} м/с2, «тангенциальное ускорение» ${store.atm} м/с2 и «полное ускорение» ${store.am} м/с2`;
});
</script>

<template>
  <div class="page-wrapper">
    <div class="left">
      <TaskPcture />
      <DataTable />
      <label for="quantity" style="margin-top: 20px"
        >Количество знаков после запятой:</label
      >
      <input
        type="number"
        id="quantity"
        style="width: 30%"
        v-model="store.symbolsQuantity"
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

<style scoped lang="scss">
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
