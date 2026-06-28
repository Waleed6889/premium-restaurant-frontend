import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="relative bg-transparent py-24 border-t border-white/5">
      {/* Decorative glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <MessageSquareQuote className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">EPICUREAN DIALOGUES</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Critiques & Accolades
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Carousel Slider */}
        <div className="relative rounded-3xl glass-panel p-8 sm:p-14 overflow-hidden">
          {/* Top light bar */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

          {/* Quote mark in background */}
          <Quote className="absolute right-12 bottom-6 h-36 w-36 text-white/[0.02] transform -rotate-12 pointer-events-none fill-white/[0.01] select-none" />

          <div className="relative z-10 space-y-8">
            {/* Stars */}
            <div className="flex justify-center sm:justify-start space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= TESTIMONIALS[activeIndex].rating
                      ? 'fill-orange-400 text-orange-400'
                      : 'text-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Quote content */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-serif text-white leading-relaxed text-center sm:text-left font-light"
              >
                &ldquo;{TESTIMONIALS[activeIndex].comment}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Reviewer Details */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center space-x-4">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="h-14 w-14 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-serif font-bold text-base text-white/90">{TESTIMONIALS[activeIndex].name}</h4>
                  <p className="text-xs text-white/50 font-light mt-0.5">{TESTIMONIALS[activeIndex].role}</p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3 self-center sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono tracking-widest text-white/30">
                  0{activeIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-white/10 bg-white/5 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
