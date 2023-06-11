import { defineStore } from "pinia";

export const useCollapseStore = defineStore("Collapse", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
  getters: {},
  actions: {
    collapse() {
      console.log(this.isCollapse);
      this.isCollapse = !this.isCollapse;
    },
  },
});
