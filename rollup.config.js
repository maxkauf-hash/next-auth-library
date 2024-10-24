import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      external(),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      babel({
        exclude: ["node_modules/**"],
        presets: ["@babel/preset-react"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
];
