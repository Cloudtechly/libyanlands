"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  
  return (
    <section className="h-[50vh] flex items-center justify-center bg-charcoal text-white border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <h2 
        className="text-[10vw] font-black uppercase leading-none text-center tracking-tighter text-outline relative z-10 hover:text-neon transition-colors duration-500 cursor-default"
        dangerouslySetInnerHTML={{ __html: t.ctaSection.text }}
      />
    </section>
  );
}
