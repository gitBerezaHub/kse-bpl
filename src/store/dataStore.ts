import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    symbolsQuantity: 6,
    t: 21,
    R2: 75,
    r2: 60,
    R3: 70,
    r3: 45,
    S1: 0,
    V1: 0,
    at1: 0,
    w2: 0,
    E2: 0,
    Vb: 0,
    atb: 0,
    w3: 0,
    E3: 0,
    Vm: 0,
    atm: 0,
    anm: 0,
    am: 0,
  }),
  actions: {
    calc(formulaIndex: number) {
      switch (formulaIndex) {
        case 1:
          this.S1 = 43 + 28 * this.t ** 2;
          return 0;
        case 2:
          this.V1 = (56 * this.t) / 1000;
          return 0;
        case 3:
          this.at1 = 0.056;
          return 0;
        case 4:
          this.w2 = this.V1 / (this.R2 * 10 ** -3);
          return 0;
        case 5:
          this.E2 = this.at1 / (this.R2 * 10 ** -3);
          return 0;
        case 6:
          this.Vb = (this.w2 * this.r2) / 1000;
          return 0;
        case 7:
          this.atb = (this.E2 * this.r2) / 1000;
          return 0;
        case 8:
          this.w3 = this.Vb / (this.r3 * 10 ** -3);
          return 0;
        case 9:
          this.E3 = this.atb / (this.r3 * 10 ** -3);
          return 0;
        case 10:
          this.Vm = (this.w3 * this.R3) / 1000;
          return 0;
        case 11:
          this.atm = (this.E3 * this.R3) / 1000;
          return 0;
        case 12:
          this.anm = (this.Vm ** 2 * 1000) / this.R3;
          return 0;
        case 13:
          this.am = Math.sqrt(this.anm ** 2 + this.atm ** 2);
          return 0;
      }
    },
    roundAllNumbers() {
      const roundToFour = (num: number) => Math.round(num * 10**this.symbolsQuantity) / 10**this.symbolsQuantity;

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
