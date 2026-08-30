<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## PawChoice context refresh policy

- 軽微な作業のたびに `PROJECT_CONTEXT.md` を再読しない。
- infrastructure / deployment、repository・domain・site identity、複数PawChoiceサイト、曖昧な前提、久しぶりの作業、記憶と現行実装の不一致が関わる重要作業では、開始前に再読する。
- 小さなUI変更、typo、局所的なバグ修正では、作業対象ファイルだけを読む。
- 通常は `PROJECT_CONTEXT.md` と対象ファイルに限定し、README、git log、Cloudflare設定などは必要な場合だけ確認する。
- repo全体を毎回走査せず、既知の事実を重複調査しない。
- 判断は現行コード・設定、`PROJECT_CONTEXT.md`、README / `AGENTS.md`、最近のgit履歴、AIの会話履歴・記憶の順で優先する。
- `PROJECT_CONTEXT.md` はrepo・domain・deployment・Cloudflare構成、新サイト、主要機能・共通基盤、主要優先タスクが変わる場合だけ更新し、軽微な修正では更新しない。詳細を重複させず、50〜80行程度を目安に保つ。
