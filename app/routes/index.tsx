import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <div class='card'>
      <div class='badge'>新規プロジェクト</div>
      <h1>ようこそ。Honoxで作るシンプルなウェブサイトです</h1>
      <p>
        トップページ、利用規約、プライバシーポリシーの3ページを備えたサンプル構成です。
        HonoXのSSGを使うことで、ビルド時に静的HTMLとしてdocsディレクトリへ書き出します。
      </p>
      <p>
        ナビゲーションから各ページへ移動し、文面をプロジェクトに合わせて編集してください。
      </p>
    </div>,
    {
      title: 'トップ',
      description: 'HonoXで構築したトップページのサンプルです。',
    }
  )
})
