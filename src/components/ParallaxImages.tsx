"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", y: 0 },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", y: -150 },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2071&auto=format&fit=crop", y: -300 },
];

export default function ParallaxImages() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const transforms = [y1, y2, y3];

  return (
    <section ref={containerRef} className="py-40 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            style={{ y: transforms[i] }}
            className={`relative h-[60vh] w-full overflow-hidden ${i % 2 === 0 ? 'mt-0' : 'mt-20'}`}
          >
            <img
              src={img.src}
              alt={`Parallax ${i}`}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
