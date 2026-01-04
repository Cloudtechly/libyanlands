"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function SocialsSection() {
  const { t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:zakshakmak2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-charcoal relative overflow-hidden" dir={dir}>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter block text-white">
              {t.socials.heading}
            </span>
            <span className="text-4xl md:text-6xl font-serif italic block text-neon">
              {t.socials.headingHighlight}
            </span>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-sm uppercase tracking-wider font-bold">{t.socials.form.name}</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-neon focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/60 text-sm uppercase tracking-wider font-bold">{t.socials.form.email}</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-neon focus:outline-none transition-colors"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-white/60 text-sm uppercase tracking-wider font-bold">{t.socials.form.subject}</label>
            <input 
              type="text" 
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-neon focus:outline-none transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="text-white/60 text-sm uppercase tracking-wider font-bold">{t.socials.form.message}</label>
            <textarea 
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-neon focus:outline-none transition-colors resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-neon text-black font-black uppercase py-4 rounded-xl tracking-widest hover:bg-white transition-colors text-lg"
          >
            {t.socials.form.send}
          </button>
        </motion.form>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
