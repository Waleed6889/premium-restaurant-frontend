import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck, ArrowRight, Check, Sparkles } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setIsSubmitting(false);
      setEmail('');
    }, 1200);
  };

  // Structured Schema.org Restaurant JSON-LD for Local SEO
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Aura Fine Dining NYC',
    'image': [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '724 Central Park South',
      'addressLocality': 'New York',
      'addressRegion': 'NY',
      'postalCode': '10019',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 40.7644,
      'longitude': -73.9744
    },
    'telephone': '+1-212-555-7788',
    'priceRange': '$$$$',
    'servesCuisine': 'Modern American, Fine Gastronomy, Wagyu, Bluefin Tuna, Caviar',
    'openingHours': [
      'Mo-Th 17:00-22:30',
      'Fr-Sa 16:30-23:30',
      'Su 11:00-15:30',
      'Su 17:00-22:00'
    ],
    'menu': 'https://aura-nyc.com/menu',
    'acceptsReservations': 'True'
  };

  return (
    <footer className="relative bg-transparent border-t border-white/5 pt-20 pb-8 overflow-hidden text-white/50">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />

      {/* Glow highlight */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Column blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-3xl font-serif font-extrabold tracking-widest text-transparent">
                AURA
              </span>
              <div className="h-6 w-[1px] bg-white/10" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-white/60 uppercase">
                Culinary Art
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light max-w-md">
              Aura is a prestigious private dining brand established in Central Park South, New York. We redefine modern American cuisine by combining thermal precision, biodynamic farm sourcing, and expansive acoustic tables spacing.
            </p>

            {/* Newsletter Subscription capture */}
            <div className="space-y-3 max-w-md pt-2">
              <span className="block text-[10px] font-mono tracking-widest text-orange-400 uppercase">THE CHRONICLE DISPATCH</span>
              
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for private cellar releases..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 pr-12"
                  disabled={isSubscribed || isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubscribed || isSubmitting}
                  className="absolute right-1.5 p-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white hover:brightness-115 transition-all disabled:opacity-50 cursor-pointer"
                  aria-label="Subscribe"
                >
                  {isSubscribed ? <Check className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                </button>
              </form>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-1.5 text-[10px] text-emerald-400 font-medium"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Welcome to the Elite Circle. Checking your mailbox shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sitemap links Columns (4 columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="block text-xs font-mono font-bold tracking-widest text-white/80 uppercase">SANCTUARY</span>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-orange-400 transition-colors">Our Heritage</a></li>
                <li><a href="#featured" className="hover:text-orange-400 transition-colors">Chef Vance’s Plates</a></li>
                <li><a href="#menu" className="hover:text-orange-400 transition-colors">Digital Sensory Menu</a></li>
                <li><a href="#experiences" className="hover:text-orange-400 transition-colors">Dining Experiences</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="block text-xs font-mono font-bold tracking-widest text-white/80 uppercase">PRIVILEGES</span>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#booking" className="hover:text-orange-400 transition-colors">Secure Seating</a></li>
                <li><a href="#offers" className="hover:text-orange-400 transition-colors">Seasonal Tastings</a></li>
                <li><a href="#blog" className="hover:text-orange-400 transition-colors">Gastronomy Diary</a></li>
                <li><a href="#faq" className="hover:text-orange-400 transition-colors">Common Queries</a></li>
              </ul>
            </div>
          </div>

          {/* Socials / Direct Contacts (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <span className="block text-xs font-mono font-bold tracking-widest text-white/80 uppercase">THE SOCIAL DIRECT</span>
            
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/aura-nyc"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-500/30 hover:-translate-y-0.5 transition-all"
                aria-label="Instagram link"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/aura-nyc"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-500/30 hover:-translate-y-0.5 transition-all"
                aria-label="Facebook link"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/aura-nyc"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-orange-400 hover:border-orange-500/30 hover:-translate-y-0.5 transition-all"
                aria-label="Twitter link"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <div className="space-y-2 border-t border-white/10 pt-4 text-xs font-light">
              <p className="flex items-center space-x-2">
                <MapPin className="h-3.5 w-3.5 text-orange-400" />
                <span>Central Park South, New York, NY</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-orange-400" />
                <a href="tel:+12125557788" className="hover:text-orange-400 transition-colors">+1 (212) 555-7788</a>
              </p>
            </div>
          </div>

        </div>

        {/* Lower Row Footer (Copyright, local SEO terms, AdSense-safe disclaimer) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-white/30">
          <div>
            &copy; {new Date().getFullYear()} Aura Culinary Art LLC. All rights reserved. Registered USA Fine Dining Mark.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <span className="hover:text-white/50 transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white/50 transition-colors cursor-pointer">Accessibility standard (WCAG 2.2 AA)</span>
            <span className="hover:text-white/50 transition-colors cursor-pointer">Valet parking terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
