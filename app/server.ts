import { createApp } from 'honox/server'
import { showRoutes } from 'hono/dev'

const app = createApp()

if (process.env.NODE_ENV !== 'production') {
  showRoutes(app)
}

export default app
