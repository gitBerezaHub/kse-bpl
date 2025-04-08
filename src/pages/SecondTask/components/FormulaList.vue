<script lang="ts" setup>
import { computed } from "vue";
import { useSecondDataStore } from "@/pages/SecondTask/store/dataStore";

const store = useSecondDataStore();

const formulas = computed(() => [
  {
    index: 1,
    name: "Модуль вектора силы тяжести",
    answer: store.g1,
    measure: "H",
  },
  {
    index: 2,
    name: "Модуль силы иннерции",
    answer: store.fin1,
    measure: "H",
  },
  {
    index: 3,
    name: "Уравнение равновесия в аналитической форме",
    answer: store.r1,
    measure: "Н•м",
  },
  {
    index: 4,
    name: "Вращающий момент блока 2",
    answer: store.m2,
    measure: "Н•м",
  },
  {
    index: 5,
    name: "Вращающий момент блока 3",
    answer: store.m3,
    measure: "H",
  },
  {
    index: 6,
    name: "Сила действующая в точке М",
    answer: store.fm,
    measure: "H",
  },
]);
</script>

<template>
  <div class="wrapper-formulas">
    <div v-for="formula in formulas" :key="formula.index" class="formula">
      <p>
        {{ formula.index }}) {{ formula.name }} = {{ formula.answer }}
        {{ formula.measure }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
