<script lang="ts" setup>
import { useDataStore } from "@/store/dataStore";
import { onMounted } from "vue";

const store = useDataStore();
</script>

<template>
  <table class="grid-container">
    <thead>
      <tr>
        <th colspan="3">Сопротивление, Ом</th>
        <th colspan="2">Электродвижущая сила, В</th>
      </tr>
      <tr>
        <th class="sub-header">R<sub>1</sub></th>
        <th class="sub-header">R<sub>3</sub></th>
        <th class="sub-header">R<sub>4</sub></th>
        <th class="sub-header">ε</th>
        <th class="sub-header">ε<sub>1</sub></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>4</td>
        <td>6</td>
        <td>7</td>
        <td>
          <input
            v-model="store.E"
            type="number"
            :class="{ 'invalid-input': store.E < 1 }"
            min="1"
          />
        </td>
        <td>11</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
.invalid-input {
  border-color: red;
  background-color: rgba(255, 0, 0, 0.1);
  color: red;
}

input[type="number"] {
  width: 60px;
  padding: 5px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
}

.grid-container {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.grid-container th,
.grid-container td {
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
  padding: 8px;
}

.grid-container th {
  font-weight: bold;
  font-size: 16px;
}

.grid-container thead tr:first-child th {
  font-size: 18px;
}

.sub-header {
  font-weight: bold;
}

p {
  margin: 0;
  padding: 0;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

@media (max-width: 768px) {
  .grid-container th,
  .grid-container td {
    padding: 5px;
    font-size: 14px;
  }

  input {
    width: 40px;
  }
}
</style>
