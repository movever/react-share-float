import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.jsx"],
  format: ["cjs", "esm"],
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"]
});



