# PawChoice Water Project Context

このファイルは重要作業でサイト固有の前提を再確認するための短い索引である。
詳細仕様と現在値は実コード、運用全体は `pawchoice-affiliate-agents` を正本とする。

## AI Context Refresh Rule

通常の小さな作業では、毎回このファイルを再読する必要はない。

次の場合は作業前に再読する。

- 前提情報に自信がない
- repository、domain、Cloudflare、deploymentに関わる
- 本番設定を変更する可能性がある
- 複数のPawChoiceサイトをまたぐ
- 前回の作業から時間が空いた
- 会話履歴と現在の実装に矛盾を感じる
- 大規模な機能追加やリファクタリングを行う
- 新サイトや共通基盤を追加する

小さなUI変更、typo、局所的なバグ修正では再読不要である。
重要作業ではAIの記憶だけを正解とせず、実repo状態を確認する。

## Site identity

- Site: PawChoice Water（循環式ペット給水器比較）
- GitHub: `Amazon-howaito/pawchoice-water`
- Canonical domain: `https://water.pawchoice.jp`
- Deploy target: Cloudflare Pages（project名は未確認）
- Framework: Next.js App Router / React / TypeScript / Tailwind CSS
- Build mode: static export with trailing slash
- Shared service: Cloudflare Web Analytics verified in production and daily analytics

domain、deploy、Cloudflareの現在状態は変更され得る。
重要作業では実コード、Git、Cloudflareの確認可能な状態を優先する。

## Context loading budget

- 毎回repo全体を走査しない。
- 通常はこのファイルと作業対象ファイルだけを確認する。
- README、git log、Cloudflare設定、外部情報は必要な場合だけ確認する。
- 既知の事実を毎回再調査しない。不明は `未確認` とする。
- 詳細仕様や履歴を重複記載せず、50〜80行程度を目安に保つ。

## Source priority

1. 現在の実コード・設定
2. `PROJECT_CONTEXT.md`
3. README / `AGENTS.md`
4. 最近のgit履歴
5. AIの会話履歴・記憶

矛盾があれば実環境を優先する。

## Safety boundary

- 商品仕様、価格、在庫、レビュー数、ASINを推測しない。
- verified / unknown / conflictの状態と商品評価ロジックを維持する。
- affiliateはASINとPartner Tagが揃わなければfail-closedとする。
- AnalyticsのSite Token値やPartner Tag値をこのファイルへ複製しない。
- secrets、認証情報、個人情報、`.env`値を文書・出力・commitへ含めない。
- canonical、robots、sitemap、JSON-LD、商品データは対象外の作業で変更しない。
- DNS、Cloudflare、deploy、公開、pushは明示された範囲だけ扱う。
- Waterの状態をCameraまたはFeederへ転記しない。

## Update policy

repository、domain、deployment、Cloudflare構成、新サイト、
大きな機能、Analytics等の共通基盤、主要優先タスクが変わる場合だけ更新する。
軽微なUI、typo、局所的なbug修正では更新しない。
古い記述は置換し、追記の積み重ねで肥大化させない。
