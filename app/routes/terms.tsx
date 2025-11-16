import { createRoute } from 'honox/factory'

const points = [
  '本サービスの利用にあたり、法令および公序良俗を遵守してください。',
  'ユーザーは、アカウント情報や入力した内容の正確性について責任を負います。',
  'サービスの提供内容は予告なく変更・中止される場合があります。'
]

export default createRoute((c) => {
  return c.render(
    <section class='surface'>
      <div class='pill'>利用規約</div>
      <h1>ご利用前にお読みください</h1>
      <p>
        このページは雛形として用意されています。実際の提供条件に合わせて文面を調整してください。
        以下はサンプルの注意事項です。
      </p>
      <ul>
        {points.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p class='muted'>
        また、ユーザー間で生じたトラブルや損害について、運営者は責任を負わないことがあります。
        詳細な免責事項や準拠法なども必要に応じて追加してください。
      </p>
    </section>,
    { title: '利用規約', description: 'サービス利用に関する基本的な条件をまとめたページです。' }
  )
})
