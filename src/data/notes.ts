export interface ClosedInfo {
  name: string;
  closedDay: string;
  day1: { ok: boolean; note: string };
  day2: { ok: boolean; note: string };
  link?: string;
}

export const closedInfoList: ClosedInfo[] = [
  {
    name: "川端鮮魚店 本店",
    closedDay: "月・火・水（定休）",
    day1: { ok: true, note: "電話確認済み 17時〜営業 ✅" },
    day2: { ok: false, note: "休み ❌" },
    link: "https://kawabatasengyo.owst.jp/",
  },
  {
    name: "茶房&BAR ゴーシュ",
    closedDay: "火曜",
    day1: { ok: true, note: "営業 ✅" },
    day2: { ok: false, note: "休み → 久連波/素心へ ❌" },
    link: "https://tabelog.com/ishikawa/A1701/A170101/17000164/",
  },
  {
    name: "21世紀美術館 展覧会ゾーン",
    closedDay: "月曜（祝日の場合は翌平日）",
    day1: { ok: true, note: "祝日のため営業 ✅" },
    day2: { ok: false, note: "振替休館 ❌" },
    link: "https://www.kanazawa21.jp/data_list.php?g=7&d=1",
  },
  {
    name: "21世紀美術館 交流ゾーン",
    closedDay: "年末年始のみ",
    day1: { ok: true, note: "9:00〜22:00 ✅" },
    day2: { ok: true, note: "9:00〜22:00 ✅" },
  },
  {
    name: "鈴木大拙館",
    closedDay: "月曜（祝日の場合は翌平日）",
    day1: { ok: true, note: "祝日のため営業 ✅" },
    day2: { ok: false, note: "振替休館 ❌" },
    link: "https://www.kanazawa-museum.jp/daisetz/",
  },
  {
    name: "兼六園",
    closedDay: "年中無休",
    day1: { ok: true, note: "営業 ✅" },
    day2: { ok: true, note: "営業 ✅" },
  },
  {
    name: "澤ノ屋",
    closedDay: "水曜",
    day1: { ok: true, note: "営業 ✅" },
    day2: { ok: true, note: "2日目ランチ ✅" },
    link: "https://tabelog.com/ishikawa/A1701/A170101/17008213/",
  },
];

export const transportInfo = {
  recommendation: "まちのり（シェアサイクル）＋徒歩がベスト ☀️",
  reason:
    "主要観光地は半径約2km以内に集中。天気は晴れ予報。4回以上バスに乗らないため1日フリー乗車券より安い。",
  cost: "2人 × 165円 × 2〜3回 = 660〜990円程度",
  links: {
    machinori: "https://www.machi-nori.jp/",
    machinoriPrice: "https://www.machi-nori.jp/price/",
    busPass: "https://www.hokutetsu.co.jp/ticket/kanazawa-oneday/",
  },
};
