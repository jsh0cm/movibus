/// <reference types="node" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import os from 'os'

// Función para detectar la IP local automáticamente
function getLocalIP() {
  const interfaces = os.networkInterfaces()
  for (const name in interfaces) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'localhost'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
    react()
  ],
  server: {
    host: getLocalIP(),
    port: 5173,
    open: true, // abrirá automáticamente en el navegador
  }
})
