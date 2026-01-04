"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-32 bg-charcoal text-white relative overflow-hidden" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            {t.process.heading}
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto" />
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {t.process.steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-full aspect-square bg-charcoal border border-white/10 rounded-full flex flex-col items-center justify-center p-8 relative overflow-hidden group-hover:border-neon transition-colors duration-500">
                  <div className="absolute inset-0 bg-neon/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                  
                  <span className="text-6xl font-black text-white/10 group-hover:text-neon/20 transition-colors duration-500 absolute top-4">
                    0{i + 1}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-center mb-2 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-sm text-center text-white/60 relative z-10">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
