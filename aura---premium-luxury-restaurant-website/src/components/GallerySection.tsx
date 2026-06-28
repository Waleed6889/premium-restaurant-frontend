import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Ambiance', 'Culinary', 'Cocktails'];

  // Filtered items
  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  // Navigate lightbox
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section id="gallery" className="relative bg-transparent py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase block">VISUAL PORTFOLIO</span>
            <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
              The Aura Aesthetic
            </h2>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Take a visual journey through our grand dining saloons, delicate plates, and smoked crystal aperitifs.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white border-transparent shadow-[0_2px_10px_rgba(249,115,22,0.2)]'
                    : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 bg-white/5 cursor-pointer shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-400" />

                {/* Inner Hover Contents */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="self-end rounded-full bg-black/80 border border-white/10 p-2 text-orange-400 hover:text-white transition-colors">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-orange-400 uppercase">{item.category}</span>
                    <h4 className="text-base font-serif font-bold text-white mt-1">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
            >
              {/* Close controls */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Arrow controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Active Image Box */}
              <div className="relative max-w-4xl max-h-[70vh] w-full rounded-2xl overflow-hidden border border-white/10 bg-black" onClick={(e) => e.stopPropagation()}>
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              {/* Info captions */}
              <div className="text-center mt-6 space-y-1" onClick={(e) => e.stopPropagation()}>
                <span className="text-xs font-mono tracking-widest text-orange-400 uppercase">
                  {filteredItems[lightboxIndex].category} Offering — {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h3 className="text-xl font-serif font-bold text-white">{filteredItems[lightboxIndex].title}</h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
