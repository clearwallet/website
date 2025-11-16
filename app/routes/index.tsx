import { createRoute } from 'honox/factory'

import { withBasePath } from '../utils/path'

export default createRoute((c) => {
  return c.render(
    <>
      <section class='hero'>
        <div class='brand-card'>
          <img src={withBasePath('/assets/clear-wallet-logo.svg')} alt='Clear Wallet ロゴ' />
          <div>
            <p class='eyebrow'>Polygon Beginners Welcome</p>
            <p class='muted'>日本円ステーブルでガス代が払える、透明なセルフカストディ体験。</p>
          </div>
        </div>
        <div class='pill'>Polygon 専用セルフカストディ</div>
        <h1>Clear Wallet — JPYC でガス代を払える、初心者のための透明なウォレット</h1>
        <p class='lead'>
          送金・NFT表示・WalletConnect に加え、トランザクションを AI がやさしく要約。日本円ステーブル（JPYC）で
          ガス代を支払えるから、暗号資産が初めてでも安心して Polygon を使い始められます。
        </p>
        <div class='actions'>
          <a class='button' href={withBasePath('/terms')}>利用規約</a>
          <a class='button secondary' href={withBasePath('/privacy')}>プライバシーポリシー</a>
        </div>
        <dl class='grid' aria-label='Clear Wallet のポイント'>
          <div class='stat'>
            <dt>JPYC / USDC でガス代</dt>
            <dd>日本円ステーブルや USDC から手数料を自動換算して支払い。</dd>
          </div>
          <div class='stat'>
            <dt>AI 要約</dt>
            <dd>難しいトランザクション内容を日本語で一目で理解。</dd>
          </div>
          <div class='stat'>
            <dt>はじめてでも安心</dt>
            <dd>セルフカストディ運用をステップごとにガイド。</dd>
          </div>
        </dl>
      </section>

      <section class='surface'>
        <div class='pill'>特徴</div>
        <h2>Clear Wallet が選ばれる理由</h2>
        <ul>
          <li>送金・NFT表示・WalletConnect に対応し、Polygon 上の dApp とシームレスに接続。</li>
          <li>ガス代を JPYC または USDC で肩代わりできるため、POL を事前に用意する手間を解消。</li>
          <li>AI がトランザクションを日本語で要約し、承認前に内容を直感的に理解可能。</li>
          <li>初心者向けのチュートリアルや用語解説をアプリ内に搭載し、自分の資産を自分で守れるようサポート。</li>
          <li>セルフカストディ設計で秘密鍵は端末内に保管。復元フレーズ管理もガイドします。</li>
        </ul>
        <p class='muted'>
          日本市場に合わせて、ガス代を日本円ステーブルで払える分かりやすさと、透明性の高い情報提示を重視しています。
          詳細な利用条件やデータの扱いについては、以下のポリシーをご確認ください。
        </p>
      </section>
    </>,
    {
      title: 'Clear Wallet | Polygon初心者向けセルフカストディウォレット',
      description:
        'JPYCでガス代を支払えるPolygon特化ウォレット。送金・NFT表示・WalletConnect・AI要約を備え、初心者でも安心して使えます。',
    }
  )
})
