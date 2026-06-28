import React from 'react';
import { motion } from 'motion/react';
import { Quote, Award, Sparkles } from 'lucide-react';
import { CHEF_INFO } from '../data';

export default function ChefSection() {
  return (
    <section id="chef" className="relative bg-transparent py-24 border-t border-white/5 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Col (Left 5 cols on desktop) */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-2xl">
              <img
                src={CHEF_INFO.image}
                alt={CHEF_INFO.name}
                className="w-full h-[450px] sm:h-[550px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Overlay Signature */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl">
                <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">EXECUTIVE CREATOR</span>
                <h4 className="text-xl font-serif font-bold text-white mt-1">{CHEF_INFO.name}</h4>
                <p className="text-xs text-white/50 mt-1">Founding Owner & Master Craftsman</p>
              </div>
            </div>
          </div>

          {/* Biography Col (Right 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase block">THE ARTISAN</span>
              <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
                The Creative Philosophy of Chef Vance
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full" />
            </div>

            {/* Editorial quote */}
            <div className="relative pl-8 border-l border-orange-500/30">
              <Quote className="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 -translate-y-2 text-orange-500/20 transform rotate-180 fill-orange-500/5" />
              <p className="text-lg sm:text-xl font-serif italic text-zinc-200 leading-relaxed font-light">
                &ldquo;{CHEF_INFO.quote}&rdquo;
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              {CHEF_INFO.bio}
            </p>

            {/* Accolades checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-8">
              <div className="flex items-start space-x-3">
                <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-orange-400">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Parisian Training</h4>
                  <p className="text-xs text-white/40 mt-0.5 font-light">Spent 4 years honing classical techniques at Alain Ducasse at the Plaza Athénée.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="rounded-lg bg-white/5 border border-white/10 p-1.5 text-red-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Signature Dish</h4>
                  <p className="text-xs text-white/40 mt-0.5 font-light">{CHEF_INFO.signatureDish}. Prepared tableside.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
