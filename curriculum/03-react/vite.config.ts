import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The Next app has its own server
  server: { watch: { ignored: ["**/03-next-basics/**"] } },
});
