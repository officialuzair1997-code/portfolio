import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      react: path.resolve(process.cwd(), "./node_modules/react"),
      "react-dom": path.resolve(process.cwd(), "./node_modules/react-dom"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Group core framework libraries
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("@reduxjs") ||
              id.includes("redux")
            ) {
              return "framework";
            }

            // Group UI libraries and their direct dependencies
            if (
              id.includes("@material-tailwind") ||
              id.includes("@floating-ui") ||
              id.includes("framer-motion") ||
              id.includes("clsx") ||
              id.includes("tailwind-merge")
            ) {
              return "ui-kit";
            }

            // Group large utility libraries
            if (id.includes("lucide-react")) {
              return "icons";
            }

            // Everything else goes to vendor
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
