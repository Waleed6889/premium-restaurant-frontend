import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Search, Calendar, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface NavbarProps {
  onSearchSelect?: (item: MenuItem) => void;
}

export default function Navbar({ onSearchSelect }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<MenuItem[]>([]);

  // Track scrolling to apply sticky effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update search results
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = MENU_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.dietTags.some((tag) => tag.toLowerCase().includes(query))
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
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

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Featured', id: 'featured' },
    { name: 'Menu', id: 'menu' },
    { name: 'Chef', id: 'chef' },
    { name: 'Experiences', id: 'experiences' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      {/* Primary Navigation */}
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex cursor-pointer items-center space-x-3"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-400 rounded-lg shadow-md flex-shrink-0" />
              <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-2xl font-bold tracking-tight uppercase text-transparent">
                AURA
              </span>
              <div className="hidden h-5 w-[1px] bg-white/10 sm:block" />
              <span className="hidden text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase sm:block">
                Culinary Art
              </span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white/60 hover:text-orange-400 transition-colors duration-200 cursor-pointer rounded-full hover:bg-white/5"
                aria-label="Search menu"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => handleScrollTo('booking')}
                className="group relative flex items-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>Reserve Table</span>
              </button>
            </div>

            {/* Mobile Actions / Toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white/60 hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                aria-label="Search menu"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/70 hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (Overlay and Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black/60 border-l border-white/10 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-orange-400 rounded-md shadow-sm" />
                    <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-xl font-bold tracking-tight uppercase text-transparent">
                      AURA
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-full border border-white/10 text-white/60 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col space-y-4 py-8">
                  {navLinks.map((link, i) => (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={link.id}
                      onClick={() => handleScrollTo(link.id)}
                      className="text-left text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors py-2 cursor-pointer"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => handleScrollTo('booking')}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Reserve A Table</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Full-Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-lg flex flex-col p-6 sm:p-12 md:p-24"
          >
            <div className="mx-auto w-full max-w-3xl flex-1 flex flex-col">
              {/* Search Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-900">
                <div className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>Interactive Culinary Search</span>
                </div>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors duration-200 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search dishes, ingredients (e.g., Wagyu, Lobster, Truffle)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-14 pr-6 py-4 text-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  autoFocus
                />
              </div>

              {/* Search Results */}
              <div className="flex-1 overflow-y-auto mt-8 pr-2">
                {searchQuery.trim() === '' ? (
                  <div className="text-center py-12 text-zinc-500">
                    <p className="text-sm">Type above to query Aura’s premium menu and reserve special ingredients.</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {['Wagyu', 'Caviar', 'Sea Bass', 'Truffle', 'Gluten-Free', 'Cocktails'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-400 hover:text-amber-400 px-3 py-1.5 rounded-full border border-zinc-800/80 transition-colors duration-200 cursor-pointer"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-4">
                    <p className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-4">
                      Found {searchResults.length} gastronomic masterpieces
                    </p>
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                          if (onSearchSelect) onSearchSelect(item);
                          handleScrollTo('menu');
                        }}
                        className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/30 hover:bg-zinc-900 border border-zinc-900/50 hover:border-amber-500/20 transition-all duration-300 cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 rounded-lg object-cover border border-zinc-800 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif font-bold text-zinc-200 group-hover:text-amber-400 transition-colors">
                              {item.name}
                            </h4>
                            <span className="font-mono text-sm text-amber-500 font-semibold">${item.price}</span>
                          </div>
                          <p className="text-xs text-zinc-400 line-clamp-1 mt-1">{item.description}</p>
                          <div className="flex gap-1.5 mt-2">
                            {item.dietTags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded-md font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-zinc-500">
                    <p className="text-sm">We couldn’t find any dish matching &ldquo;{searchQuery}&rdquo;.</p>
                    <p className="text-xs mt-1">Our chefs are highly adaptive. You can request customized dishes during your reservation.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
