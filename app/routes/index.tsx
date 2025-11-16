import { createRoute } from 'honox/factory'

import { withBasePath } from '../utils/path'

export default createRoute((c) => {
  return c.render(
    <>
      <section class='hero'>
        <div class='pill'>Honox SSG <strong>雛形</strong></div>
        <h1>シンプルだけど、洗練されたスタート地点を。</h1>
        <p class='lead'>
          トップ / 利用規約 / プライバシーポリシーの3ページ構成を、ビルド時に静的HTMLとして
          <code>docs</code> へ出力します。装飾や文言を入れ替えるだけで、すぐに公開できるベースを用意しました。
        </p>
        <div class='actions'>
          <a class='button' href={withBasePath('/terms')}>利用規約をみる</a>
          <a class='button secondary' href={withBasePath('/privacy')}>プライバシーを確認</a>
        </div>
        <dl class='grid' aria-label='サイト概要'>
          <div class='stat'>
            <dt>静的出力</dt>
            <dd>npm run build で自動的に docs 配下へビルド。</dd>
          </div>
          <div class='stat'>
            <dt>軽量な構成</dt>
            <dd>HonoX + TypeScript の最小構成で保守が容易。</dd>
          </div>
          <div class='stat'>
            <dt>編集しやすさ</dt>
            <dd>ページごとの JSX を書き換えるだけで内容更新。</dd>
          </div>
        </dl>
      </section>

      <section class='surface'>
        <h2>次のステップ</h2>
        <p>
          色やレイアウトは CSS を少し変えるだけで印象が大きく変わります。ナビゲーションの文言やブランド名をプロジェクトに合わせて編集し、必要なら新しいページを追加してください。
        </p>
        <p class='muted'>
          SSG された HTML は GitHub Pages などにそのまま配置できます。カスタムドメインや CI の設定を加えれば、最短で公開が可能です。
        </p>
      </section>
    </>,
    {
      title: 'トップ',
      description: 'HonoXで構築したトップページのサンプルです。',
    }
  )
})
