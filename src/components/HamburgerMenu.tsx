import { useState } from "react";
import {
  X,
  CheckSquare,
  UtensilsCrossed,
  AlertTriangle,
  Bike,
} from "lucide-react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import TodoList from "./TodoList.tsx";
import AlternativeList from "./AlternativeList.tsx";
import ImportantNotes from "./ImportantNotes.tsx";

interface Props {
  onClose: () => void;
}

type TabId = "todo" | "alt" | "notes" | "transport";

const tabs: {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { id: "todo", label: "TODO", icon: CheckSquare },
  { id: "alt", label: "代替候補", icon: UtensilsCrossed },
  { id: "notes", label: "定休日", icon: AlertTriangle },
  { id: "transport", label: "移動", icon: Bike },
];

export default function HamburgerMenu({ onClose }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("todo");

  return (
    <LazyMotion features={domAnimation}>
      {/* Backdrop */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <m.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0d1e35] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-3 border-b border-slate-700/50">
          <span
            className="text-white text-base font-semibold"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            詳細情報
          </span>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 active:scale-95 transition-transform"
            aria-label="閉じる"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-3 pt-3 pb-2 gap-1.5 shrink-0 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                  active
                    ? "bg-gold text-[#0a1628]"
                    : "bg-slate-800 text-slate-400 active:bg-slate-700"
                }`}
              >
                <Icon size={12} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
          {activeTab === "todo" && <TodoList />}
          {activeTab === "alt" && <AlternativeList />}
          {activeTab === "notes" && <ImportantNotes />}
          {activeTab === "transport" && <TransportSection />}
        </div>
      </m.div>
    </LazyMotion>
  );
}

function TransportSection() {
  return (
    <div className="pt-4 space-y-4">
      {/* Main recommendation */}
      <div className="bg-sky-500/10 border border-sky-500/25 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Bike size={16} className="text-sky-400" />
          <span className="text-sky-300 font-semibold text-sm">
            まちのり（シェアサイクル）推奨
          </span>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed">
          天気は晴れ予報🌤
          主要観光地は半径約2km以内に集中。バスに4回乗らないため1日フリー乗車券（800円）よりも安い。
        </p>
      </div>

      {/* Cost comparison */}
      <div className="bg-slate-800/40 rounded-xl p-4 space-y-3">
        <p className="text-white text-sm font-semibold">料金比較</p>
        <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
          <div>
            <p className="text-slate-300 text-sm">バス1日フリー乗車券</p>
            <p className="text-slate-500 text-xs">バス乗り放題・施設割引あり</p>
          </div>
          <span className="text-white font-bold text-sm">800円/日</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <div>
            <p className="text-sky-300 text-sm">まちのり（1回会員）</p>
            <p className="text-slate-500 text-xs">2人 × 165円 × 2〜3回</p>
          </div>
          <span className="text-sky-300 font-bold text-sm">660〜990円</span>
        </div>
      </div>

      {/* Links */}
      <div className="bg-slate-800/40 rounded-xl p-4 space-y-3">
        <p className="text-white text-sm font-semibold">公式リンク</p>
        {[
          {
            label: "まちのり 料金・案内",
            url: "https://www.machi-nori.jp/price/",
          },
          {
            label: "まちのり ポートマップ",
            url: "https://www.machi-nori.jp/port/",
          },
          {
            label: "バス1日フリー乗車券",
            url: "https://www.hokutetsu.co.jp/ticket/kanazawa-oneday/",
          },
        ].map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group active:opacity-70"
          >
            <span className="text-gold/80 text-xs">{link.label}</span>
            <span className="text-slate-600 text-xs">→</span>
          </a>
        ))}
      </div>

      {/* Note */}
      <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-4">
        <p className="text-amber-300 text-xs leading-relaxed">
          ⚠️ 金沢のバスはSuicaが使えない路線があります。
          バスを使う場合は小銭か交通系ICカードを事前に確認してください。
        </p>
      </div>
    </div>
  );
}
