import { motion, LazyMotion, domAnimation } from "framer-motion";

// fallStyle:
//  0 = straight down (minimal drift)
//  1 = drift right
//  2 = drift left
//  3 = slow pendulum sway
const SQUARES = [
  //  id   x       delay  dur   size  spin   fallStyle
  { id: 0, x: "5%", delay: 0.0, dur: 22, s: 14, spin: 180, fs: 0 },
  { id: 1, x: "12%", delay: 1.8, dur: 26, s: 9, spin: -270, fs: 1 },
  { id: 2, x: "20%", delay: 0.5, dur: 18, s: 19, spin: 360, fs: 2 },
  { id: 3, x: "28%", delay: 3.2, dur: 24, s: 11, spin: -180, fs: 0 },
  { id: 4, x: "36%", delay: 0.9, dur: 20, s: 16, spin: 270, fs: 3 },
  { id: 5, x: "44%", delay: 2.4, dur: 28, s: 10, spin: -360, fs: 1 },
  { id: 6, x: "52%", delay: 0.3, dur: 22, s: 21, spin: 180, fs: 0 },
  { id: 7, x: "60%", delay: 4.1, dur: 18, s: 12, spin: -270, fs: 2 },
  { id: 8, x: "68%", delay: 1.3, dur: 24, s: 17, spin: 360, fs: 3 },
  { id: 9, x: "76%", delay: 2.9, dur: 20, s: 9, spin: -180, fs: 1 },
  { id: 10, x: "84%", delay: 0.7, dur: 26, s: 15, spin: 270, fs: 0 },
  { id: 11, x: "91%", delay: 3.6, dur: 22, s: 11, spin: -360, fs: 2 },
  { id: 12, x: "3%", delay: 5.0, dur: 24, s: 18, spin: 180, fs: 3 },
  { id: 13, x: "17%", delay: 1.1, dur: 18, s: 13, spin: -270, fs: 0 },
  { id: 14, x: "33%", delay: 4.5, dur: 28, s: 10, spin: 360, fs: 1 },
  { id: 15, x: "47%", delay: 2.0, dur: 20, s: 22, spin: -180, fs: 2 },
  { id: 16, x: "55%", delay: 6.2, dur: 22, s: 14, spin: 270, fs: 0 },
  { id: 17, x: "63%", delay: 0.4, dur: 26, s: 8, spin: -360, fs: 3 },
  { id: 18, x: "72%", delay: 3.8, dur: 18, s: 19, spin: 180, fs: 1 },
  { id: 19, x: "88%", delay: 1.5, dur: 24, s: 12, spin: -270, fs: 0 },
  { id: 20, x: "24%", delay: 5.5, dur: 20, s: 16, spin: 360, fs: 2 },
  { id: 21, x: "40%", delay: 0.8, dur: 28, s: 10, spin: -180, fs: 3 },
  { id: 22, x: "79%", delay: 2.6, dur: 22, s: 23, spin: 270, fs: 0 },
];

// X keyframes per fall style
function xKeyframes(fs: number, s: number): number[] {
  switch (fs) {
    case 1:
      return [0, s * 0.5, s * 1.2, s * 1.8]; // drift right
    case 2:
      return [0, -s * 0.5, -s * 1.2, -s * 1.8]; // drift left
    case 3:
      return [0, s * 0.9, -s * 0.6, s * 0.4, 0]; // pendulum sway
    default:
      return [0, s * 0.15, -s * 0.1, s * 0.05]; // mostly straight
  }
}

const GOLD =
  "linear-gradient(125deg, rgba(255,235,140,0.95) 0%, rgba(232,201,106,0.88) 20%, rgba(201,168,76,0.75) 45%, rgba(244,218,110,0.92) 65%, rgba(180,145,50,0.7) 82%, rgba(252,230,130,0.9) 100%)";

function GoldSquare({ x, delay, dur, s, spin, fs }: (typeof SQUARES)[0]) {
  const xkf = xKeyframes(fs, s);
  return (
    <motion.div
      style={{
        position: "absolute",
        top: -s - 10,
        left: x,
        width: s,
        height: s,
        background: GOLD,
        boxShadow: `0 2px 8px rgba(201,168,76,0.22), inset 0 1px 2px rgba(255,240,160,0.4)`,
        borderRadius: 2,
      }}
      initial={{ y: -(s + 10), x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: [0, "115vh"],
        x: xkf,
        rotate: [0, spin],
        opacity: [0, 0.68, 0.72, 0.62, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: fs === 0 ? "linear" : [0.25, 0.1, 0.25, 1],
        times:
          fs === 3
            ? [0, 0.04, 0.3, 0.6, 0.95, 1].slice(0, xkf.length + 1)
            : [0, 0.04, 0.75, 1],
      }}
    />
  );
}

export default function GoldFall() {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        {SQUARES.map((p) => (
          <GoldSquare key={p.id} {...p} />
        ))}
      </div>
    </LazyMotion>
  );
}
