import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wine, Star, Eye } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface FeaturedDishesProps {
  onSelectDish?: (item: MenuItem) => void;
}

export default function FeaturedDishes({ onSelectDish }: FeaturedDishesProps) {
  // Extracting top masterpieces based on popularity scores
  const masterpieces = MENU_ITEMS.filter((item) => item.popularityScore >= 9.7);

  return (
    <section id="featured" className="relative bg-transparent py-24 overflow-hidden border-t border-white/5">
      {/* Decorative ambient spots */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-red-600/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-orange-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">CHEF’S MASTERPIECES</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Gastronomic Masterpieces
          </h2>
          <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
            Savor the absolute apex of our culinary creations. Each selection represents years of sensory tuning, 
            precision timing, and sourcing excellence.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Bento/Modern Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {masterpieces.map((item, idx) => {
            // Give different spans for bento layout rhythm
            const spans = idx === 0 
              ? 'lg:col-span-7' 
              : idx === 1 
              ? 'lg:col-span-5' 
              : idx === 2 
              ? 'lg:col-span-5' 
              : 'lg:col-span-7';

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                key={item.id}
                onClick={() => onSelectDish?.(item)}
                className={`group relative overflow-hidden rounded-3xl glass-card p-4 flex flex-col justify-between cursor-pointer hover:border-orange-500/20 hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] ${spans}`}
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/20 text-xs text-orange-400">
                    <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
                    <span className="font-mono font-bold">{item.popularityScore.toFixed(1)}</span>
                  </div>

                  {/* Diet Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {item.dietTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black/80 text-white/80 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Block */}
                <div className="pt-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-zinc-100 group-hover:text-orange-400 transition-colors duration-300 leading-snug">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xl sm:text-2xl font-extrabold text-orange-400">${item.price}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed mt-2 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Sommelier recommendation / calories */}
                  <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    {item.pairing && (
                      <div className="flex items-center space-x-2 text-white/60">
                        <Wine className="h-4 w-4 text-orange-400 flex-shrink-0" />
                        <span className="text-[11px] font-medium tracking-wide">
                          Pairing: <span className="text-white/80">{item.pairing}</span>
                        </span>
                      </div>
                    )}
                    {item.calories && (
                      <span className="text-[10px] font-mono text-white/40 uppercase self-end">
                        {item.calories} kCal
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Quick View Trigger indicator */}
                <div className="absolute inset-0 bg-orange-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <span className="bg-black/85 border border-orange-500/30 text-xs font-mono uppercase tracking-widest text-orange-400 px-4 py-2 rounded-full flex items-center space-x-2 shadow-xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Eye className="h-3.5 w-3.5" />
                    <span>View Gastronomy</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
