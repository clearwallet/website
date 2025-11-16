import { defineConfig } from 'vite'
import honox from 'honox/vite'
import ssg from '@hono/vite-ssg'

const entry = './app/server.ts'

export default defineConfig(() => {
  return {
    base: '/website/',
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },
    plugins: [honox(), ssg({ entry })],
  }
})
