import { jsxRenderer } from 'hono/jsx-renderer'

const baseStyles = `
  :root {
    color-scheme: light;
    font-family: 'Inter', 'Noto Sans JP', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #f6f7fb;
    color: #101828;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    background: radial-gradient(circle at 20% 20%, #eef2ff, transparent 30%),
      radial-gradient(circle at 80% 0%, #e0f2fe, transparent 25%),
      #f6f7fb;
  }
  a { color: inherit; }
  header {
    position: sticky;
    top: 0;
    backdrop-filter: blur(8px);
    background: rgba(246, 247, 251, 0.9);
    border-bottom: 1px solid #e4e7ec;
  }
  nav {
    max-width: 960px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  nav .brand {
    font-weight: 700;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 12px;
    margin: 0;
    padding: 0;
  }
  nav a {
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 12px;
    transition: background 0.2s ease, color 0.2s ease;
  }
  nav a:hover, nav a:focus-visible {
    background: #e4e7ec;
  }
  main {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 24px 64px;
    display: grid;
    gap: 16px;
  }
  h1 {
    margin: 0 0 12px;
    font-size: clamp(28px, 4vw, 36px);
  }
  h2 {
    margin-top: 28px;
    margin-bottom: 12px;
    font-size: 20px;
    color: #344054;
  }
  p {
    margin: 0 0 14px;
    line-height: 1.7;
    color: #475467;
  }
  ul {
    margin: 0 0 16px 20px;
    color: #475467;
    line-height: 1.6;
    padding: 0;
  }
  li + li {
    margin-top: 8px;
  }
  .card {
    background: white;
    border: 1px solid #e4e7ec;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 24px rgba(16, 24, 40, 0.06);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    padding: 6px 10px;
    border-radius: 999px;
    background: #eef2ff;
    color: #444ce7;
    font-weight: 600;
  }
  footer {
    text-align: center;
    padding: 32px 24px;
    color: #667085;
  }
`

export default jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ? `${title} | Honox App` : 'Honox App'
  const metaDescription = description ?? 'Minimal multi-page site built with HonoX.'

  return (
    <html lang='ja'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{pageTitle}</title>
        <meta name='description' content={metaDescription} />
        <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
      </head>
      <body>
        <header>
          <nav>
            <div class='brand'>
              <span aria-hidden='true'>✨</span>
              <span>Honox App</span>
            </div>
            <ul>
              <li>
                <a href='/'>トップ</a>
              </li>
              <li>
                <a href='/terms'>利用規約</a>
              </li>
              <li>
                <a href='/privacy'>プライバシーポリシー</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>© {new Date().getFullYear()} Honox App</small>
        </footer>
      </body>
    </html>
  )
})
