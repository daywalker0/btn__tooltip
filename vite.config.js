import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/btn__tooltip/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import "./src/styles/vars";
				`,
      },
    },
  },
});
