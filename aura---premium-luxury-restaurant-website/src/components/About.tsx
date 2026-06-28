import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Landmark, GlassWater } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Leaf className="h-5 w-5 text-orange-400" />,
      title: 'Biodynamic Sourcing',
      desc: '100% of our herbs and organic greens are harvested daily from our partner biodynamic farms in upstate New York.',
    },
    {
      icon: <Landmark className="h-5 w-5 text-red-400" />,
      title: 'Architectural Heritage',
      desc: 'Housed in a beautifully restored landmark brownstone building, fusing historic raw stone with luxurious brass aesthetics.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-orange-400" />,
      title: 'Elite Craftsmanship',
      desc: 'Every cut, reduction, and smoke infusion is executed with absolute precision under triple-Michelin trained veterans.',
    },
    {
      icon: <GlassWater className="h-5 w-5 text-red-400" />,
      title: 'Grand Cellar Archive',
      desc: 'Access our private cellar of over 10,000 vintage labels, curated by world-class certified sommeliers.',
    }
  ];

  return (
    <section id="about" className="relative bg-transparent py-24 overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Images Grid (Left 5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
                  alt="Aura Executive Sommelier Lounge"
                  className="w-full object-cover h-[350px] sm:h-[450px] group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">THE CELLAR ROOM</span>
                  <h4 className="text-lg font-serif font-semibold text-white mt-1">Our Private Dining Sanctuary</h4>
                </div>
              </motion.div>

              {/* Overlapping small image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -bottom-10 -right-6 hidden sm:block w-48 overflow-hidden rounded-xl border border-white/10 bg-black/60 p-2 shadow-2xl backdrop-blur-md"
              >
                <img
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=400&q=80"
                  alt="Aura Fine Culinary Preparation"
                  className="rounded-lg object-cover h-32 w-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Text Content (Right 7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase block">OUR HERITAGE</span>
              <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
                A Symphony of Pure Taste, Spaced for Intimate Dialogues.
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full" />
            </div>

            <p className="text-base text-white/50 leading-relaxed font-light">
              Founded on Central Park South in 2018, Aura is built around a singular uncompromising philosophy: 
              that fine dining should be a restorative, luxurious, and highly spiritual encounter. Our spaces are curated 
              with vast physical spacing, giving each table a profound realm of acoustic privacy and intimate comfort.
            </p>

            <p className="text-sm text-white/40 leading-relaxed font-light">
              Under the creative leadership of Chef Marcus Vance, our menus explore the frontier of modern American gastronomy. 
              By partnering directly with specialized bio-organic agricultural families, we harvest rare crops, 
              ethically-raised game, and ocean crudos that reflect pure flavor profiles, free from heavy processed additives.
            </p>

            {/* Structured Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl glass-card hover:border-orange-500/20">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                    <p className="text-xs text-white/40 mt-1 leading-relaxed font-light">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
