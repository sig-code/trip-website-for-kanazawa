import { motion, LazyMotion, domAnimation } from "framer-motion";

// Pre-computed gold leaf particle data (stable across renders)
const LEAVES = [
  { id: 0,  x: "8%",  delay: 0.0, dur: 9,  w: 20, h: 5, spin: 480,  dx: 25 },
  { id: 1,  x: "18%", delay: 1.4, dur: 11, w: 14, h: 4, spin: -360, dx: -18 },
  { id: 2,  x: "30%", delay: 0.6, dur: 8,  w: 22, h: 6, spin: 600,  dx: 30 },
  { id: 3,  x: "42%", delay: 2.1, dur: 10, w: 12, h: 3, spin: -480, dx: -12 },
  { id: 4,  x: "55%", delay: 0.3, dur: 12, w: 18, h: 5, spin: 360,  dx: 20 },
  { id: 5,  x: "67%", delay: 1.8, dur: 9,  w: 24, h: 6, spin: -540, dx: -28 },
  { id: 6,  x: "78%", delay: 0.9, dur: 11, w: 16, h: 4, spin: 420,  dx: 15 },
  { id: 7,  x: "88%", delay: 2.5, dur: 8,  w: 10, h: 3, spin: -300, dx: -10 },
  { id: 8,  x: "12%", delay: 3.2, dur: 10, w: 20, h: 5, spin: 540,  dx: 22 },
  { id: 9,  x: "25%", delay: 4.0, dur: 9,  w: 15, h: 4, spin: -420, dx: -20 },
  { id: 10, x: "38%", delay: 1.1, dur: 13, w: 26, h: 7, spin: 360,  dx: 35 },
  { id: 11, x: "50%", delay: 3.7, dur: 8,  w: 13, h: 3, spin: -600, dx: -15 },
  { id: 12, x: "62%", delay: 0.4, dur: 11, w: 19, h: 5, spin: 480,  dx: 18 },
  { id: 13, x: "74%", delay: 2.8, dur: 10, w: 11, h: 3, spin: -360, dx: -25 },
  { id: 14, x: "83%", delay: 1.6, dur: 9,  w: 22, h: 6, spin: 300,  dx: 12 },
  { id: 15, x: "3%",  delay: 4.5, dur: 12, w: 17, h: 4, spin: -480, dx: -8  },
  { id: 16, x: "92%", delay: 0.7, dur: 10, w: 14, h: 4, spin: 540,  dx: 20 },
  { id: 17, x: "46%", delay: 3.0, dur: 8,  w: 21, h: 5, spin: -300, dx: -30 },
];

function GoldLeaf({ x, delay, dur, w, h, spin, dx }: (typeof LEAVES)[0]) {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: -20,
        left: x,
        width: w,
        height: h,
        borderRadius: 1,
        background:
          "linear-gradient(105deg, rgba(232,201,106,0.9) 0%, rgba(201,168,76,0.7) 40%, rgba(244,220,130,0.95) 60%, rgba(201,168,76,0.6) 100%)",
        boxShadow: "0 1px 3px rgba(201,168,76,0.3)",
      }}
      initial={{ y: -20, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, 900],
        x: [0, dx * 0.4, dx * -0.2, dx],
        rotate: [0, spin * 0.3, spin * 0.7, spin],
        opacity: [0, 0.75, 0.8, 0.7, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.05, 0.8, 1],
      }}
    />
  );
}

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative flex flex-col items-center justify-center min-h-svh overflow-hidden bg-stone-50 px-6 pt-[env(safe-area-inset-top)]">

        {/* Gold leaf particles */}
        {LEAVES.map((leaf) => (
          <GoldLeaf key={leaf.id} {...leaf} />
        ))}

        {/* Gold dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

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
