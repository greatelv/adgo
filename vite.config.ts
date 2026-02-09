import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "next/image",
        replacement: path.resolve(process.cwd(), "./src/mocks/next-image.tsx"),
      },
      {
        find: "next/navigation",
        replacement: path.resolve(
          process.cwd(),
          "./src/mocks/next-navigation.ts",
        ),
      },
    ],
  },
  define: {
    "process.env": {},
  },
});
