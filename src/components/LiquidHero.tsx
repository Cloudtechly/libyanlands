"use client";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LiquidHero() {
  const { t, dir } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="h-screen w-full relative bg-charcoal overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
          alt="Chemical Industry"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/50 via-transparent to-charcoal/80" />
      </motion.div>
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none text-center px-4"
      >
        <h1 className="text-[15vw] font-black text-white uppercase tracking-tighter leading-[0.8] mix-blend-overlay hover:">
          {t.hero.title1} <br />
          <span className="text-neon">{t.hero.title2}</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mt-8 max-w-2xl font-bold" dir={dir}>
          {t.hero.subtitle}
        </p>
        <motion.button 
          className="mt-8 px-8 py-3 bg-neon text-black font-black uppercase tracking-widest relative overflow-hidden pointer-events-auto group"
          whileHover="hover"
          initial="initial"
        >
          <motion.div 
            className="absolute inset-0 bg-white z-0"
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ originX: dir === 'rtl' ? 1 : 0 }}
          />
          <span className="relative z-10 block overflow-hidden">
            <motion.span 
              className="block"
              variants={{
                initial: { y: 0 },
                hover: { y: "-100%" }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {t.hero.cta}
            </motion.span>
            <motion.span 
              className="absolute inset-0 block"
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {t.hero.cta}
            </motion.span>
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
