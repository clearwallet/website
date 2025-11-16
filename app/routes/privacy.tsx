import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <section class='surface'>
      <div class='pill'>プライバシーポリシー</div>
      <h1>Clear Wallet における個人情報とデータの取り扱い</h1>
      <p>
        本ポリシーは、Clear Wallet（以下「本サービス」）を提供する本サービス運営者（以下「運営」）が取り扱う情報の種類、
        利用目的、第三者提供、保管・安全管理体制について定めます。本サービスはセルフカストディ型ウォレットであり、秘密鍵や
        トランザクション署名は端末上で完結します。
      </p>

      <h2>1. 取得する情報</h2>
      <ul>
        <li>ネットワーク接続のために必要な接続ログやエラーログ。</li>
        <li>サポート問い合わせ時に利用者が任意で提供するメールアドレスや内容。</li>
        <li>AI 要約機能において、トランザクションデータの一部を要約処理のために使用する場合があります。</li>
        <li>
          サービス改善のためのアクセス解析データ（Cookie や類似技術を用いた利用状況、デバイス情報など）。Google アナリティクス
          等の第三者計測ツールを活用します。
        </li>
      </ul>

      <h2>2. 取得しない情報</h2>
      <ul>
        <li>ウォレット生成時の秘密鍵・復元フレーズや署名データ。端末内で完結し、運営サーバーへ送信・保管しません。</li>
      </ul>

      <h2>3. 利用目的</h2>
      <ul>
        <li>ウォレット機能の提供、ネットワークへの接続、ガス代換算の実行。</li>
        <li>AI 要約の生成と品質改善。</li>
        <li>障害対応・不正利用の調査、安全なサービス運営のための監視。</li>
        <li>問い合わせ対応および重要なお知らせの通知。</li>
        <li>サービス向上や利用体験改善のためのアクセス解析および統計的なインサイトの取得。</li>
      </ul>

      <h2>4. 第三者提供・委託</h2>
      <p>
        法令に基づく場合を除き、利用者の同意なく個人情報を第三者に提供しません。分析や通知配信等を委託する場合や Google
        アナリティクス等の計測事業者を利用する場合は、機密保持契約や適切な監督のもとで実施します。
      </p>

      <h2>5. データの保管と安全管理</h2>
      <ul>
        <li>秘密鍵や復元フレーズは端末上にのみ保存され、サーバーへ送信されません。</li>
        <li>通信には暗号化を用い、アクセス権限を最小限に制御します。</li>
        <li>個人を特定できない形式でログや問い合わせ情報を管理し、必要に応じて集計・匿名化を行います。</li>
      </ul>

      <h2>6. ポリシーの変更</h2>
      <p>
        サービス機能や法令の変更に応じて本ポリシーを改訂する場合があります。重要な変更はアプリ内や公式サイトで告知します。
      </p>

      <h2>7. お問い合わせ</h2>
      <p class='muted'>
        本ポリシーや個人情報の取扱いに関するお問い合わせは、サポート窓口までご連絡ください。
      </p>

      <hr />

      <div class='pill'>Privacy Policy /en</div>
      <h1>Handling of Data in Clear Wallet</h1>
      <p>
        This policy describes how the Clear Wallet service ("the Service") and its operator ("we") handle data, including the types of information
        collected, purposes of use, sharing, and safeguards. Clear Wallet is a self-custody wallet; private keys and transaction signatures stay on the
        user's device.
      </p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li>Connection and error logs required for network access.</li>
        <li>Contact details and message contents voluntarily provided when you reach out for support.</li>
        <li>Portions of transaction data used to generate AI summaries.</li>
        <li>
          Analytics data for service improvement (usage patterns via cookies or similar technologies, device information, etc.), including measurements by
          third-party tools such as Google Analytics.
        </li>
      </ul>

      <h2>2. Data We Do Not Collect</h2>
      <ul>
        <li>Private keys, recovery phrases, and signing data. These remain on your device and are neither transmitted to nor stored by us.</li>
      </ul>

      <h2>3. Purposes of Use</h2>
      <ul>
        <li>Providing wallet functionality, network connectivity, and gas conversion.</li>
        <li>Generating and improving AI summaries.</li>
        <li>Monitoring for reliability, troubleshooting issues, and investigating misuse.</li>
        <li>Responding to inquiries and delivering important notices.</li>
        <li>Analyzing service usage and improving user experience through aggregated insights.</li>
      </ul>

      <h2>4. Third-Party Sharing and Contractors</h2>
      <p>
        We do not share personal data with third parties without consent, except as required by law. When using contractors or measurement partners like
        Google Analytics, we ensure appropriate confidentiality and oversight.
      </p>

      <h2>5. Storage and Security</h2>
      <ul>
        <li>Private keys and recovery phrases are retained only on the user's device.</li>
        <li>Communications are encrypted and access permissions are minimized.</li>
        <li>Logs and inquiry data are managed in non-identifiable formats and aggregated or anonymized when appropriate.</li>
      </ul>

      <h2>6. Changes</h2>
      <p>We may update this policy to reflect service changes or legal requirements. Significant updates will be announced in the app or on the website.</p>

      <h2>7. Contact</h2>
      <p class='muted'>Please contact our support desk for any questions about this policy or data handling.</p>
    </section>,
    {
      title: 'Clear Wallet プライバシーポリシー',
      description: 'JPYCでガス代を支払えるPolygon向けセルフカストディウォレットにおけるデータの扱いと安全管理方針。',
    }
  )
})
