export type WaterGuide = { slug: string; title: string; description: string; answer: string; conclusion: string; sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]; relatedLinks: { href: string; label: string; note: string }[] };

export const waterGuides: WaterGuide[] = [
  {
    slug: "filter-replacement",
    title: "ペット給水器のフィルター交換頻度｜型番と公式目安の確認方法",
    description: "ペット給水器のフィルター交換頻度を、適合型番、メーカー公式目安、清掃、確認状態に分けて解説します。",
    answer: "交換頻度に全商品共通の正解はありません。給水器本体と適合フィルターの型番を合わせ、メーカーの交換目安を優先します。",
    conclusion: "現在の掲載データで期間を確認できるのはPETKIT P4108のGlobal公式目安4週間です。ほかの商品へ同じ期間を当てはめず、未確認情報は未確認のまま扱います。",
    sections: [
      { heading: "フィルター交換頻度が一律ではない理由", paragraphs: ["フィルターの構造、使用する水、頭数、周囲の汚れによって状態は変わります。一般的な日数を全商品へ当てはめると、メーカーの案内と食い違う可能性があります。"] },
      { heading: "最初に適合型番を確認する", paragraphs: ["本体の商品名が似ていても、フィルター形状や型番が異なる場合があります。商品ページ・取扱説明書・交換部品一覧で、本体型番と純正フィルター型番の組み合わせを確認します。"], bullets: ["本体の型番", "純正フィルターの型番・形状", "交換目安の掲載元と確認日", "日本向けとGlobal向け情報の違い"] },
      { heading: "掲載商品の確認状況", paragraphs: ["P4108はP4161フィルターとGlobal公式目安4週間を確認していますが、日本向け説明書の交換期間は未確認です。ELECOMの3商品などは適合フィルター型番を確認済みでも、交換期間は未確認です。ハロー950mLは適合形状自体を確認中です。"] },
      { heading: "交換時に本体清掃も確認する", paragraphs: ["フィルターを交換しても、タンクやポンプの汚れが自動で除かれるわけではありません。メーカーが示す洗浄可能部品とポンプの手入れ方法を確認し、交換と清掃を別の作業として管理します。"] },
    ],
    relatedLinks: [
      { href: "/water-fountains/guide", label: "給水器の総合的な選び方", note: "容量・電源・消耗品を確認" },
      { href: "/water-fountains", label: "給水器9商品を比較", note: "フィルター型番と確認状態を見る" },
      { href: "/water-fountains/petkit-eversweet-3-pro-p4108", label: "PETKIT P4108", note: "確認済みフィルター情報を見る" },
      { href: "/water-fountains/compare", label: "比較リスト", note: "選んだ商品の仕様を比較" },
    ],
  },
  {
    slug: "cordless-vs-wireless-pump",
    title: "完全コードレス給水器とワイヤレスポンプの違い｜電源方式の見分け方",
    description: "完全コードレス、ワイヤレスポンプ、有線給電の違いと、ペット給水器を設置する前の確認ポイントを解説します。",
    answer: "完全コードレスは本体をバッテリーで運転できる方式、ワイヤレスポンプはタンク内のポンプ配線を減らす構造で、本体は有線給電の場合があります。",
    conclusion: "「ワイヤレス」という表記だけでコードレス運転と判断しません。本体の電源方式とポンプの接続方式を別々に確認します。",
    sections: [
      { heading: "完全コードレスとは", paragraphs: ["バッテリーを内蔵し、電源ケーブルを常時つながずに運転できる構成です。掲載商品ではELECOM PET-WD03WHが該当します。稼働期間はメーカー条件値であり、実使用時間を保証するものではありません。"] },
      { heading: "ワイヤレスポンプとは", paragraphs: ["タンク内部のポンプへ直接ケーブルをつながない構造を指すことがあります。ELECOM PET-WD02WHはワイヤレスポンプ式ですが、給電ベースへUSB Type-Cで常時給電するため、完全コードレスではありません。"] },
      { heading: "3方式を分けて比較する", paragraphs: ["設置自由度と清掃時の扱いを考えるため、次の3つを混同しないようにします。"], bullets: ["有線ポンプ・有線給電", "ワイヤレスポンプ・本体は有線給電", "バッテリー内蔵の完全コードレス"] },
      { heading: "設置場所ごとの確認ポイント", paragraphs: ["コンセントとの距離、水がケーブルへかかりにくい配置、充電の頻度、電池切れや停電時の残水を確認します。ワイヤレスポンプを「電源不要」と読み替えず、取扱説明書の給電方法を優先してください。"] },
    ],
    relatedLinks: [
      { href: "/water-fountains/cordless", label: "完全コードレス条件ページ", note: "確認済み商品の判定基準を見る" },
      { href: "/water-fountains/guide", label: "給水器の総合的な選び方", note: "電源以外の確認項目を見る" },
      { href: "/water-fountains/elecom-pet-wd03wh", label: "ELECOM PET-WD03WH", note: "バッテリー内蔵仕様を確認" },
      { href: "/water-fountains/elecom-pet-wd02wh", label: "ELECOM PET-WD02WH", note: "ワイヤレスポンプと有線給電を確認" },
    ],
  },
  {
    slug: "pump-cleaning",
    title: "ペット給水器のポンプ掃除方法｜分解前に確認するポイント",
    description: "ペット給水器のポンプを掃除する前に、電源、分解可能範囲、洗剤・食洗機可否、組み戻しを確認する手順を解説します。",
    answer: "フィルター交換だけではポンプ内部の汚れを確認できません。電源を外し、メーカー説明書で分解可能範囲と洗浄方法を確認して手入れします。",
    conclusion: "全機種共通の分解手順を断定せず、型番ごとの取扱説明書を優先します。掲載情報は洗浄可能部品を示すもので、実機の「洗いやすさ」を評価したものではありません。",
    sections: [
      { heading: "フィルター交換だけでは不十分な理由", paragraphs: ["フィルター、タンク、飲み口、ポンプは別の部品です。水が循環する経路に汚れが残る可能性があるため、メーカーが指定する範囲で各部品を確認します。"] },
      { heading: "掃除前に確認すること", paragraphs: ["作業を始める前に取扱説明書を開きます。"], bullets: ["電源プラグや給電ベースから外す", "取り外し・分解できる部品を確認する", "使用できる洗剤とすすぎ方を確認する", "食洗機対応の部品だけを区別する"] },
      { heading: "ポンプ清掃の基本的な確認順序", paragraphs: ["メーカー手順に沿ってカバーやインペラーなど分解可能な部品だけを外し、指定された方法で汚れを落とします。機種ごとに構造が異なるため、工具やブラシ、洗剤を独自に指定しません。"] },
      { heading: "組み戻した後の確認", paragraphs: ["部品の向き、フィルターの装着、水位、ケーブルや接点の水分を確認してから運転します。異音や流量低下が続く場合も原因を汚れと断定せず、説明書やメーカー窓口を確認してください。"] },
    ],
    relatedLinks: [
      { href: "/water-fountains/guide", label: "給水器の総合的な選び方", note: "お手入れ項目を確認" },
      { href: "/water-fountains", label: "給水器9商品を比較", note: "洗浄可能部品の確認状態を見る" },
      { href: "/water-fountains/gex-purecrystal-well-25-cat", label: "GEX ウェル2.5L", note: "確認済みの洗浄部品を見る" },
      { href: "/water-fountains/compare", label: "比較リスト", note: "選んだ商品の仕様を比較" },
    ],
  },
];

export const waterGuideBySlug = (slug: string) => waterGuides.find((guide) => guide.slug === slug);
