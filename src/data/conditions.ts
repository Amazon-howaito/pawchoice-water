export type Condition = { slug: string; title: string; summary: string; criterion: string; status: "active" | "preparing"; productSlugs: string[]; notes: string[] };

export const conditions: Condition[] = [
  { slug:"for-cats", title:"猫向け", summary:"公式に猫用または猫・小型犬用と確認できた商品を整理します。", criterion:"targetPetsが確認済みでcatを含む", status:"active", productSlugs:["elecom-pet-wd01wh","elecom-pet-wd02wh","elecom-pet-wd03wh","petkit-eversweet-solo-se-p4103s","petkit-eversweet-3-pro-p4108","gex-purecrystal-ceramo-18","gex-purecrystal-well-25-cat","gex-purecrystal-glassy-r-15-cat","gex-purecrystal-halo-095-cat"], notes:["猫が飲むことを保証する分類ではありません。","飲み口の高さや好みは実機・個体差があります。"] },
  { slug:"for-dogs", title:"犬向け", summary:"公式の対象に犬または小型犬を含む商品だけを掲載します。", criterion:"targetPetsが確認済みでdogを含む", status:"active", productSlugs:["elecom-pet-wd01wh","elecom-pet-wd02wh","elecom-pet-wd03wh","petkit-eversweet-solo-se-p4103s","petkit-eversweet-3-pro-p4108"], notes:["体格や犬種だけで適合を断定しません。","PETKITはGlobal公式で小型犬対象です。"] },
  { slug:"multi-pet", title:"多頭飼い", summary:"多頭飼いへの適合を容量だけで保証できないため、選定基準と確認状況を示します。", criterion:"メーカーの多頭訴求、対象、容量、補充頻度の根拠が揃うこと", status:"preparing", productSlugs:[], notes:["現在、機械判定に十分な一次情報が揃っていません。","複数の水飲み場も選択肢として検討してください。"] },
  { slug:"large-capacity", title:"大容量", summary:"確認済み容量が2.5L以上の商品を抽出します。", criterion:"capacityLitersがverifiedかつ2.5L以上", status:"active", productSlugs:["elecom-pet-wd03wh","gex-purecrystal-well-25-cat"], notes:["容量が何日もつかは頭数・気温・飲水量で変わります。","P4108は容量に一次情報相違があるため判定から除外しています。"] },
  { slug:"quiet", title:"静音仕様", summary:"実測音の比較に必要な条件が揃っていないため、評価準備中です。", criterion:"測定条件付き公式dB値、または公開した統一条件での実測値", status:"preparing", productSlugs:[], notes:["メーカーの『静音』という定性表現だけで順位を付けません。","編集者による実機評価は未実施です。"] },
  { slug:"easy-to-clean", title:"洗いやすさ", summary:"洗浄可能部品は比較できますが、実際の洗いやすさは未評価です。", criterion:"洗浄可能部品・ポンプ分解・食洗機対応と、実機の清掃手数を分離", status:"preparing", productSlugs:[], notes:["部品情報に欠損があるためランキングは作りません。","P4103Sは本体部品と交換ポンプの食洗機情報を分離できず未確認です。"] },
  { slug:"cordless", title:"完全コードレス", summary:"バッテリー内蔵で運転できることを公式確認した商品を掲載します。", criterion:"cordlessがverified true", status:"active", productSlugs:["elecom-pet-wd03wh"], notes:["ワイヤレスポンプは完全コードレスではありません。","充電条件と電池切れ時の備えも確認してください。"] },
  { slug:"stainless", title:"ステンレス", summary:"ステンレスの使用部位を確認できる商品を整理します。", criterion:"materialにステンレス使用部位が一次情報付きで明記", status:"active", productSlugs:["petkit-eversweet-3-pro-p4108"], notes:["一部ステンレスを本体全体の材質とは扱いません。","材質だけで衛生・健康効果を断定しません。"] },
  { slug:"smart", title:"アプリ・飲水記録", summary:"アプリ対応、飲水記録、水位通知を別々に確認します。", criterion:"各機能がverified trueまたは確認済み仕様", status:"active", productSlugs:["petkit-eversweet-3-pro-p4108"], notes:["P4108はBluetoothアプリ対応ですが、Global公式比較表では飲水記録非対応です。","アプリ対応だけで飲水記録ありとは判定しません。"] },
  { slug:"filter-cost", title:"フィルター維持費・コスパ", summary:"適合フィルター、交換目安、価格が揃わないため費用順位は準備中です。", criterion:"純正フィルター型番・交換目安・確認日付き価格がすべて確認済み", status:"preparing", productSlugs:[], notes:["未確認価格を0円にしません。","本体価格だけでコスパ順位を作りません。"] },
];

export const conditionBySlug = (slug: string) => conditions.find((condition) => condition.slug === slug);
