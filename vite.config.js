import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/07-tic-tac-toe-starting-project/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});