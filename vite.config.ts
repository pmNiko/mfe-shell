import { defineConfig, loadEnv } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    plugins: [
      react(),
      federation({
        name: "mfe-shell",
        filename: "mfe-shell-entry.js",
        shared: ["react", "react-dom", "@emotion/react"],
        remotes: {
          "mfe-parcel": process.env.VITE_PARCEL_URL,
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },

    base: "/",
  };
});
