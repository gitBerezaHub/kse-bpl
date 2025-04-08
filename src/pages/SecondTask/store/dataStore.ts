import { defineStore } from "pinia";
import { useDataStore } from "@/pages/FirstTask/store/dataStore";

export const useSecondDataStore = defineStore("dataSecond", {
  state: () => ({
    symbolsQuantity: 6,
    m1: 6,
    g1: 0,
    fin1: 0,
    r1: 0,
    m2: 0,
    m3: 0,
    fm: 0,
  }),
  actions: {
    calc(formulaIndex: number) {
      const store = useDataStore();
      switch (formulaIndex) {
        case 1:
          this.g1 = this.m1 * 9.81;
          return 0;
        case 2:
          this.fin1 = this.m1 * store.at1;
          return 0;
        case 3:
          this.r1 = this.g1 - this.fin1;
          return 0;
        case 4:
          this.m2 = (this.g1 * store.R2) / 1000;
          return 0;
        case 5:
          this.m3 = (this.m2 * store.w2) / store.w3;
          return 0;
        case 6:
          this.fm = (this.m3 / store.R3) * 1000;
          return 0;
      }
    },
    roundAllNumbersSecond() {
      const roundToFour = (num: number) =>
        Math.round(num * 10 ** this.symbolsQuantity) /
        10 ** this.symbolsQuantity;

      Object.keys(this.$state).forEach((key) => {
        if (typeof this.$state[key as keyof typeof this.$state] === "number") {
          this.$state[key as keyof typeof this.$state] = roundToFour(
            this.$state[key as keyof typeof this.$state] as number
          );
        }
      });
    },
  },
});
