"use client";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Marquee() {
  const { t, dir } = useLanguage();

  const marqueeVariants: Variants = {
    animate: {
      x: dir === 'rtl' ? ["-100%", "0%"] : ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative w-full overflow-hidden bg-neon py-4 border-y border-black" dir="ltr">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 text-6xl font-black uppercase text-black tracking-tighter pr-8"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {t.marquee.items.map((item, idx) => (
                <span key={idx} className={idx % 2 === 1 ? "text-outline-black mx-4" : ""}>{item}</span>
              ))}
            </span>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-8 text-6xl font-black uppercase text-black tracking-tighter pr-8"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {t.marquee.items.map((item, idx) => (
                <span key={idx} className={idx % 2 === 1 ? "text-outline-black mx-4" : ""}>{item}</span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
