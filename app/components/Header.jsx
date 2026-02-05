"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealItem from "./RevealItem";

export default function Header() {
  const baseDelay = 0.005;

  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) setScrolled(true);
      else setScrolled(false);

      if (currentScrollY < 120) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setHidden(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER BAR */}
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: hidden ? "-100%" : "0%", opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`sticky top-0 z-50 ${
          scrolled || menuOpen ? "bg-cream" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 lg:px-[8%] py-6 flex items-center justify-between">
          
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-textDark"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="text-[32px] leading-none">×</span>
            ) : (
              <span className="text-[26px] leading-none">≡</span>
            )}
          </button>

          {/* LOGO */}
          <RevealItem delay={baseDelay}>
            <p className="font-serif text-[28px] lg:text-[34px] font-semibold text-textDark">
              Lilac Template
            </p>
          </RevealItem>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-12">
            <RevealItem delay={baseDelay + 0.01}>
              <a className="text-[16px] font-medium text-textDark" href="#">
                Blog
              </a>
            </RevealItem>
            <RevealItem delay={baseDelay + 0.02}>
              <a className="text-[16px] font-medium text-textDark" href="#">
                Contact
              </a>
            </RevealItem>
          </nav>
        </div>
      </motion.header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-[6vh]"
          >
            <a
              href="#"
              className="text-[clamp(2rem,6vw,3rem)] font-medium text-textDark"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </a>

            <a
              href="#"
              className="text-[clamp(2rem,6vw,3rem)] font-medium text-textDark"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
