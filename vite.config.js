import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minifikasi maksimal menggunakan terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,      // Hapus semua console.log
        drop_debugger: true,     // Hapus semua debugger statement
        pure_funcs: ['console.log', 'console.warn', 'console.error'],
        passes: 3,               // Kompresi 3x untuk hasil maksimal
        toplevel: true,
        unsafe: true,
        unsafe_arrows: true,
      },
      mangle: {
        toplevel: true,          // Acak nama variabel global
        safari10: true,
      },
      format: {
        comments: false,         // Hapus semua komentar
      },
    },
    // Pecah chunk jadi banyak file kecil agar susah dibaca
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // Nama file menggunakan hash acak
        entryFileNames: 'assets/[hash].js',
        chunkFileNames: 'assets/[hash].js',
        assetFileNames: 'assets/[hash].[ext]',
      },
    },
    // Target browser modern
    target: 'es2015',
    // Hapus source map (tanpa ini kode asli bisa dilihat)
    sourcemap: false,
  },
})
