import { createRoute } from 'honox/factory'

import { withBasePath } from '../utils/path'

export default createRoute((c) => {
  return c.render(
    <section class='surface'>
      <div class='pill'>Clear Wallet 利用規約</div>
      <h1>Clear Walletのご利用にあたって</h1>
      <p>
        本規約は、Clear Wallet（以下「本サービス」）の提供条件および本サービス運営者（以下「運営」）と利用者の権利義務関係を定めるものです。
        JPYC/USDC によるガス代支払い機能や AI 要約など、本サービス特有の機能をご利用いただく前に必ずお読みください。
      </p>

      <h2>第1条（適用）</h2>
      <p>
        本規約は、本サービスの利用に関する運営と利用者との間の一切の関係に適用されます。利用者は本規約に同意した上で本サービスを利用するものとします。
      </p>

      <h2>第2条（セルフカストディと自己責任）</h2>
      <ul>
        <li>本サービスはセルフカストディ型であり、秘密鍵・復元フレーズは利用者が管理します。</li>
        <li>秘密鍵の紛失・漏洩・第三者による不正利用について、運営は責任を負いません。</li>
        <li>ウォレット操作やトランザクション承認の最終判断は利用者自身が行うものとします。</li>
      </ul>

      <h2>第3条（機能の利用）</h2>
      <ul>
        <li>送金、NFT 表示、WalletConnect、トランザクション AI 要約、ガス代の JPYC/USDC 支払いを提供します。</li>
        <li>AI 要約は補助情報であり、正確性を保証するものではありません。必ず原文を確認してください。</li>
        <li>ガス代の換算レートはネットワーク状況により変動し、手数料やスプレッドが発生する場合があります。</li>
      </ul>

      <h2>第4条（禁止事項）</h2>
      <ul>
        <li>法令や規制に違反する行為、公序良俗に反する行為。</li>
        <li>他者になりすます行為、システムへの不正アクセスやリバースエンジニアリング。</li>
        <li>マネーロンダリング、テロ資金供与など不正目的での利用。</li>
      </ul>

      <h2>第5条（免責）</h2>
      <ul>
        <li>ブロックチェーンの仕様変更、ネットワーク混雑、外部サービスの停止により生じる損害について運営は責任を負いません。</li>
        <li>利用者端末の故障、セキュリティ設定不足、悪意あるソフトウェアに起因する損害についても同様とします。</li>
        <li>運営は法令で求められる場合を除き、利用者間のトラブルに関与しません。</li>
      </ul>

      <h2>第6条（サービスの変更・停止）</h2>
      <p>
        運営は、ネットワーク状況や法規制の変更、システムメンテナンス等により、本サービスの全部または一部を変更・中断・終了することがあります。
        重要な変更がある場合は、アプリ内表示や公式サイト等で事前に告知します。
      </p>

      <h2>第7条（準拠法・裁判管轄）</h2>
      <p>
        本規約は日本法に準拠し、日本の裁判所を第一審の専属的合意管轄裁判所とします。
      </p>

      <hr />

      <div class='pill'>Terms of Service /en</div>
      <h1>Using Clear Wallet — Self-Custody Wallet</h1>
      <p>
        These Terms set forth the conditions for using Clear Wallet ("the Service") and define the rights and obligations
        between users and the operator ("we"). Please review them before using features such as AI summaries and gas fee
        payments via JPYC/USDC.
      </p>

      <h2>Article 1 (Scope)</h2>
      <p>
        These Terms apply to all relationships between users and us regarding the Service. By using the Service, users are
        deemed to have agreed to these Terms.
      </p>

      <h2>Article 2 (Self-Custody and Responsibility)</h2>
      <ul>
        <li>The Service is self-custodial; users manage their own private keys and recovery phrases.</li>
        <li>We are not liable for loss, leakage, or misuse of private keys.</li>
        <li>Users make the final decisions when operating the wallet or approving transactions.</li>
      </ul>

      <h2>Article 3 (Using the Features)</h2>
      <ul>
        <li>We provide transfers, NFT display, WalletConnect, AI summaries of transactions, and gas payments in JPYC/USDC.</li>
        <li>AI summaries are assistive only and accuracy is not guaranteed; always review the original details.</li>
        <li>Gas conversion rates vary with network conditions and may include fees or spreads.</li>
      </ul>

      <h2>Article 4 (Prohibited Actions)</h2>
      <ul>
        <li>Violations of laws or regulations, or acts against public order and morals.</li>
        <li>Impersonation, unauthorized system access, or reverse engineering.</li>
        <li>Use for illicit purposes such as money laundering or terrorist financing.</li>
      </ul>

      <h2>Article 5 (Disclaimers)</h2>
      <ul>
        <li>
          We are not responsible for damages arising from blockchain specification changes, network congestion, or outages of
          external services.
        </li>
        <li>The same applies to damages caused by device failures, insufficient security settings, or malicious software.</li>
        <li>Except where required by law, we do not intervene in disputes between users.</li>
      </ul>

      <h2>Article 6 (Changes or Suspension)</h2>
      <p>
        We may modify, suspend, or terminate all or part of the Service due to network conditions, legal changes, or
        maintenance. Important changes will be announced in advance in the app or on the official site.
      </p>

      <h2>Article 7 (Governing Law and Jurisdiction)</h2>
      <p>
        These Terms are governed by the laws of Japan, and Japanese courts shall have exclusive jurisdiction as the court of
        first instance.
      </p>
    </section>,
    {
      title: 'Clear Wallet 利用規約',
      description: 'JPYCでガス代を支払えるセルフカストディウォレットの利用条件。',
      canonical: c.req.path,
      keywords: ['Clear Wallet', '利用規約', 'Polygon', 'JPYC', 'USDC', 'セルフカストディ'],
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Clear Wallet 利用規約',
        description: 'JPYCでガス代を支払えるセルフカストディウォレットの利用条件。',
        url: withBasePath(c.req.path),
      },
    }
  )
})
