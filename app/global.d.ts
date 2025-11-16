import type {} from 'hono'

type Head = {
  title?: string
  description?: string
  canonical?: string
  keywords?: string | string[]
  ogImage?: string
  noindex?: boolean
  structuredData?: Record<string, unknown> | Record<string, unknown>[]
}

declare module 'hono' {
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head): Response | Promise<Response>
  }
}
