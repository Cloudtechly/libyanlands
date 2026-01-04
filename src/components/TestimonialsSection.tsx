import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = t.testimonials.items as Array<{ name: string; role: string; text: string }>;

  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-[#3FFB00] to-purple-400">
            {t.testimonials.heading}
          </h2>
          <p className="text-xl text-gray-400">{t.testimonials.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 relative group hover:bg-neutral-800/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-yellow-500/20 absolute top-6 right-6 group-hover:text-yellow-500/40 transition-colors" />
              
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#3FFB00] to-purple-400 flex items-center justify-center text-black font-bold text-xl">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
