import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Globe, MapPin, TrendingUp } from 'lucide-react';

const GlobalReachSection: React.FC = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const stats = t.globalReach.stats as Array<{ value: string; label: string }>;

  const icons = [Globe, MapPin, TrendingUp];

  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary  rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isRTL ? 'text-right' : 'text-left'}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#3FFB00] to-purple-400">
              {t.globalReach.heading}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {t.globalReach.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-blue-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual Element - Abstract Globe Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-100 flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md mx-auto">
               {/* Animated Rings */}
               {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 10 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: `${100 - i * 20}%`,
                    height: `${100 - i * 20}%`,
                    margin: 'auto',
                  }}
                />
              ))}
              
              {/* Central Dot */}
              <div className="absolute inset-0 m-auto w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
              
              {/* Floating Points */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    x: [0, Math.cos(i) * 100, 0],
                    y: [0, Math.sin(i) * 100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
