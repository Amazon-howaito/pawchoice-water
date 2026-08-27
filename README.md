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
- ASIN、affiliate URL、partner tagは未設定です。commerce adapterは購入URLを生成しません。
- 参考価格は確認日付きの観測値であり、現在価格や在庫を示しません。

実機評価、Cloudflare Pages、DNS、公開、affiliate設定は対象外です。
