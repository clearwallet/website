import type { NotFoundHandler } from 'hono'

import { withBasePath } from '../utils/path'

const handler: NotFoundHandler = (c) => {
  return c.render(
    <div class='card'>
      <div class='badge'>404</div>
      <h1>ページが見つかりません</h1>
      <p>
        お探しのページは移動または削除された可能性があります。トップページから再度お試しください。
      </p>
      <p>
        <a href={withBasePath('/')}>トップへ戻る</a>
      </p>
    </div>,
    {
      title: 'ページが見つかりません',
      description: 'お探しのページが見つかりませんでした。URL をご確認のうえ、トップページにお戻りください。',
      canonical: c.req.path,
      noindex: true,
    }
  )
}

export default handler
