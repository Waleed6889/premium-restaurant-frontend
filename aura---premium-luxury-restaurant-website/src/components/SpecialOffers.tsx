import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clipboard, Check, Percent } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data';

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="offers" className="relative bg-transparent py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Percent className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">EXCLUSIVE CURATIONS</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Seasonal Culinary Privileges
          </h2>
          <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
            Acquire entry into limited seasonal tastings and premium pairings crafted for our most passionate patrons.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={offer.id}
              className="group relative flex flex-col md:flex-row glass-card overflow-hidden hover:border-orange-500/20 hover:shadow-[0_4px_25px_rgba(249,115,22,0.1)] transition-all duration-300"
            >
              {/* Image Col */}
              <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden bg-black">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-[9px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                    {offer.badge}
                  </span>
                </div>
              </div>

              {/* Text Col */}
              <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-orange-400 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center text-[10px] font-mono text-white/40 uppercase tracking-wider">
                    <Calendar className="h-3.5 w-3.5 text-orange-400 mr-1.5" />
                    <span>Until {offer.validUntil}</span>
                  </div>

                  {offer.code && (
                    <button
                      onClick={() => handleCopyCode(offer.code!)}
                      className={`flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                        copiedCode === offer.code
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-white/5 border border-white/10 text-orange-400 hover:text-orange-300 hover:border-white/20'
                      }`}
                    >
                      {copiedCode === offer.code ? (
                        <>
                          <Check className="h-3 w-3" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Clipboard className="h-3 w-3" />
                          <span>Code: {offer.code}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
