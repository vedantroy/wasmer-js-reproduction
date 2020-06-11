import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import internal from "rollup-plugin-internal";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [
    resolve(),
    commonJS({ include: "node_modules/**/*" }),
    typescript(),
    internal(["@wasmer/wasi", "@wasmer/wasm-transformer"]),
  ],
};
