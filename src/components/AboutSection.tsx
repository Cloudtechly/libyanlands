"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const { t, dir } = useLanguage();

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden" dir={dir}>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-neon text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-8">
            {t.about.heading}
          </h2>
          <p 
            className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white"
            dangerouslySetInnerHTML={{ __html: t.about.description }}
          />
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-black text-white">{t.about.stats[0].value}</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.about.stats[0].label}</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-black text-white">{t.about.stats[1].value}</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.about.stats[1].label}</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-5xl font-black text-white">{t.about.stats[2].value}</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.about.stats[2].label}</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-neon/30 to-transparent" />
    </section>
  );
}
