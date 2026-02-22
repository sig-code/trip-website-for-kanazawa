import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu.tsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 rounded-full bg-gold" />
            <span
              className="text-slate-800 text-sm font-semibold tracking-wide"
              style={{ fontFamily: '"Noto Serif JP", serif' }}
            >
              金沢の旅
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700 active:scale-95 transition-transform"
            aria-label="メニューを開く"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && <HamburgerMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </LazyMotion>
  );
}
