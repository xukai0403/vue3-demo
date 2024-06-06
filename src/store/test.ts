import { defineStore } from 'pinia';

interface State {
  count: number;
  testString: string;
}

export const useTestStore = defineStore('test', {
  state: (): State => {
    return {
      count: 0,
      testString: 'test',
    };
  },
  actions: {
    setCountNumber() {
      this.count = this.count + 1;
    },
  },
});
