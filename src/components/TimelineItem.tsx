import { m } from "framer-motion";
import {
  Footprints,
  Bike,
  Bus,
  Train,
  Minus,
  ExternalLink,
  Phone,
  MapPin,
  AlertTriangle,
  Star,
} from "lucide-react";
import type { ScheduleItem, TransportType } from "../data/schedule";

const transportConfig: Record<
  TransportType,
  {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    color: string;
  }
> = {
  walk: { icon: Footprints, label: "徒歩", color: "text-emerald-400" },
  machinori: { icon: Bike, label: "まちのり", color: "text-sky-400" },
  bus: { icon: Bus, label: "バス", color: "text-violet-400" },
  train: { icon: Train, label: "電車", color: "text-orange-400" },
  none: { icon: Minus, label: "—", color: "text-slate-600" },
};

interface Props {
  item: ScheduleItem;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ item, index, isLast }: Props) {
  const transport = transportConfig[item.transport];
  const TransportIcon = transport.icon;
  const isMandatory = item.isMandatory;
  const isHighlight = item.isHighlight;

  return (
    <m.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      className="flex gap-4 relative"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* Dot */}
        <div
          className={`w-3 h-3 rounded-full mt-1 z-10 flex-shrink-0 ${
            isMandatory
              ? "bg-[#c9a84c] shadow-[0_0_8px_rgba(201,168,76,0.6)]"
              : isHighlight
                ? "bg-[#c9a84c]/70"
                : "bg-slate-600"
          }`}
        />
        {/* Line */}
        {!isLast && (
          <div className="w-px flex-1 mt-1 bg-gradient-to-b from-slate-600 to-slate-700/30 min-h-[2rem]" />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-5 rounded-xl p-4 border transition-all ${
          isMandatory
            ? "bg-[#c9a84c]/8 border-[#c9a84c]/30"
            : isHighlight
              ? "bg-slate-800/60 border-slate-700/50"
              : "bg-slate-800/30 border-slate-700/20"
        }`}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#c9a84c] font-mono text-sm font-semibold tabular-nums">
              {item.time}
            </span>
            {isMandatory && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#c9a84c]/20 text-[#c9a84c] font-medium leading-none">
                確定
              </span>
            )}
            {isHighlight && !isMandatory && (
              <Star size={12} className="text-[#c9a84c]/60" />
            )}
          </div>
          {/* Transport badge */}
          {item.transport !== "none" && (
            <div
              className={`flex items-center gap-1 text-[11px] flex-shrink-0 ${transport.color}`}
            >
              <TransportIcon size={12} />
              <span>{transport.label}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white text-base font-semibold leading-snug">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-slate-400 text-sm mt-0.5">{item.subtitle}</p>
        )}

        {/* Duration */}
        {item.duration && item.duration !== "—" && (
          <p className="text-slate-500 text-xs mt-1.5">⏱ {item.duration}</p>
        )}

        {/* Warning */}
        {item.warning && (
          <div className="mt-2 flex gap-1.5 items-start bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
            <AlertTriangle
              size={13}
              className="text-amber-400 flex-shrink-0 mt-0.5"
            />
            <p className="text-amber-300 text-xs leading-relaxed">
              {item.warning}
            </p>
          </div>
        )}

        {/* Note */}
        {item.note && !item.warning && (
          <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
            {item.note}
          </p>
        )}
        {item.note && item.warning && (
          <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
            {item.note}
          </p>
        )}

        {/* Address & Phone */}
        {(item.address || item.phone) && (
          <div className="mt-2 space-y-1">
            {item.address && (
              <div className="flex items-center gap-1.5">
                <MapPin size={11} className="text-slate-500 flex-shrink-0" />
                <span className="text-slate-500 text-xs">{item.address}</span>
              </div>
            )}
            {item.phone && (
              <a
                href={`tel:${item.phone}`}
                className="flex items-center gap-1.5 active:opacity-70"
              >
                <Phone size={11} className="text-slate-500 flex-shrink-0" />
                <span className="text-slate-400 text-xs underline underline-offset-2">
                  {item.phone}
                </span>
              </a>
            )}
          </div>
        )}

        {/* Link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-[#c9a84c]/70 text-xs active:opacity-70"
          >
            <ExternalLink size={11} />
            <span>詳細を見る</span>
          </a>
        )}
      </div>
    </m.div>
  );
}
