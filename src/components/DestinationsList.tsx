import { MapPin, ExternalLink, Phone } from "lucide-react";
import { schedule } from "../data/schedule";
import { alternatives } from "../data/alternatives";

export default function DestinationsList() {
  // scheduleから場所・お店を抽出（重複排除）
  const mainDestinations = schedule
    .flatMap((day) => day.items)
    .filter((item) => item.link || item.address)
    .reduce(
      (acc, current) => {
        const x = acc.find((item) => item.title === current.title);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      },
      [] as (typeof schedule)[0]["items"],
    );

  return (
    <div className="pt-4 space-y-6">
      {/* 今回行く場所・お店 */}
      <section>
        <h3 className="text-slate-800 text-sm font-semibold mb-3 flex items-center gap-2">
          <MapPin size={16} className="text-gold" />
          今回行く場所・お店
        </h3>
        <div className="space-y-3">
          {mainDestinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm"
            >
              <div className="flex justify-between items-start gap-2">
                <h4 className="text-slate-800 text-sm font-medium leading-tight">
                  {dest.title}
                </h4>
                {dest.link && (
                  <a
                    href={dest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold/80 hover:text-gold transition-colors shrink-0"
                    aria-label="サイトを開く"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              {dest.subtitle && (
                <p className="text-slate-500 text-xs mt-1">{dest.subtitle}</p>
              )}
              {(dest.address || dest.phone) && (
                <div className="mt-2 pt-2 border-t border-slate-100 space-y-1">
                  {dest.address && (
                    <p className="text-slate-600 text-xs flex items-start gap-1.5">
                      <MapPin
                        size={12}
                        className="shrink-0 mt-0.5 text-slate-400"
                      />
                      <span className="leading-relaxed">{dest.address}</span>
                    </p>
                  )}
                  {dest.phone && (
                    <a
                      href={`tel:${dest.phone}`}
                      className="text-sky-600 text-xs flex items-center gap-1.5 hover:underline w-fit"
                    >
                      <Phone size={12} className="shrink-0" />
                      <span>{dest.phone}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 代替候補 */}
      <section>
        <h3 className="text-slate-800 text-sm font-semibold mb-3 flex items-center gap-2">
          <MapPin size={16} className="text-slate-400" />
          代替候補
        </h3>
        <div className="space-y-3">
          {alternatives.map((alt) => (
            <div
              key={alt.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-3"
            >
              <div className="flex justify-between items-start gap-2">
                <h4 className="text-slate-700 text-sm font-medium leading-tight">
                  {alt.name}
                </h4>
                {alt.link && (
                  <a
                    href={alt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-600 transition-colors shrink-0"
                    aria-label="サイトを開く"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              {alt.note && (
                <p className="text-slate-500 text-xs mt-1 line-clamp-2">
                  {alt.note}
                </p>
              )}
              {(alt.address || alt.phone) && (
                <div className="mt-2 pt-2 border-t border-slate-200/60 space-y-1">
                  {alt.address && (
                    <p className="text-slate-500 text-xs flex items-start gap-1.5">
                      <MapPin
                        size={12}
                        className="shrink-0 mt-0.5 text-slate-400"
                      />
                      <span className="leading-relaxed">{alt.address}</span>
                    </p>
                  )}
                  {alt.phone && (
                    <a
                      href={`tel:${alt.phone}`}
                      className="text-sky-600/80 text-xs flex items-center gap-1.5 hover:underline w-fit"
                    >
                      <Phone size={12} className="shrink-0" />
                      <span>{alt.phone}</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
