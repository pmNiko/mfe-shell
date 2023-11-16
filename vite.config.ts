import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  // export default defineConfig(({ mode }) => {
  //   const env = loadEnv("mock", process.cwd(), "");
  //   const processEnvValues = {
  //     "process.env": Object.entries(env).reduce((prev, [key, val]) => {
  //       // console.log(key, val);
  //       return {
  //         ...prev,
  //         [key]: val,
  //       };
  //     }, {}),
  //   };

  //   return {
  base: "./",
  plugins: [
    react(),
    federation({
      name: "Microfrontend-concept-shell",
      remotes: {
        // "mf-parcel": `${env.VITE_PARCEL_URL}`,
        "mf-parcel":
          "https://microfront-parcel-test.netlify.app/assets/parcel.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  // define: processEnvValues,

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  // };
});
