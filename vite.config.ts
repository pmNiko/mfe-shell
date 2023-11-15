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
    // cors: { origin: "*" },
    proxy: {
      "/": {
        target: "https://microfront-parcel-test.netlify.app",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\//, ""),
      },
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
