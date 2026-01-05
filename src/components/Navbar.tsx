"use client";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const navImages = [
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516937941348-c09e554b9631?q=80&w=2070&auto=format&fit=crop",
];

const socialLinks = [
  { title: "Facebook", href: "" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const { t, language, setLanguage, dir } = useLanguage();

  const navLinks = t.navbar.links.map((link, i) => ({
    ...link,
    img: navImages[i]
  }));

  const menuVariants: Variants = {
    initial: { 
      clipPath: "ellipse(100% 0% at 50% 0%)",
    },
    animate: {
      clipPath: "ellipse(150% 150% at 50% 0%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      clipPath: "ellipse(100% 0% at 50% 0%)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white" dir="ltr">
        <div className="text-2xl font-black uppercase tracking-tighter flex items-center gap-4">
          LIBYAN LANDS
          <button 
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="text-xs font-bold border border-white/20 px-2 py-1 rounded hover:bg-white hover:text-black transition-colors"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-bold uppercase tracking-widest hover:text-neon transition-colors z-50"
        >
          {isOpen ? t.navbar.close : t.navbar.menu}
        </button>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-charcoal z-40 flex flex-col md:flex-row overflow-hidden"
            dir={dir}
          >
            {/* Left Column - Images */}
            <div className="hidden md:block w-1/2 h-full relative overflow-hidden border-r border-white/10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: hoveredIndex === i ? 1 : 0,
                    scale: hoveredIndex === i ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={link.img}
                    alt={link.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                </motion.div>
              ))}
            </div>

            {/* Right Column - Links */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between p-10 md:p-20 pt-32">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="text-5xl md:text-7xl font-black uppercase text-white hover:text-neon transition-colors leading-tight group flex items-center"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onClick={() => setIsOpen(false)}
                    >
                     <span className="relative inline-block group">
  {/* Arrow behind text */}
  <svg
    viewBox="0 0 412 26"
    fill="none"
    className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-auto 
      opacity-0 group-hover:opacity-100 transition-opacity z-1  duration-300 
      text-neon hidden md:block pointer-events-none
      ${dir === 'rtl' ? 'rotate-180' : ''}`}
  >
    <path
      d="M0 2h73.539c5.858 0 11.47 2.35 15.58 6.525l8.565 8.7a21.863 21.863 0 0 0 15.58 6.525h72.678c6.045 0 11.82-2.503 15.954-6.914l6.485-6.922A21.865 21.865 0 0 1 224.336 3h76.752a21.864 21.864 0 0 1 16.806 7.88l4.362 5.24A21.864 21.864 0 0 0 339.063 24H412"
      stroke="white"
      strokeWidth="6"
    />
  </svg>

  {/* Text above arrow */}
  <span className="relative z-10 px-1">
    {link.title}
  </span>
</span>

                    </motion.a>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-neon font-bold uppercase tracking-widest text-sm"
                >
                  {t.navbar.since}
                </motion.div>
                
                <div className="flex flex-wrap gap-6 text-sm font-bold uppercase text-white/60">
                  <a href="mailto:contact@carmax.ly" className="hover:text-white transition-colors">{t.navbar.contact}</a>
                  {socialLinks.map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {social.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
