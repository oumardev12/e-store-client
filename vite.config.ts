import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "%src": path.resolve(__dirname, "./src"),
    },
  },

  /*build: {
    minify: false,
  },*/

  server: {
    strictPort: true,
    // proxy: {
    // forward `/uploads/` endpoint to -> `http://localhost:5000/uploads/`
    //   "/uploads": {
    //     target: "http://localhost:8000",
    //   },
    // },
    hmr: {},
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
