import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    base: "./",
    plugins: [
      react(),
      federation({
        name: "Microfrontend-concept-shell",
        remotes: {
          mfConceptRemoteAppTest:
            // "http://staging.smandes.gov.ar/parcelTest/assets/remoteEntry.js",
            "http://localhost:5001/assets/parcel.js",
          // "https://microfront-parcel-test.netlify.app/assets/remoteEntry.js",
          // "http://localhost:5001/assets/remoteEntry.js",
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
  };
});
