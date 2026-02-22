import { Phone, ExternalLink, MapPin, Banknote, Star } from "lucide-react";
import { alternatives } from "../data/alternatives";

const categoryConfig = {
  "lunch-d1": {
    label: "1日目ランチ（メイン）",
    color: "text-gold",
    bg: "bg-amber-50 border-amber-200",
  },
  "lunch-d1-alt": {
    label: "1日目ランチ（代替候補）",
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-200",
  },
  "lunch-d2": {
    label: "2日目ランチ",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-200",
  },
  "cafe-d2": {
    label: "2日目カフェ候補",
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-200",
  },
} as const;

const categoryOrder = [
  "lunch-d1",
  "lunch-d1-alt",
  "lunch-d2",
  "cafe-d2",
] as const;

export default function AlternativeList() {
  return (
    <div className="pt-4 space-y-6">
      {categoryOrder.map((category) => {
        const items = alternatives.filter((a) => a.category === category);
        if (items.length === 0) return null;
        const config = categoryConfig[category];

        return (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-1 h-4 rounded-full bg-current"
                style={{ color: "inherit" }}
              />
              <h3
                className={`text-xs font-semibold uppercase tracking-wide ${config.color}`}
              >
                {config.label}
              </h3>
            </div>

            <div className="space-y-3">
              {items.map((alt, idx) => (
                <div
                  key={alt.id}
                  className={`rounded-xl p-4 border ${config.bg} ${alt.isReservationRequired ? "ring-1 ring-red-500/30" : ""}`}
                >
                  {/* Name row */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-slate-800 text-sm font-semibold leading-snug">
                      {alt.name}
                    </h4>
                    {idx === 0 && category !== "lunch-d1-alt" && (
                      <Star
                        size={13}
                        className={config.color}
                        fill="currentColor"
                      />
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {alt.isCashOnly && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 flex items-center gap-1">
                        <Banknote size={9} />
                        現金のみ
                      </span>
                    )}
                    {alt.isReservationRequired && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                        ⚠ 予約必須
                      </span>
                    )}
                    {alt.budget && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {alt.budget}
                      </span>
                    )}
                  </div>

                  {/* Note */}
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {alt.note}
                  </p>

                  {/* Details */}
                  <div className="mt-2 space-y-1">
                    {alt.hours && (
                      <p className="text-slate-500 text-xs">🕐 {alt.hours}</p>
                    )}
                    {alt.closed && (
                      <p className="text-slate-500 text-xs">
                        定休: {alt.closed}
                      </p>
                    )}
                    {alt.address && (
                      <div className="flex items-center gap-1.5">
                        <MapPin size={10} className="text-slate-400 shrink-0" />
                        <span className="text-slate-500 text-xs">
                          {alt.address}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  {(alt.phone || alt.link) && (
                    <div className="mt-2 flex gap-3">
                      {alt.phone && (
                        <a
                          href={`tel:${alt.phone}`}
                          className="flex items-center gap-1.5 text-xs text-sky-400 active:opacity-70"
                        >
                          <Phone size={11} />
                          <span>{alt.phone}</span>
                        </a>
                      )}
                      {alt.link && (
                        <a
                          href={alt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-gold/70 active:opacity-70"
                        >
                          <ExternalLink size={11} />
                          <span>詳細</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
