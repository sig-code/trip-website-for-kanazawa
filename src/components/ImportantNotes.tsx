import { ExternalLink } from "lucide-react";
import { closedInfoList } from "../data/notes";

export default function ImportantNotes() {
  return (
    <div className="pt-4 space-y-4">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-2">
        <p className="text-amber-700 text-xs leading-relaxed">
          ⚠️ 2/23（月祝）→ 翌平日の振替休館に注意。
          <br />
          2/24（火）は21世紀美術館（展覧会）・鈴木大拙館・ゴーシュが全て休みです。
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 px-1">
        <div className="flex items-center gap-1.5">
          <span className="text-base">✅</span>
          <span className="text-slate-500 text-xs">営業</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base">❌</span>
          <span className="text-slate-500 text-xs">休み</span>
        </div>
      </div>

      {/* Table-like cards */}
      <div className="space-y-2">
        {/* Header */}
        <div className="flex text-[10px] text-slate-600 font-medium px-3 py-1 gap-2">
          <span className="flex-1">施設・店舗</span>
          <span className="w-20 text-center">1日目 月祝</span>
          <span className="w-20 text-center">2日目 火</span>
        </div>

        {closedInfoList.map((info) => (
          <div
            key={info.name}
            className="bg-white border border-slate-200 rounded-xl px-3 py-3"
          >
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 text-xs font-medium leading-snug">
                  {info.name}
                </p>
                <p className="text-slate-600 text-[10px] mt-0.5">
                  定休: {info.closedDay}
                </p>
              </div>

              <div className="w-20 text-center shrink-0">
                <p className="text-xs">{info.day1.ok ? "✅" : "❌"}</p>
                <p
                  className={`text-[10px] leading-tight mt-0.5 ${info.day1.ok ? "text-emerald-400/70" : "text-red-400/70"}`}
                >
                  {info.day1.note.replace("✅", "").replace("❌", "").trim()}
                </p>
              </div>
              <div className="w-20 text-center shrink-0">
                <p className="text-xs">{info.day2.ok ? "✅" : "❌"}</p>
                <p
                  className={`text-[10px] leading-tight mt-0.5 ${info.day2.ok ? "text-emerald-400/70" : "text-red-400/70"}`}
                >
                  {info.day2.note.replace("✅", "").replace("❌", "").trim()}
                </p>
              </div>
            </div>

            {info.link && (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-gold/60 active:opacity-70"
              >
                <ExternalLink size={9} />
                <span>一次ソース</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
