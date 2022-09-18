import { defineConfig, loadEnv } from "vite";
import viteReact from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible";
import * as path from "path";
import visualizer from "rollup-plugin-visualizer";
import inject from "@rollup/plugin-inject";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        [`process.env.${key}`]: `"${val}"`,
      };
    },
    {}
  );

  return {
    plugins: [viteReact(), envCompatible({ prefix: "REACT_APP_" })],
    build: {
      outDir: "build",
      rollupOptions: {
        plugins: [
          visualizer(),
          inject({
            process: "process",
          }),
        ],
        output: {
          manualChunks: {
            highcharts: ["highcharts"],
          },
        },
      },
    },
    define: envWithProcessPrefix,
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  };
});
