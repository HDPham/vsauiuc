import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'vsauiuc',
  plugins: [react()],
  server: {
    open: true,
  },
});
