<script lang="ts" setup>
import { computed } from "vue";
import { useDataStore } from "@/store/dataStore";

const store = useDataStore();

const formulas = computed(() => [
  { index: 1, name: "Расстояние", answer: store.S1, measure: "мм" },
  {
    index: 2,
    name: "Скорость любой точки груза один",
    answer: store.V1,
    measure: "м/с",
  },
  { index: 3, name: "Скорость в точке А", answer: store.V1, measure: "м/с" },
  {
    index: 4,
    name: "Тангенциальное ускорение любой точки один",
    answer: store.at1,
    measure: "м/с²",
  },
  {
    index: 5,
    name: "тангенциальное ускорение точки А",
    answer: store.at1,
    measure: "м/с²",
  },
  {
    index: 6,
    name: "Угловая скорость блока 2",
    answer: store.w2,
    measure: "с⁻¹",
  },
  {
    index: 7,
    name: "Угловое ускорение блока 2",
    answer: store.E2,
    measure: "с⁻²",
  },
  {
    index: 8,
    name: "Скорость малого цилиндра блока 2",
    answer: store.Vb,
    measure: "м/с",
  },
  {
    index: 9,
    name: "Ускорение малого цилиндра блока 2",
    answer: store.atb,
    measure: "м/с²",
  },
  {
    index: 10,
    name: "Угловая скорость блока 3",
    answer: store.w3,
    measure: "c⁻¹",
  },
  {
    index: 11,
    name: "Угловое ускорение блока 3",
    answer: store.E3,
    measure: "с⁻²",
  },
  { index: 12, name: "Скорость точки М", answer: store.Vm, measure: "м/с" },
  {
    index: 13,
    name: "Тангесальное ускорение точки М",
    answer: store.atm,
    measure: "м/с²",
  },
  {
    index: 14,
    name: "Нормальное ускорение точки М",
    answer: store.anm,
    measure: "м/с²",
  },
  {
    index: 15,
    name: "Полное ускорение точки М",
    answer: store.am,
    measure: "м/с²",
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
