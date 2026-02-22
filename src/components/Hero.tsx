import { motion, LazyMotion, domAnimation } from "framer-motion";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col items-center justify-center min-h-svh overflow-hidden bg-stone-50 px-6 pt-[env(safe-area-inset-top)]">
        {/* Main gold glow — center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold/15 blur-[90px]" />
        {/* Secondary glow — bottom right */}
        <div className="absolute bottom-1/4 right-0 w-52 h-52 rounded-full bg-gold/10 blur-[70px]" />
        {/* Tertiary glow — top left */}
        <div className="absolute top-1/4 -left-10 w-44 h-44 rounded-full bg-gold/8 blur-[60px]" />

        {/* Corner frame — top left */}
        <div className="absolute top-8 left-6 w-10 h-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gold/50" />
          <div className="absolute top-0 left-0 w-px h-full bg-gold/50" />
        </div>
        {/* Corner frame — top right */}
        <div className="absolute top-8 right-6 w-10 h-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
          <div className="absolute top-0 right-0 w-px h-full bg-gold/50" />
        </div>
        {/* Corner frame — bottom left */}
        <div className="absolute bottom-16 left-6 w-10 h-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-px bg-gold/50" />
          <div className="absolute bottom-0 left-0 w-px h-full bg-gold/50" />
        </div>
        {/* Corner frame — bottom right */}
        <div className="absolute bottom-16 right-6 w-10 h-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-px bg-gold/50" />
          <div className="absolute bottom-0 right-0 w-px h-full bg-gold/50" />
        </div>

        {/* Floating gold diamond */}
        <motion.div
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] right-[14%] w-2 h-2 bg-gold/60 rotate-45"
        />
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[28%] left-[12%] w-1.5 h-1.5 bg-gold/50 rotate-45"
        />

        {/* Content */}
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gold text-xs tracking-[0.35em] uppercase mb-4"
          >
            Kanazawa Trip 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl font-bold text-slate-800 leading-tight mb-2"
            style={{ fontFamily: '"Noto Serif JP", serif' }}
          >
            金沢の旅
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="h-px bg-linear-to-r from-transparent via-gold to-transparent my-5"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-slate-700 text-lg mb-1">
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
            {["1泊2日", "2人旅"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-gold/40 text-gold/90 bg-gold/5"
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
          <span className="text-slate-400 text-xs tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="w-px h-8 bg-linear-to-b from-gold/60 to-transparent"
          />
        </motion.div>
      </section>
    </LazyMotion>
  );
}
