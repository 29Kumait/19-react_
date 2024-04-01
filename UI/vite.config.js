import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/19-react_/" : "/",
  server: {
    port: 8080,
  },
  plugins: [react(), styleX()],
});
