import { motion, LazyMotion, domAnimation } from "framer-motion";

// shape types:
//  0 = flat rectangle (classic gold leaf)
//  1 = organic irregular (blob)
//  2 = small diamond
//  3 = tiny circle (dot)
//  4 = thin long strip
//  5 = small square
const PARTICLES = [
  // x        delay  dur  w   h  spin   dx   shape
  {
    id: 0,
    x: "6%",
    delay: 0.0,
    dur: 10,
    w: 22,
    h: 5,
    spin: 480,
    dx: 28,
    shape: 0,
  },
  {
    id: 1,
    x: "14%",
    delay: 1.4,
    dur: 11,
    w: 9,
    h: 9,
    spin: -360,
    dx: -16,
    shape: 2,
  },
  {
    id: 2,
    x: "22%",
    delay: 0.6,
    dur: 8,
    w: 6,
    h: 6,
    spin: 600,
    dx: 22,
    shape: 3,
  },
  {
    id: 3,
    x: "31%",
    delay: 2.1,
    dur: 10,
    w: 14,
    h: 4,
    spin: -480,
    dx: -14,
    shape: 4,
  },
  {
    id: 4,
    x: "40%",
    delay: 0.3,
    dur: 12,
    w: 18,
    h: 5,
    spin: 360,
    dx: 18,
    shape: 0,
  },
  {
    id: 5,
    x: "49%",
    delay: 1.8,
    dur: 9,
    w: 20,
    h: 8,
    spin: -300,
    dx: -20,
    shape: 1,
  },
  {
    id: 6,
    x: "58%",
    delay: 0.9,
    dur: 11,
    w: 8,
    h: 8,
    spin: 420,
    dx: 12,
    shape: 5,
  },
  {
    id: 7,
    x: "67%",
    delay: 2.5,
    dur: 8,
    w: 25,
    h: 6,
    spin: -540,
    dx: -30,
    shape: 0,
  },
  {
    id: 8,
    x: "76%",
    delay: 3.2,
    dur: 10,
    w: 10,
    h: 10,
    spin: 540,
    dx: 24,
    shape: 2,
  },
  {
    id: 9,
    x: "84%",
    delay: 4.0,
    dur: 9,
    w: 5,
    h: 5,
    spin: -420,
    dx: -10,
    shape: 3,
  },
  {
    id: 10,
    x: "92%",
    delay: 1.1,
    dur: 13,
    w: 30,
    h: 7,
    spin: 360,
    dx: 38,
    shape: 0,
  },
  {
    id: 11,
    x: "3%",
    delay: 3.7,
    dur: 8,
    w: 22,
    h: 9,
    spin: -600,
    dx: -18,
    shape: 1,
  },
  {
    id: 12,
    x: "11%",
    delay: 0.4,
    dur: 11,
    w: 7,
    h: 7,
    spin: 480,
    dx: 16,
    shape: 5,
  },
  {
    id: 13,
    x: "20%",
    delay: 2.8,
    dur: 10,
    w: 16,
    h: 4,
    spin: -360,
    dx: -22,
    shape: 4,
  },
  {
    id: 14,
    x: "35%",
    delay: 1.6,
    dur: 9,
    w: 20,
    h: 5,
    spin: 300,
    dx: 14,
    shape: 0,
  },
  {
    id: 15,
    x: "46%",
    delay: 4.5,
    dur: 12,
    w: 12,
    h: 12,
    spin: -480,
    dx: -10,
    shape: 2,
  },
  {
    id: 16,
    x: "61%",
    delay: 0.7,
    dur: 10,
    w: 6,
    h: 6,
    spin: 540,
    dx: 20,
    shape: 3,
  },
  {
    id: 17,
    x: "72%",
    delay: 3.0,
    dur: 8,
    w: 18,
    h: 7,
    spin: -300,
    dx: -26,
    shape: 1,
  },
  {
    id: 18,
    x: "80%",
    delay: 1.9,
    dur: 11,
    w: 24,
    h: 5,
    spin: 420,
    dx: 30,
    shape: 0,
  },
  {
    id: 19,
    x: "88%",
    delay: 5.2,
    dur: 9,
    w: 9,
    h: 9,
    spin: -360,
    dx: -14,
    shape: 5,
  },
  {
    id: 20,
    x: "26%",
    delay: 2.4,
    dur: 10,
    w: 28,
    h: 6,
    spin: 480,
    dx: 32,
    shape: 0,
  },
  {
    id: 21,
    x: "54%",
    delay: 6.0,
    dur: 11,
    w: 14,
    h: 14,
    spin: -540,
    dx: -20,
    shape: 2,
  },
  {
    id: 22,
    x: "43%",
    delay: 3.5,
    dur: 8,
    w: 5,
    h: 5,
    spin: 300,
    dx: 10,
    shape: 3,
  },
];

const GOLD_GRADIENT =
  "linear-gradient(105deg, rgba(244,220,130,0.92) 0%, rgba(201,168,76,0.72) 38%, rgba(255,235,150,0.96) 58%, rgba(191,155,60,0.65) 100%)";
const GOLD_SHADOW = "0 1px 4px rgba(201,168,76,0.25)";

function shapeStyle(shape: number, w: number, h: number): React.CSSProperties {
  switch (shape) {
    case 1: // organic blob
      return {
        width: w,
        height: h,
        background: GOLD_GRADIENT,
        borderRadius: "42% 58% 65% 35% / 44% 52% 48% 56%",
        boxShadow: GOLD_SHADOW,
      };
    case 2: // diamond — square rotated 45°
      return {
        width: w * 0.7,
        height: w * 0.7,
        background: GOLD_GRADIENT,
        boxShadow: GOLD_SHADOW,
        // extra built-in 45° offset; spin adds on top
      };
    case 3: // circle dot
      return {
        width: w,
        height: w,
        background: GOLD_GRADIENT,
        borderRadius: "50%",
        boxShadow: GOLD_SHADOW,
      };
    case 4: // thin long strip
      return {
        width: w * 1.8,
        height: Math.max(2, h * 0.5),
        background: GOLD_GRADIENT,
        borderRadius: 2,
        boxShadow: GOLD_SHADOW,
      };
    case 5: // small square
      return {
        width: w,
        height: w,
        background: GOLD_GRADIENT,
        borderRadius: 2,
        boxShadow: GOLD_SHADOW,
      };
    default: // flat rectangle (classic leaf)
      return {
        width: w,
        height: h,
        background: GOLD_GRADIENT,
        borderRadius: 1,
        boxShadow: GOLD_SHADOW,
      };
  }
}

function GoldParticle({
  x,
  delay,
  dur,
  w,
  h,
  spin,
  dx,
  shape,
}: (typeof PARTICLES)[0]) {
  const extraRotate = shape === 2 ? 45 : 0;
  return (
    <motion.div
      style={{
        position: "absolute",
        top: -30,
        left: x,
        ...shapeStyle(shape, w, h),
      }}
      initial={{ y: -30, x: 0, rotate: extraRotate, opacity: 0 }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, dx * 0.35, dx * -0.15, dx],
        rotate: [
          extraRotate,
          extraRotate + spin * 0.3,
          extraRotate + spin * 0.7,
          extraRotate + spin,
        ],
        opacity: [0, 0.7, 0.75, 0.65, 0],
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

export default function GoldFall() {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      >
        {PARTICLES.map((p) => (
          <GoldParticle key={p.id} {...p} />
        ))}
      </div>
    </LazyMotion>
  );
}
