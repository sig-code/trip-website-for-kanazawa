import { motion, LazyMotion, domAnimation } from "framer-motion";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col items-center justify-center min-h-svh overflow-hidden bg-[#0a1628] px-6 pt-[env(safe-area-inset-top)]">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#c9a84c]/10 blur-[80px]" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-4"
          >
            Kanazawa Trip 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl font-bold text-white leading-tight mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            金沢の旅
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent my-5"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-slate-300 text-lg mb-1">
              2026年2月23日（月・祝）
            </p>
            <p className="text-slate-400 text-sm">〜 24日（火）</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-6 flex gap-3 justify-center flex-wrap"
          >
            {["1泊2日", "♥ 2人旅", "まちのり移動"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-[#c9a84c]/40 text-[#c9a84c]/80"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[#c9a84c]/60 to-transparent"
          />
        </motion.div>
      </section>
    </LazyMotion>
  );
}
