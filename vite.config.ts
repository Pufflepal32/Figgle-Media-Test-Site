import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-router')) return 'router-vendor';
          if (id.includes('react-helmet')) return 'helmet-vendor';
          if (id.includes('react-dom') || id.includes('react/') || id.includes('scheduler')) {
            return 'react-vendor';
          }
          if (id.includes('lucide-react')) return 'icons-vendor';
        },
      },
    },
  },
});
