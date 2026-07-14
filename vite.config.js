import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const clientEnvKeys = [
  'REACT_APP_WHATSAPP_PHONE',
  'REACT_APP_SCHEDULER_URL',
  'REACT_APP_EMAILJS_SERVICE_ID',
  'REACT_APP_EMAILJS_TEMPLATE_ID',
  'REACT_APP_EMAILJS_PUBLIC_KEY',
  'REACT_APP_ANALYTICS_WRITE_KEY',
  'REACT_APP_API_BASE_URL'
]

const defineClientEnv = Object.fromEntries(
  clientEnvKeys.map((key) => [`process.env.${key}`, JSON.stringify(process.env[key] ?? '')])
)

export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: 'public',
  define: {
    ...defineClientEnv,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV ?? 'development')
  },
  server: {
    port: 3000,
    open: false
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
