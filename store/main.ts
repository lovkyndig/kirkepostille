import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter:  0,
    name: 'Eduardo',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1
    },
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    increment() {
      this.counter++;
    }
  },
})
/*
source:
https://github.com/l4dybird/nuxt3-pinia-quasar/blob/main/store/main.ts
*/