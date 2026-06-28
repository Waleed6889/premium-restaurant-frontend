import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Calendar, ArrowDown, MapPin, Award, Star } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85',
      tagline: 'MICHELIN RECOMMENDED • CENTRAL PARK SOUTH, NYC',
      heading: 'Where Culinary Art Meets Timeless Luxury',
      subheading: 'Indulge in rare sensory dining experiences. Crafting modern American gastronomy using dry-aged masterpieces, Petrossian caviar, and Grand Cru pairings.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=85',
      tagline: 'A5 MIYAZAKI WAGYU • ROASTED CHANTERELLES',
      heading: 'Precision Searing. Legendary Tenderness.',
      subheading: 'Savor certified Japanese A5 Wagyu ribeye, perfectly flamed tableside, complemented with parsnip silk and Perigord black truffle shavings.'
    },
    {
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1920&q=85',
      tagline: 'CURATED APERITIFS • SOMMELIER LOUNGE',
      heading: 'Artisanal Spirits & Smoked Hickory Vintages',
      subheading: 'Each cocktail is an absolute canvas. Smoked tableside over hand-carved crystal ice spheres with organic floral distillates.'
    }
  ];

  // Slideshow interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
        </AnimatePresence>
        {/* Dark radial gradients to frame content perfectly */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#09090b_90%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950/80 to-transparent" />
      </div>

      {/* Floating Badges */}
      <div className="absolute top-28 left-4 sm:left-12 z-20 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 w-fit"
        >
          <Award className="h-4 w-4 text-orange-400" />
          <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">Five-Star Diamond Winner</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex items-center space-x-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 w-fit"
        >
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-3 w-3 fill-orange-500 text-orange-500" />
          ))}
          <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase ml-1">Elite Standard</span>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold w-fit">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                {slides[currentSlide].tagline}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-sans font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl leading-[1.05] uppercase">
                {slides[currentSlide].heading.includes('Meets') ? (
                  <>
                    Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-300">Culinary Art</span> <br /> Meets Luxury
                  </>
                ) : slides[currentSlide].heading.includes('Searing') ? (
                  <>
                    Precision Searing. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-300">Legendary Tenderness.</span>
                  </>
                ) : (
                  <>
                    Artisanal Spirits & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-300">Smoked Vintages.</span>
                  </>
                )}
              </h1>

              {/* Subheading */}
              <p className="max-w-2xl text-base text-white/50 sm:text-lg md:text-xl font-light leading-relaxed">
                {slides[currentSlide].subheading}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('booking')}
              className="group flex items-center space-x-2 rounded-sm bg-white text-black hover:bg-white/90 px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Reservation</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScrollTo('menu')}
              className="group flex items-center space-x-2 rounded-sm border border-white/20 hover:border-white bg-transparent hover:bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 cursor-pointer"
            >
              <span>View Menu</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Quick Info Bar for Local SEO and Conversions */}
      <div className="absolute bottom-12 left-0 right-0 z-20 hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center space-x-4 border-r border-white/10 pr-6">
              <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400 border border-orange-500/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">LOCATION</span>
                <span className="font-sans text-sm font-semibold text-white">Central Park South, NYC</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-r border-white/10 px-6">
              <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400 border border-orange-500/20">
                <Star className="h-5 w-5 fill-orange-400" />
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">ACCOLADES</span>
                <span className="font-sans text-sm font-semibold text-white">Recommended by Michelin Guide</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 pl-6">
              <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400 border border-orange-500/20">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">AVAILABILITY</span>
                <span className="font-sans text-sm font-semibold text-white">Seating open up to 90 days out</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down Prompt */}
      <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleScrollTo('about')}>
        <span className="text-[9px] font-mono tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
