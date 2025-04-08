<script lang="ts" setup>
import { useDataStore } from "@/pages/FirstTask/store/dataStore";
const store = useDataStore();
</script>

<template>
  <div class="tables-container">
    <div class="table-section">
      <table class="physics-table">
        <thead>
          <tr>
            <th rowspan="2">«Ускорение» точек груза 1</th>
            <th colspan="2">Угловые скорости блоков, с<sup>-1</sup></th>
          </tr>
          <tr>
            <th>
              <span class="parameter-box">ω<sub>2</sub></span>
            </th>
            <th>
              <span class="parameter-box">ω<sub>3</sub></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="parameter-box">a<sub>1</sub></span
              >, м/с<sup>2</sup>
            </td>
            <td>{{ store.w2 }}</td>
            <td>{{ store.w3 }}</td>
          </tr>
          <tr>
            <td>{{ store.at1 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tables-container {
  max-width: 50vw;
  margin-top: 1.5rem;
}

.table-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

// Styles for the first table
.physics-table {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    padding: 0.5rem;
    text-align: center;
    vertical-align: middle;
  }

  th {
    font-weight: bold;
  }
}

.parameter-box {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
}

// Styles for the second table
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
  width: 100%;
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

.sub-header {
  font-weight: bold;
}

@media (max-width: 768px) {
  .physics-table th,
  .physics-table td,
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
