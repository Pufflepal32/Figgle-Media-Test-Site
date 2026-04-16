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
    sourcemap: 'hidden',
    modulePreload: {
      // Keep react-vendor preloaded (main entry needs it synchronously for FCP),
      // but drop helmet-vendor and router-vendor from the <link rel=modulepreload>
      // emission. The main index chunk imports them shortly after; not preloading
      // them saves ~50KB of eager JS fetches on the critical path — the "Reduce
      // unused JavaScript" Lighthouse flag.
      polyfill: false,
      resolveDependencies(_filename, deps) {
        return deps.filter(
          (d) => !d.includes('helmet-vendor') && !d.includes('router-vendor'),
        );
      },
    },
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
