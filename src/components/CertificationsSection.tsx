import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const { t } = useLanguage();

  const certifications = t.certifications.items as Array<{ title: string; desc: string }>;
  const icons = [Award, ShieldCheck, CheckCircle];

  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-2xl border border-neutral-800 h-48 w-full animate-pulse bg-neutral-800/50" />
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 h-64 w-full" />
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 h-64 w-full" />
                <div className="p-6 rounded-2xl border border-neutral-800 h-48 w-full animate-pulse bg-neutral-800/50" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-500/10 blur-3xl rounded-full -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-green-400 to-emerald-600">
              {t.certifications.heading}
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {t.certifications.description}
            </p>

            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-gray-400">{cert.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
