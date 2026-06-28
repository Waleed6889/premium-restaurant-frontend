import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Car, Award, ChevronRight, HelpCircle } from 'lucide-react';
import AdSensePlaceholder from './AdSensePlaceholder';

export default function ContactSection() {
  const hours = [
    { days: 'Monday – Thursday', time: '5:00 PM – 10:30 PM' },
    { days: 'Friday – Saturday', time: '4:30 PM – 11:30 PM' },
    { days: 'Sunday Brunch', time: '11:00 AM – 3:30 PM' },
    { days: 'Sunday Dinner', time: '5:00 PM – 10:00 PM' }
  ];

  return (
    <section id="contact" className="relative bg-transparent py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <MapPin className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">LOCAL SIGNAL</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Location & Hours
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Coordinates & Hours (Left 4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Hours card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />
              <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
                <Clock className="h-5 w-5 text-orange-400" />
                <h3 className="font-serif font-bold text-lg text-white/90">Dining Hours</h3>
              </div>
              <div className="space-y-4">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs sm:text-sm border-b border-white/5 pb-3 last:border-none last:pb-0">
                    <span className="text-white/50 font-light">{h.days}</span>
                    <span className="font-mono text-white/90 font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinates & Contact card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 relative overflow-hidden space-y-6">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />
              
              <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                <Award className="h-5 w-5 text-orange-400" />
                <h3 className="font-serif font-bold text-lg text-white/90">The Sanctuary</h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-white/30 uppercase">ADDRESS</span>
                    <span className="text-sm font-semibold text-white/90 leading-relaxed block">
                      724 Central Park South,<br />New York, NY 10019
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-white/30 uppercase">RESERVATIONS DESK</span>
                    <a href="tel:+12125557788" className="text-sm font-semibold text-white/90 hover:text-orange-400 transition-colors">
                      +1 (212) 555-7788
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Car className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-white/30 uppercase">VALET SERVICE</span>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      White-glove valet staging directly at the front gates. Validated for dinner patrons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Stylized High-contrast Local SVG Map (Middle 5 Columns) */}
          <div className="lg:col-span-5 rounded-3xl glass-panel p-4 relative overflow-hidden h-[450px] flex flex-col justify-between">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
            
            {/* SVG Interactive Map representation of Central Park South */}
            <div className="relative flex-1 rounded-2xl bg-black/80 overflow-hidden border border-white/10">
              <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Central Park Block */}
                <rect x="0" y="0" width="500" height="120" fill="#0d1b11" fillOpacity="0.4" />
                <path d="M0 120 L500 120" stroke="#1f2d23" strokeWidth="2" strokeDasharray="4 4" />
                <text x="250" y="65" fill="#4ade80" fillOpacity="0.3" fontSize="11" fontFamily="monospace" letterSpacing="0.3em" textAnchor="middle">
                  CENTRAL PARK (OASIS)
                </text>

                {/* Road Grids (Sleek tech lines) */}
                {/* Central Park South (W 59th St) */}
                <rect x="0" y="140" width="500" height="40" fill="#18181b" fillOpacity="0.3" />
                <line x1="0" y1="140" x2="500" y2="140" stroke="#27272a" strokeWidth="1" />
                <line x1="0" y1="180" x2="500" y2="180" stroke="#27272a" strokeWidth="1" />
                <text x="250" y="164" fill="#a1a1aa" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="0.2em" textAnchor="middle">
                  CENTRAL PARK SOUTH (W 59TH ST)
                </text>

                {/* 5th Avenue */}
                <rect x="360" y="120" width="45" height="280" fill="#18181b" fillOpacity="0.3" />
                <line x1="360" y1="120" x2="360" y2="400" stroke="#27272a" strokeWidth="1" />
                <line x1="405" y1="120" x2="405" y2="400" stroke="#27272a" strokeWidth="1" />
                
                {/* Rotate 5th ave text */}
                <text x="388" y="280" fill="#a1a1aa" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="0.2em" textAnchor="middle" transform="rotate(-90, 388, 280)">
                  5TH AVENUE
                </text>

                {/* W 58th St */}
                <rect x="0" y="260" width="500" height="30" fill="#18181b" fillOpacity="0.2" />
                <line x1="0" y1="260" x2="500" y2="260" stroke="#27272a" strokeWidth="0.5" />
                <line x1="0" y1="290" x2="500" y2="290" stroke="#27272a" strokeWidth="0.5" />

                {/* Neighborhood landmarks */}
                <circle cx="430" cy="200" r="4" fill="#ef4444" fillOpacity="0.4" />
                <text x="440" y="203" fill="#71717a" fontSize="8" fontFamily="sans-serif">The Plaza Hotel</text>

                <circle cx="100" cy="330" r="4" fill="#ef4444" fillOpacity="0.4" />
                <text x="110" y="333" fill="#71717a" fontSize="8" fontFamily="sans-serif">Carnegie Hall</text>

                {/* Aura Sanctuary Indicator (Glorious Glowing Radar beacon!) */}
                <g className="cursor-pointer">
                  {/* Glowing Radar concentric waves */}
                  <circle cx="210" cy="160" r="18" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.15" />
                  <circle cx="210" cy="160" r="32" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.08" />
                  
                  {/* Center pin */}
                  <circle cx="210" cy="160" r="6" fill="#f97316" />
                  <circle cx="210" cy="160" r="6" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  
                  {/* Tooltip Label */}
                  <rect x="165" y="185" width="90" height="24" rx="6" fill="#000000" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
                  <text x="210" y="200" fill="#f97316" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                    AURA NYC
                  </text>
                </g>
              </svg>

              {/* Float Map Utility Overlay for tactile agency feel */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/90 border border-white/10 rounded-xl p-3 flex items-center justify-between text-[11px]">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white/70 font-mono">White-glove Valet Active</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Central+Park+South+New+York"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors uppercase font-mono font-bold hover:underline"
                >
                  Direct GPS
                </a>
              </div>
            </div>
            
            <p className="text-[11px] text-white/40 font-light leading-relaxed mt-3 px-1 text-center">
              Our main entrance is positioned directly on Central Park South between 6th Avenue and 7th Avenue, next to the historic park walk.
            </p>
          </div>

          {/* Col 3: Vertical AdSense Slot for Monetization (Right 3 Columns) */}
          <div className="lg:col-span-3 h-[450px] flex items-center justify-center">
            <AdSensePlaceholder format="vertical" id="adsense-contact-side" className="m-0 h-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
