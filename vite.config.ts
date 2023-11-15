import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    federation({
      name: "Microfrontend-concept-shell",
      remotes: {
        mfConceptRemoteAppTest:
          "https://microfront-parcel-test.netlify.app/assets/remoteEntry.js",
        // "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  server: {
    cors: { origin: "*" },
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },

  // build: {
  //   modulePreload: false,
  //   target: "esnext",
  //   minify: false,
  //   cssCodeSplit: false,
  // },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
});
