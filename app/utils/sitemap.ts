import path from 'node:path'
import type { SSGPlugin } from 'hono/ssg'
import { DEFAULT_OUTPUT_DIR } from 'hono/ssg'

export const sitemapPlugin = (baseURL: string): SSGPlugin => {
  const resolvedBase = baseURL.endsWith('/') ? baseURL : `${baseURL}/`

  return {
    afterGenerateHook: async (result, fsModule, options) => {
      const outputDir = options?.dir ?? DEFAULT_OUTPUT_DIR
      const filePath = path.join(outputDir, 'sitemap.xml')
      const normalizedOutputDir = path.normalize(outputDir)
      const urls = result.files.map((file) => {
        const normalizedFile = path.normalize(file)
        const relativePath = normalizedFile.startsWith(normalizedOutputDir)
          ? path.relative(normalizedOutputDir, normalizedFile)
          : file
        return new URL(relativePath.replace(/\\/g, '/'), resolvedBase).toString()
      })
      const siteMapText = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`
      await fsModule.writeFile(filePath, siteMapText)
    },
  }
}
