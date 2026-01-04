"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function InnovationSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden" dir={dir}>
      <div className="absolute inset-0 bg-neon/5 skew-y-3 transform origin-top-left" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter mb-6">
              {t.innovation.heading}
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              {t.innovation.description}
            </p>
            
            <div className="grid gap-6">
              {t.innovation.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-neon flex items-center justify-center text-black font-bold text-xl shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-primary/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" 
              alt="Innovation" 
              className="w-full h-full object-cover rounded-3xl relative z-10 border border-white/10"
            />
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-10 -right-10 w-32 h-32 bg-neon rounded-full blur-2xl opacity-50"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
