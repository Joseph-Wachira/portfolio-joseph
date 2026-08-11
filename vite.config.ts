import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'gsap', '@gsap/react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
