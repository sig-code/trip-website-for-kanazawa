import { m, LazyMotion, domAnimation } from "framer-motion";
import { Calendar } from "lucide-react";
import { schedule } from "../data/schedule";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <LazyMotion features={domAnimation}>
      {/* Ambient scroll gradient — fixed behind timeline */}
      <div
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 2,
          background: [
            "radial-gradient(ellipse 70% 50% at 15% 35%, rgba(201,168,76,0.07) 0%, transparent 65%)",
            "radial-gradient(ellipse 60% 45% at 85% 65%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 50% 40% at 50% 10%, rgba(244,218,110,0.05) 0%, transparent 55%)",
            "radial-gradient(ellipse 55% 42% at 20% 85%, rgba(180,145,50,0.05) 0%, transparent 58%)",
          ].join(", "),
        }}
      />

      <section className="relative px-4 pt-2 pb-12" style={{ zIndex: 10 }}>
        {schedule.map((day) => (
          <div key={day.day} className="mb-10">
            {/* Day header */}
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-0 z-20 py-3 mb-5 bg-stone-50/95 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                {/* Day badge */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/15 border border-gold/40 shrink-0">
                  <span className="text-gold font-bold text-sm">{day.day}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gold">
                    <Calendar size={12} />
                    <span className="text-xs font-medium">{day.date}</span>
                  </div>
                  {day.dayOfWeek && (
                    <p className="text-slate-500 text-xs mt-0.5 leading-tight">
                      {day.dayOfWeek}
                    </p>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="mt-3 h-px bg-linear-to-r from-gold/40 via-gold/10 to-transparent" />
            </m.div>

            {/* Timeline items */}
            <div>
              {day.items.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === day.items.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </LazyMotion>
  );
}
