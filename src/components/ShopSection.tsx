"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const productImages = [
  "https://images.unsplash.com/photo-1605557202138-097824c3f2d4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
];

export default function ShopSection() {
  const { t, dir } = useLanguage();

  const products = t.shop.items.map((item, i) => ({
    ...item,
    id: i + 1,
    image: productImages[i]
  }));

  return (
    <section className="py-24 bg-charcoal relative z-10" dir={dir}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter">
            {t.shop.heading} <span className="text-neon">{t.shop.headingHighlight}</span>
          </h2>
          <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest text-white hover:text-neon transition-colors">
            {t.shop.viewAll}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-white/5 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-neon text-black font-bold uppercase py-3 tracking-widest hover:bg-white transition-colors">
                    {t.shop.addToCart}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white uppercase">{product.name}</h3>
                <span className="text-neon font-mono">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:text-neon transition-colors">
            {t.shop.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
