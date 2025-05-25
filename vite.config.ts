import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'BOBDO - Bogura Online Blood Donation Organization',
        short_name: 'BOBDO',
        description: 'Bogura Online Blood Donation Organization (BOBDO)',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'https://i.postimg.cc/D0V8yvZ2/bobdo.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'https://i.postimg.cc/D0V8yvZ2/bobdo.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          },
          {
            src: 'https://i.postimg.cc/D0V8yvZ2/bobdo.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
