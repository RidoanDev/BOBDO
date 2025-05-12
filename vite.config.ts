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
      includeAssets: ['bobdo.png', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'BOBDO - Bogura Online Blood Donation Organization',
        short_name: 'BOBDO',
        description: 'Bogura Online Blood Donation Organization (BOBDO)',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'bobdo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'bobdo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'bobdo.png',
            sizes: '512x512',
            type: 'image/png',
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