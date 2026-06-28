import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative bg-transparent py-24 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <HelpCircle className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">FAQ ENCYCLOPEDIA</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Frequently Asked Queries
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:border-orange-500/20 hover:shadow-[0_4px_20px_rgba(249,115,22,0.05)]"
              >
                {/* Header button (Accessible button, keyboard navigable, screen reader aware) */}
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left text-white/90 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className="flex-shrink-0 rounded-full bg-white/5 border border-white/10 p-1.5 text-white/50 group-hover:text-orange-400">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/10 text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
