export type TransportType = "walk" | "machinori" | "bus" | "train" | "none";

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  duration?: string;
  transport: TransportType;
  note?: string;
  warning?: string;
  link?: string;
  address?: string;
  phone?: string;
  isHighlight?: boolean;
  isMandatory?: boolean;
}

export interface DaySchedule {
  day: number;
  date: string;
  dayOfWeek: string;
  items: ScheduleItem[];
}

export const schedule: DaySchedule[] = [
  {
    day: 1,
    date: "2月23日（月・祝）",
    dayOfWeek: "天皇誕生日",
    items: [
      {
        id: "d1-01",
        time: "11:07",
        title: "金沢駅 着",
        subtitle: "鼓門・もてなしドームで記念撮影",
        duration: "10分",
        transport: "none",
        note: "旅のはじまり。鼓門は金沢の象徴 🎋",
      },
      {
        id: "d1-02",
        time: "11:20",
        title: "SOKI KANAZAWA",
        subtitle: "チェックイン・荷物預け",
        duration: "20分",
        transport: "walk",
        note: "荷物を預けて身軽に観光スタート",
        link: "https://www.uds-hotels.com/soki/kanazawa/",
      },
      {
        id: "d1-03",
        time: "11:45",
        title: "もりもり寿し 整理券取得",
        subtitle: "金沢フォーラス 6F",
        duration: "5分",
        transport: "machinori",
        warning:
          "祝日は1〜2時間待ちの覚悟を。整理券後はスマホで呼び出し確認できる",
        link: "https://tabelog.com/ishikawa/A1701/A170101/17000420/",
        address: "金沢市堀川新町3-1 金沢フォーラス6F",
        note: "のどぐろ三点盛り・北陸五点盛りが人気 🍣",
      },
      {
        id: "d1-04",
        time: "11:45〜",
        title: "近江町市場 散策",
        subtitle: "整理券の待ち時間を有効活用",
        duration: "30〜60分",
        transport: "walk",
        note: "金沢の台所。海鮮の食べ歩きも楽しい 🦐",
      },
      {
        id: "d1-05",
        time: "12:30頃",
        title: "もりもり寿し ランチ",
        subtitle: "混雑時は「と成屋」へ変更 →",
        duration: "45〜60分",
        transport: "none",
        note: "のどぐろ・ガスエビ・甘えびがおすすめ",
        isHighlight: true,
      },
      {
        id: "d1-06",
        time: "14:00",
        title: "尾山神社",
        subtitle: "ステンドグラスの神門が有名",
        duration: "30分",
        transport: "machinori",
        link: "http://www.oyama-jinja.or.jp/",
        note: "地元民お気に入りの穴場神社 ⛩️",
      },
      {
        id: "d1-07",
        time: "14:45",
        title: "玉泉院丸庭園 → 金沢城公園",
        subtitle: "橋を渡ってすぐ歩いていける",
        duration: "45分",
        transport: "walk",
        link: "https://www.pref.ishikawa.jp/siro-niwa/kanazawajou/gyokusen-in/",
        note: "入場無料。江戸時代の庭園美を堪能 🏯",
      },
      {
        id: "d1-08",
        time: "15:45",
        title: "21世紀美術館 展覧会ゾーン",
        subtitle: "スイミングプール・常設展示",
        duration: "60〜90分",
        transport: "walk",
        link: "https://www.kanazawa21.jp/data_list.php?g=120&d=1",
        warning:
          "2日目（火）は振替休館のため、必ず1日目に！当日9:00から予約開始",
        note: "「スイミングプール」は当日9:00から予約開始",
        isHighlight: true,
        isMandatory: true,
      },
      {
        id: "d1-09",
        time: "17:00",
        title: "川端鮮魚店 本店（夕食）",
        subtitle: "念願の鰤しゃぶ🐟",
        duration: "90〜120分",
        transport: "machinori",
        link: "https://kawabatasengyo.owst.jp/",
        address: "木倉町2-4 西野ビル1F",
        phone: "076-223-0128",
        warning: "この日（月祝）の営業を電話確認済み（17時〜）",
        isHighlight: true,
        isMandatory: true,
      },
      {
        id: "d1-10",
        time: "19:00",
        title: "21世紀美術館 夜の屋外展示",
        subtitle: "交流ゾーン＋ライトアップ",
        duration: "30分",
        transport: "walk",
        note: "夜のライトアップが幻想的 ✨ 交流ゾーンは無料",
      },
      {
        id: "d1-11",
        time: "19:30",
        title: "SOKI KANAZAWA へ",
        subtitle: "ホテルに戻ってゆっくり",
        duration: "—",
        transport: "machinori",
      },
    ],
  },
  {
    day: 2,
    date: "2月24日（火・平日）",
    dayOfWeek: "⚠️ 21世紀美術館(展覧会)・鈴木大拙館・ゴーシュが休み",
    items: [
      {
        id: "d2-01",
        time: "08:30",
        title: "チェックアウト",
        subtitle: "SOKIセルフクロークに荷物を預ける",
        duration: "15分",
        transport: "none",
      },
      {
        id: "d2-02",
        time: "09:00",
        title: "兼六園 朝散歩",
        subtitle: "2月下旬は梅の見頃の可能性あり🌸",
        duration: "60〜75分",
        transport: "machinori",
        note: "大人320円。日本三名園のひとつ",
        isHighlight: true,
      },
      {
        id: "d2-03",
        time: "10:15",
        title: "21世紀美術館 交流ゾーン",
        subtitle: "屋外作品鑑賞（無料）",
        duration: "30分",
        transport: "walk",
        note: "展覧会ゾーンは本日休館。無料の屋外展示を楽しむ",
      },
      {
        id: "d2-04",
        time: "10:45",
        title: "長町武家屋敷跡 散策",
        subtitle: "土塀が続く情緒ある通り",
        duration: "45分",
        transport: "walk",
        note: "野村家庭園は一見の価値あり 🏡",
      },
      {
        id: "d2-05",
        time: "11:30",
        title: "ひがし茶屋街へ移動",
        duration: "15分",
        transport: "machinori",
      },
      {
        id: "d2-06",
        time: "12:00",
        title: "澤ノ屋 ランチ",
        subtitle: "のどぐろ丼（数量限定・要予約）",
        duration: "60〜75分",
        transport: "none",
        link: "https://tabelog.com/ishikawa/A1701/A170101/17008213/",
        address: "東山3-2-21（ひがし茶屋街から徒歩1分）",
        phone: "076-255-0009",
        warning: "⚠️ 現金のみ。のどぐろ丼は数量限定のため事前電話予約必須！",
        note: "営業: 11:00〜16:00 / 予約電話: 10:30〜11:30 または 14:30〜16:00",
        isHighlight: true,
        isMandatory: true,
      },
      {
        id: "d2-07",
        time: "13:15",
        title: "ひがし茶屋街・主計町 散策",
        subtitle: "金沢を代表する茶屋街",
        duration: "45分",
        transport: "walk",
        note: "江戸時代のお茶屋文化が残る町並み 🏮",
      },
      {
        id: "d2-08",
        time: "14:00",
        title: "カフェ休憩",
        subtitle: "久連波（くれは）or 素心（そしん）→",
        duration: "45分",
        transport: "none",
        note: "久連波: 吉はしの上生菓子×抹茶で金沢らしさ抜群 ☕",
        isHighlight: true,
      },
      {
        id: "d2-09",
        time: "15:00",
        title: "金沢駅へ移動",
        duration: "15分",
        transport: "machinori",
      },
      {
        id: "d2-10",
        time: "15:15",
        title: "SOKIで荷物回収",
        subtitle: "近江町市場経由で",
        duration: "15分",
        transport: "walk",
      },
      {
        id: "d2-11",
        time: "15:30",
        title: "お土産購入",
        subtitle: "金沢百番街あんと",
        duration: "30分",
        transport: "none",
        note: "金沢駅直結。治部煮・金箔スイーツ・ル ミュゼ ドゥ アッシュなど",
      },
      {
        id: "d2-12",
        time: "16:00頃",
        title: "早めの夕飯",
        subtitle: "おでん三幸 or あんと内グルメ",
        duration: "60〜75分",
        transport: "none",
        note: "帰路前に金沢グルメを締めくくり。詳細な候補はメニューの代替候補タブへ 🍢",
        address: "金沢駅周辺〜片町エリア",
        isHighlight: true,
      },
      {
        id: "d2-12a",
        time: "17:00台〜",
        title: "新幹線で帰路へ",
        subtitle: "最高の思い出とともに🚄",
        duration: "—",
        transport: "train",
        isHighlight: true,
      },
    ],
  },
];
