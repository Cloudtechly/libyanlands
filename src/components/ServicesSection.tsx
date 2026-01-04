"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const servicesLayout = [
  {
    id: 1,
    size: "col-span-1 md:col-span-2 md:row-span-2",
    color: "bg-neutral-900"
  },
  {
    id: 2,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    color: "bg-neon text-black"
  },
  {
    id: 3,
    size: "col-span-1 md:col-span-1 md:row-span-2",
    color: "bg-neutral-800"
  },
  {
    id: 4,
    size: "col-span-1 md:col-span-2 md:row-span-1",
    color: "bg-neutral-900"
  },
  {
    id: 5,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    color: "bg-neutral-800"
  },
  {
    id: 6,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    color: "bg-neon text-black"
  },
];

export default function ServicesSection() {
  const { t, dir } = useLanguage();

  const services = t.services.items.map((item, i) => ({
    ...item,
    ...servicesLayout[i]
  }));

  return (
    <section id="services" className="py-20 px-4 md:px-10 bg-charcoal text-white" dir={dir}>
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">{t.services.heading}</h2>
        <p className="text-xl text-white/60">{t.services.subheading}</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {services.map((item, i) => (
          <motion.div
            key={item.id}
            className={`${item.size} ${item.color} rounded-3xl p-8 flex flex-col justify-between border border-white/10 hover:border-neon/50 transition-colors duration-300 group cursor-pointer`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
            <div className="w-full flex items-end justify-end">
              <span className={`text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform ${dir === 'rtl' ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`}>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
