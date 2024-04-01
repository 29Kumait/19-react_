import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/19-react_/",
  server: {
    port: 8080,
  },
  plugins: [react(), styleX()],
});
