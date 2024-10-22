<<<<<<< HEAD
import babel from "rollup-plugin-babel";
=======
import babel from "@rollup/plugin-babel";
>>>>>>> d9a984a94df7579cf987969036928d5ab9ee5760
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
<<<<<<< HEAD
import { terser } from "rollup-plugin-terser";
=======
import terser from "@rollup/plugin-terser";
>>>>>>> d9a984a94df7579cf987969036928d5ab9ee5760

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
<<<<<<< HEAD
        exclude: ["node_modules/**", "app/**/*"],
=======
        exclude: "node_modules/**",
>>>>>>> d9a984a94df7579cf987969036928d5ab9ee5760
        presets: ["@babel/preset-react"],
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
];
