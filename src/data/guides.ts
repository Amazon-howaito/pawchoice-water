export type WaterGuide = { slug: string; title: string; description: string; answer: string; conclusion: string; sections: { heading: string; paragraphs: string[]; bullets?: string[]; table?: { headers: string[]; rows: string[][] } }[]; relatedLinks: { href: string; label: string; note: string }[] };

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
      { href: "/water-fountains/guides/power-outage", label: "停電時の循環式給水器", note: "電源停止後の残水と備えを確認" },
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
      { href: "/water-fountains/guides/materials", label: "給水器素材の違い", note: "部品ごとの材質と手入れを確認" },
    ],
  },
  {
    slug: "materials",
    title: "ペット給水器のステンレス・陶器・樹脂の違い｜素材の選び方",
    description: "ペット給水器のステンレス、陶器、樹脂を、部品構成、重さ、破損、洗浄方法、確認すべき表示から比較します。",
    answer: "素材名だけで衛生性や洗いやすさを断定せず、水が触れる部品ごとの材質と洗浄方法を確認します。1台の中でステンレスと樹脂など複数素材を組み合わせる商品もあります。",
    conclusion: "好みの素材を決めた後も、タンク・飲み口・ポンプ・フィルタートレイの材質と取り外し範囲を型番ごとに確認します。『ステンレス製』が全パーツを指すとは限りません。",
    sections: [
      {
        heading: "3つの素材を比較する",
        paragraphs: ["一般的な傾向と、商品ごとに確認すべき点を分けます。特定素材に医療・健康効果があるとは扱いません。"],
        table: {
          headers: ["素材", "特徴", "購入前の確認"],
          rows: [
            ["ステンレス", "金属製。ほかの樹脂部品と組み合わせる例あり", "鋼種・使用部位・食洗機可否"],
            ["陶器", "重量があり、落下や衝撃で破損する可能性", "陶器の使用部位・欠け・洗浄方法"],
            ["樹脂", "軽量な構成が多く、部品ごとに素材が異なる", "傷・変色・交換部品・耐熱条件"],
          ],
        },
      },
      { heading: "掲載商品の確認例", paragraphs: ["PETKIT EVERSWEET 3 PROはSUS304ステンレスとABS、GEX セラモ1.8Lはセラミックトップ・タンクと植物由来プラスチック使用部、ELECOM 3商品は本体・トレイがABSであることを公式情報から確認しています。未確認の部品材質は推測しません。"] },
      { heading: "洗いやすさは素材だけで決まらない", paragraphs: ["飲み口が広くても、ポンプや流路を外せるか、電装部を避けて洗えるかで手順は変わります。食洗機対応は対象部品と市場別仕様に相違がないか確認します。"] },
      { heading: "購入前のチェック項目", paragraphs: ["素材名と一緒に次を確認します。"], bullets: ["水が触れる各部品の材質", "取り外し・水洗いできる範囲", "食洗機対応の対象部品", "欠け・傷・変形時の交換方法"] },
    ],
    relatedLinks: [
      { href: "/water-fountains/stainless", label: "ステンレス条件ページ", note: "確認済み素材から候補を見る" },
      { href: "/water-fountains", label: "給水器9商品", note: "材質と洗浄部品の確認状態を比較" },
      { href: "/water-fountains/gex-purecrystal-ceramo-18", label: "GEX セラモ1.8L", note: "セラミック部品の公開仕様を見る" },
      { href: "/water-fountains/guides/pump-cleaning", label: "ポンプ掃除の確認手順", note: "素材以外のお手入れ項目を見る" },
    ],
  },
  {
    slug: "capacity",
    title: "ペット給水器の容量は何L必要？猫・犬・多頭飼いの選び方",
    description: "ペット給水器の容量を、飲水量、頭数、補充頻度、停電時の残水、設置寸法から選ぶ確認手順を解説します。",
    answer: "必要容量は頭数だけでは決まりません。普段の飲水量と補充頻度を把握し、空になる前に交換・清掃できる容量を選びます。大容量でも水の交換が不要になるわけではありません。",
    conclusion: "掲載容量を『何日分』へ一律換算せず、実際の減り方を確認して補充計画を調整します。飲水量の急な変化や健康上の不安は、給水器の容量だけで判断せず獣医師へ相談してください。",
    sections: [
      { heading: "最初に普段の減り方を確認する", paragraphs: ["器へ入れた量と補充量を数日記録し、こぼれや蒸発も含む目安として扱います。メーカー容量はタンクの収容量であり、ペットが常に飲める実効量や日数を保証するものではありません。"] },
      {
        heading: "掲載商品の容量帯",
        paragraphs: ["公式確認済みの容量だけを並べ、相違がある商品は比較値に使いません。"],
        table: {
          headers: ["容量", "掲載例", "確認ポイント"],
          rows: [
            ["0.95〜1.5L", "GEX ハロー、グラッシーR", "補充頻度と設置スペース"],
            ["1.8〜2L", "GEX セラモ、PETKIT SOLO SE、ELECOM WD01・WD02", "水位表示と停止時の残水"],
            ["2.5L", "ELECOM WD03、GEX ウェル", "本体寸法と清掃時の扱い"],
          ],
        },
      },
      { heading: "多頭飼いで確認すること", paragraphs: ["総飲水量が増えるだけでなく、同時に飲める形状、設置場所、複数台へ分ける必要性も検討します。1台を大容量にすることと、飲み場所を増やすことは別の判断です。"] },
      { heading: "容量と一緒に見る4項目", paragraphs: ["タンク容量だけで候補を決めないよう、次も商品詳細で確認します。"], bullets: ["水位窓・水位通知・自動停止", "停電や電池切れ後に飲める残水", "タンクとポンプの洗浄範囲", "本体寸法と持ち運びやすさ"] },
    ],
    relatedLinks: [
      { href: "/water-fountains", label: "給水器9商品", note: "確認済み容量を商品ごとに見る" },
      { href: "/water-fountains/large-capacity", label: "大容量条件ページ", note: "参加条件と容量の確認状態を見る" },
      { href: "/water-fountains/gex-purecrystal-well-25-cat", label: "GEX ウェル2.5L", note: "容量・水位・残水の公開仕様" },
      { href: "https://feeder.pawchoice.jp/guides/multi-pet", label: "多頭飼いの食事管理", note: "給水と給餌を別々に計画する" },
    ],
  },
  {
    slug: "power-outage",
    title: "停電時に循環式ペット給水器はどうなる？残水と備えの確認方法",
    description: "循環式ペット給水器の停電時を、有線・バッテリー、ポンプ停止、飲める残水、予備の水皿、復電後の確認に分けて解説します。",
    answer: "有線式は停電すると循環が止まりますが、上部の皿などに残水を確保する商品もあります。残水量や飲める時間は機種ごとに異なり、停電対策として十分とは限りません。",
    conclusion: "給水器の残水だけに頼らず、停電時も使える別の水皿を用意します。バッテリー式も稼働条件と充電状態を確認し、メーカー条件値を実使用保証として扱いません。",
    sections: [
      {
        heading: "電源方式ごとの違い",
        paragraphs: ["停電時の挙動は、常時給電かバッテリー内蔵か、飲み口に水が残る構造かで変わります。"],
        table: {
          headers: ["方式", "停電時", "備え"],
          rows: [
            ["有線式", "循環ポンプが停止", "残水仕様と別の水皿を確認"],
            ["バッテリー内蔵", "充電状態・運転モードの範囲で継続", "稼働条件と充電忘れを確認"],
            ["ワイヤレスポンプ", "本体が有線なら循環停止", "『ワイヤレス』を停電対応と誤認しない"],
          ],
        },
      },
      { heading: "掲載商品の確認状況", paragraphs: ["ELECOM PET-WD01WHはトレイに約100mLの残水、PET-WD03WHは満充電・タイミングモードで約3か月というメーカー条件値を確認しています。GEX 4商品は循環停止後も上部に少量の残水を一時利用できる公開仕様があります。PET-WD02WHは停電時挙動を未確認です。"] },
      { heading: "停電前に準備すること", paragraphs: ["普段から別の水皿の場所を決め、必要に応じて複数箇所へ置きます。バッテリー式は充電状態、電池劣化、設定モードを確認します。ペットが非常用の皿を使うかも平常時に確認します。"] },
      { heading: "復電後の確認", paragraphs: ["水位、ポンプの空運転、フィルター位置、異音、電源コード周辺の水分を確認してから再開します。動かない原因を停電だけと断定せず、説明書の手順に従います。"] },
    ],
    relatedLinks: [
      { href: "/water-fountains/cordless", label: "完全コードレス条件ページ", note: "バッテリー内蔵商品の確認基準を見る" },
      { href: "/water-fountains/elecom-pet-wd03wh", label: "ELECOM PET-WD03WH", note: "バッテリーのメーカー条件値を確認" },
      { href: "/water-fountains/guides/cordless-vs-wireless-pump", label: "電源方式の違い", note: "コードレスとポンプ構造を分けて確認" },
      { href: "https://feeder.pawchoice.jp/guides/power-outage", label: "自動給餌器の停電対策", note: "食事側の予備電源も確認" },
    ],
  },
];

export const waterGuideBySlug = (slug: string) => waterGuides.find((guide) => guide.slug === slug);
