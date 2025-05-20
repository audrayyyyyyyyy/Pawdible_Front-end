import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import { certPath, keyCertPath } from "./src/globals.tsx";

import fs from 'fs';

// Use defineConfig with proper typing
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    host: '0.0.0.0',
    port: 8888,
    https: {
      key:  keyCertPath,
      cert: certPath,
    },
  },
});
