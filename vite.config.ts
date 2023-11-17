import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "Microfrontend-concept-shell",
      remotes: {
        "mfe-parcel": "http://localhost:5001/assets/parcel.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  base: "/",
});
