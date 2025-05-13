<script lang="ts" setup>
import { computed } from "vue";
import { useDataStore } from "@/store/dataStore";

const store = useDataStore();

const formulas = computed(() => [
  { index: 1, name: "Сопротивление R2", answer: store.R2, measure: "Ом" },
  {
    index: 2,
    name: "Ток в ветви AB",
    answer: store.I1,
    measure: "A",
  },
  { index: 3, name: "Ток в ветви DA", answer: store.I2, measure: "A" },
  {
    index: 4,
    name: "Ток в ветви BC",
    answer: store.I3,
    measure: "A",
  },
  {
    index: 5,
    name: "Ток в ветви DC",
    answer: store.I4,
    measure: "A",
  },
  {
    index: 6,
    name: "Ток в ветви DB",
    answer: store.I,
    measure: "A",
  },
  {
    index: 7,
    name: "Напряжение в ветви AB",
    answer: store.Uab,
    measure: "B",
  },
  {
    index: 8,
    name: "Напряжение в ветви CD",
    answer: store.Ucd,
    measure: "B",
  },
  {
    index: 9,
    name: "Напряжение в ветви DA",
    answer: store.Uda,
    measure: "B",
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
