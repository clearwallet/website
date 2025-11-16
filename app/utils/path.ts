const baseFromEnv = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL : '/website/'
const normalizedBase = baseFromEnv.replace(/\/$/, '')

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}
