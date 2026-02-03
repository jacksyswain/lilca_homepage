"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import RevealItem from "./RevealItem";

export default function Header() {
  const baseDelay = 0.005;

  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background becomes solid after slight scroll
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // keep header visible for first part
      if (currentScrollY < 120) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // scroll down → hide
      if (currentScrollY > lastScrollY.current) {
        setHidden(true);
      }
      // scroll up → show
      else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{
        y: hidden ? "-100%" : "0%",
        opacity: 1,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`
        sticky top-0 z-50
        transition-colors duration-300
        ${scrolled ? "bg-cream" : "bg-transparent"}
      `}
    >
      <div
        className="
          max-w-[1800px] mx-auto
          px-6 sm:px-8 lg:px-[8%]
          pt-6 pb-4
          flex items-center justify-between
        "
      >
        {/* LEFT LOGO */}
        <RevealItem delay={baseDelay}>
          <p
            className="
              font-serif
              text-[30px]
              lg:text-[34px]
              font-semibold
              text-textDark
              leading-none
            "
          >
            Lilac Template
          </p>
        </RevealItem>

        {/* RIGHT NAV */}
        <nav className="flex gap-12">
          <RevealItem delay={baseDelay + 0.01}>
            <a
              href="#"
              className="text-[16px] font-medium text-textDark"
            >
              Blog
            </a>
          </RevealItem>

          <RevealItem delay={baseDelay + 0.02}>
            <a
              href="#"
              className="text-[16px] font-medium text-textDark"
            >
              Contact
            </a>
          </RevealItem>
        </nav>
      </div>
    </motion.header>
  );
}
