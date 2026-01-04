"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer id="contact" className="bg-neon text-black py-20 px-4 md:px-10" dir={dir}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-[10vw] font-black uppercase leading-none tracking-tighter">
            {t.footer.title}
          </h2>
          <div className="flex flex-col gap-2 mt-4">
            <p className="text-2xl md:text-4xl font-bold">
              {t.footer.address}
            </p>
            <a
              href="tel:+218921301492"
              className={`text-2xl md:text-4xl font-bold underline decoration-black decoration-2 underline-offset-8 hover:text-white transition-colors ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
              dir="ltr"
            >
              +218 92 130 1492
            </a>
            <a
              href="mailto:zakshakmak2@gmail.com"
              className={`text-xl md:text-2xl font-bold hover:text-white transition-colors ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              zakshakmak2@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex gap-8 text-xl font-bold uppercase">
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
      <div className="mt-20 pt-10 border-t border-black flex justify-between text-sm font-bold uppercase">
        <span>{t.footer.copyright}</span>
        <span>{t.footer.tagline}</span>
      </div>
    </footer>
  );
}
