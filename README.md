# PawChoice Water

循環式ペット給水器9商品を、確認済み・未確認・一次情報相違に分けて比較する静的サイトです。

## Development

```bash
npm install
npm run test
```

Next.js 16 App Router / React 19 / TypeScript / Tailwind CSS 4を使用し、`npm run build`で`out/`へstatic exportします。基準URLは `https://water.pawchoice.jp` です。

## Data safety

- `VerifiedField<T>`の`verified`はfield-level sourceを必須にします。
- `unknown`と確認済み`false`、`conflict`を別状態で扱います。
- P4108の公式仕様相違は代表値へ統合しません。
- 確認済み7商品だけにASINを設定し、affiliate URLは保存しません。`AMAZON_PARTNER_TAG`が未設定または不正な場合、commerce adapterは購入URLを生成しません。
- ASINと商品掲載情報の一致確認、販売者確認を別状態で管理します。販売者は固定せず、リンク先での確認を案内します。
- Partner Tagはrepositoryや`.env`へ保存せず、Cloudflare Pagesのbuild環境変数として設定します。
- 参考価格は確認日付きの観測値であり、現在価格や在庫を示しません。

実際のPartner Tag値、Cloudflare Pages設定、DNS、公開操作はrepositoryの対象外です。
