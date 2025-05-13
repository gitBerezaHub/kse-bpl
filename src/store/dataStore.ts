import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => ({
    symbolsQuantity: 6,
    R1: 4,
    R2: 0,
    R3: 6,
    R4: 7,
    E: 0,
    E3: 11,
    I1: 0,
    I2: 0,
    I3: 0,
    I4: 0,
    I: 0,
    Uab: 0,
    Ucd: 0,
    Uda: 0,
  }),
  actions: {
    calc(formulaIndex: number) {
      switch (formulaIndex) {
        case 1:
          this.R2 =
            (this.R4 * -((this.E3 + this.E) / (this.R3 + this.R4))) /
            ((this.E3 + -((this.E3 + this.E) / (this.R3 + this.R4)) * this.R3) /
              this.R1);
          return 0;
        case 2:
          this.I1 =
            (this.E3 + -((this.E3 + this.E) / (this.R3 + this.R4)) * this.R3) /
            this.R1;
          return 0;
        case 3:
          this.I2 = this.I1;
          return 0;
        case 4:
          this.I3 = -((this.E3 + this.E) / (this.R3 + this.R4));
          return 0;
        case 5:
          this.I4 = -((this.E3 + this.E) / (this.R3 + this.R4));
          return 0;
        case 6:
          this.I = this.I1 + this.I3;
          return 0;
        case 7:
          this.Uab = Math.abs(this.I1) * this.R1;
          return 0;
        case 8:
          this.Ucd = Math.abs(this.I4) * this.R4;
          return 0;
        case 9:
          this.Uda = Math.abs(this.I2) * this.R2;
          return 0;
      }
    },
    roundAllNumbers() {
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
