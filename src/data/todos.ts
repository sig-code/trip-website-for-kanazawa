export interface Todo {
  id: string;
  text: string;
  done: boolean;
  urgent?: boolean;
  link?: string;
  phone?: string;
}

export const initialTodos: Todo[] = [
  {
    id: "t1",
    text: "澤ノ屋に電話して2/24（火）ランチのどぐろ丼を予約",
    done: false,
    urgent: true,
    phone: "076-255-0009",
  },
  {
    id: "t2",
    text: "川端鮮魚店 本店の2/23（月祝）17時〜営業を電話確認",
    done: true,
    phone: "076-223-0128",
  },
  {
    id: "t3",
    text: "天気予報チェック → 晴れのためまちのりで確定",
    done: true,
  },
  {
    id: "t4",
    text: "まちのりアプリをダウンロード＆会員登録",
    done: true,
    link: "https://www.machi-nori.jp/",
  },
  {
    id: "t5",
    text: "21世紀美術館スイミングプールを予約する（当日9:00から）",
    done: true,
    link: "https://www.kanazawa21.jp/data_list.php?g=120&d=1",
  },
];
