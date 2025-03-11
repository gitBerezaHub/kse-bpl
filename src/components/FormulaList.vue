<script setup lang="ts">
import { computed } from "vue";
import { useDataStore } from "@/store/dataStore";
const store = useDataStore();

const formulas = computed(() => [
  { index: 1, name: "Расстояние", answer: store.S1, measure: "мм" },
  { index: 2, name: "Изменение скорости", answer: store.V1, measure: "м/с" },
  {
    index: 3,
    name: "Тангенсальное ускорение",
    answer: store.at1,
    measure: "м/с²",
  },
  {
    index: 4,
    name: "Угловая скорость блока 2",
    answer: store.w2,
    measure: "с⁻¹",
  },
  {
    index: 5,
    name: "Угловое ускорение блока 2",
    answer: store.E2,
    measure: "с⁻²",
  },
  {
    index: 6,
    name: "Скорость малого цилиндра блока 2",
    answer: store.Vb,
    measure: "м/с",
  },
  {
    index: 7,
    name: "Ускорение малого цилиндра блока 2",
    answer: store.atb,
    measure: "м/с²",
  },
  {
    index: 8,
    name: "Угловая скорость блока 3",
    answer: store.w3,
    measure: "c⁻¹",
  },
  {
    index: 9,
    name: "Угловое ускорение блока 3",
    answer: store.E3,
    measure: "с⁻²",
  },
  { index: 10, name: "Скорость точки М", answer: store.Vm, measure: "м/с" },
  {
    index: 11,
    name: "Тангесальное ускорение точки М",
    answer: store.atm,
    measure: "м/с²",
  },
  {
    index: 12,
    name: "Нормальное ускорение точки М",
    answer: store.anm,
    measure: "м/с²",
  },
  {
    index: 13,
    name: "Полное ускорение точки М",
    answer: store.am,
    measure: "м/с²",
  },
]);
</script>

<template>
  <div class="wrapper-formulas">
    <div class="formula" v-for="formula in formulas" :key="formula.index">
      <p>
        {{ formula.index }}) {{ formula.name }} = {{ formula.answer }}
        {{ formula.measure }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
