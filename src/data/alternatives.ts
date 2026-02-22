export interface Alternative {
  id: string;
  category: "lunch-d1" | "lunch-d1-alt" | "lunch-d2" | "cafe-d2" | "dinner-d2";
  name: string;
  address?: string;
  phone?: string;
  hours?: string;
  closed?: string;
  budget?: string;
  note: string;
  link?: string;
  isCashOnly?: boolean;
  isReservationRequired?: boolean;
}

export const alternatives: Alternative[] = [
  // 1日目ランチ メイン
  {
    id: "a1",
    category: "lunch-d1",
    name: "もりもり寿し 金沢駅前店",
    address: "金沢市堀川新町3-1 金沢フォーラス6F",
    hours: "11:00〜21:00",
    budget: "2人で5,000〜7,000円",
    note: "祝日は1〜2時間待ちの覚悟で。整理券後はスマホで呼び出し可能。 「どちらでも」を選ぶと早く呼ばれやすい",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17000420/",
  },
  // 1日目ランチ 代替
  {
    id: "a2",
    category: "lunch-d1-alt",
    name: "能加万菜 と成屋",
    address: "近江町市場内・下堤町19-7",
    phone: "076-254-6336",
    hours: "7:00〜15:00（L.O. 14:30）",
    closed: "無休",
    budget: "1人3,300円",
    note: "のど黒釜飯3,300円。注文後に米から炊くため約20分 かかる。3段階の食べ方（そのまま→薬味→出汁茶漬け）。もりもり寿しと近接で動線◎",
    link: "https://noukabanzai.jp/tonariya/",
  },
  {
    id: "a3",
    category: "lunch-d1-alt",
    name: "廻る富山湾 すし玉 金沢駅店",
    address: "百番街あんと西2F",
    budget: "1人2,000〜3,000円",
    note: "待ち時間が短め。金沢駅直結で便利",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17001242/",
  },
  {
    id: "a4",
    category: "lunch-d1-alt",
    name: "金沢まいもん寿司 金沢駅店",
    address: "百番街あんと内",
    budget: "1人2,500〜4,000円",
    note: "回転寿司御三家のひとつ",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17005515/",
  },
  {
    id: "a5",
    category: "lunch-d1-alt",
    name: "すし食いねぇ！金沢駅前店",
    address: "クロスゲート金沢2F",
    budget: "1人2,500〜4,000円",
    note: "極みランチあり",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17014774/",
  },
  // 2日目ランチ
  {
    id: "a6",
    category: "lunch-d2",
    name: "澤ノ屋",
    address: "東山3-2-21（ひがし茶屋街から徒歩1分）",
    phone: "076-255-0009",
    hours: "11:00〜16:00（L.O.料理15:30）売り切れ次第終了",
    closed: "水曜 → 火曜OK",
    budget: "1人2,000〜2,999円",
    note: "のどぐろ丼は数量限定 旅行前に電話予約必須！予約受付: 10:30〜11:30 / 14:30〜16:00",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17008213/",
    isCashOnly: true,
    isReservationRequired: true,
  },
  // 2日目カフェ
  {
    id: "a7",
    category: "cafe-d2",
    name: "久連波（くれは）",
    address: "東山1-24-3",
    hours: "10:00〜18:00",
    closed: "水曜 → 火曜OK",
    budget: "1人1,000〜1,500円",
    note: "2階座敷。金沢の名店「吉はし」の上生菓子が食べられる（一般には購入不可）。抹茶×上生菓子で金沢らしさ◎ 彼女との旅行に最適！",
  },
  {
    id: "a8",
    category: "cafe-d2",
    name: "素心（そしん）",
    address: "東山1-24-1",
    hours: "10:00〜（変動あり）",
    closed: "水曜 → 火曜OK",
    budget: "1人800〜1,200円",
    note: "ハンドドリップコーヒー専門。2階から茶屋街の景色が見える開放的な空間。コーヒー好きならこっち☕",
  },
  // 2日目夕飯候補
  {
    id: "a9",
    category: "dinner-d2",
    name: "おでん居酒屋 三幸",
    address: "片町1-10-3",
    phone: "076-222-6117",
    hours: "17:00〜（要確認）",
    closed: "不定休",
    budget: "1人2,000〜3,500円",
    note: "金沢おでんの名店。地元民にも愛される老舗。片町エリアなので17時前後の早い時間が狙い目",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17002725/",
  },
  {
    id: "a10",
    category: "dinner-d2",
    name: "金沢かつぞう 金沢駅あんと店",
    address: "木ノ新保町1-1 金沢百番街あんと",
    phone: "076-216-5630",
    hours: "11:00〜21:00（LO 20:30）",
    budget: "1人1,500〜2,500円",
    note: "金沢駅直結で新幹線前にアクセス◎。金沢の地魚を使ったこだわりのとんかつ",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17013227/",
  },
  {
    id: "a11",
    category: "dinner-d2",
    name: "魚菜屋（ぎょさいや）",
    address: "木ノ新保町1-1 金沢百番街あんと",
    phone: "076-233-2217",
    hours: "11:00〜21:00（LO 20:00）",
    budget: "1人2,000〜3,500円",
    note: "駅直結あんと内。地元食材の海鮮・加賀野菜を使った定食。新幹線前にさっと食べるのに便利",
    link: "https://tabelog.com/ishikawa/A1701/A170101/17005290/",
  },
];
