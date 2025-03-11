<script lang="ts" setup>
import { useDataStore } from "@/store/dataStore";

const store = useDataStore();
</script>

<template>
  <table class="grid-container">
    <thead>
      <tr>
        <th rowspan="2">Момент времени<br />t, с</th>
        <th rowspan="2">Уравнение движения<br />груза 1, мм</th>
        <th colspan="4">Радиусы цилиндров, мм</th>
      </tr>
      <tr>
        <th class="sub-header">R<sub>2</sub></th>
        <th class="sub-header">r<sub>2</sub></th>
        <th class="sub-header">R<sub>3</sub></th>
        <th class="sub-header">r<sub>3</sub></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input
            v-model="store.t"
            :class="{ 'invalid-input': store.t < 1 }"
            min="1"
            type="number"
          />
        </td>
        <td class="equation"><p>y₁ = 43 + 28t²</p></td>
        <td>
          <input
            v-model="store.R2"
            :class="{ 'invalid-input': store.R2 < 1 }"
            min="1"
            type="number"
          />
        </td>
        <td>
          <input
            v-model="store.r2"
            :class="{ 'invalid-input': store.r2 < 1 }"
            min="1"
            type="number"
          />
        </td>
        <td>
          <input
            v-model="store.R3"
            :class="{ 'invalid-input': store.R3 < 1 }"
            min="1"
            type="number"
          />
        </td>
        <td>
          <input
            v-model="store.r3"
            :class="{ 'invalid-input': store.r3 < 1 }"
            min="1"
            type="number"
          />
        </td>
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

.equation p {
  margin: 0;
  padding: 5px;
}

.grid-container {
  border-collapse: collapse;
  max-width: 50vw;
}

.grid-container th,
.grid-container td {
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
}

.grid-container th {
  font-weight: bold;
  font-size: 10px;
}

.cylinder-radii {
  text-align: center;
}

.sub-header {
  font-weight: bold;
}

input {
  width: 60px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
}

.equation input {
  width: fit-content;
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

  .equation input {
    width: 120px;
  }
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
</style>
