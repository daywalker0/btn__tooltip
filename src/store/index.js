import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    btnName: "Was clicked",
    tooltipText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sit commodi.",
  }),
});
