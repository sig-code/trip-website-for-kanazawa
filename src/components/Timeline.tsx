import { m, LazyMotion, domAnimation } from "framer-motion";
import { Calendar } from "lucide-react";
import { schedule } from "../data/schedule";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="px-4 pt-2 pb-12">
        {schedule.map((day) => (
          <div key={day.day} className="mb-10">
            {/* Day header */}
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5 }}
              className="sticky top-0 z-20 py-3 mb-5 bg-[#0f172a]/95 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                {/* Day badge */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 flex-shrink-0">
                  <span className="text-[#c9a84c] font-bold text-sm">
                    {day.day}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#c9a84c]">
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
              <div className="mt-3 h-px bg-gradient-to-r from-[#c9a84c]/40 via-[#c9a84c]/10 to-transparent" />
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
