import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Wine, Flame, Sparkles, Check, ArrowRight, X, Heart, Clock } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import AdSensePlaceholder from './AdSensePlaceholder';

interface MenuSectionProps {
  selectedSearchItem?: MenuItem | null;
  onClearSearchItem?: () => void;
  onReserveWithDish?: (dishName: string) => void;
}

export default function MenuSection({
  selectedSearchItem,
  onClearSearchItem,
  onReserveWithDish
}: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDietTags, setSelectedDietTags] = useState<string[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Modal State
  const [detailedItem, setDetailedItem] = useState<MenuItem | null>(null);

  // If a dish was searched via Navbar, open it in the modal automatically
  useEffect(() => {
    if (selectedSearchItem) {
      setDetailedItem(selectedSearchItem);
      // Also scroll to menu section to make it clear
      const menuSec = document.getElementById('menu');
      if (menuSec) {
        menuSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedSearchItem]);

  const categories = [
    { value: 'all', label: 'All Offerings' },
    { value: 'starters', label: 'Starters' },
    { value: 'mains', label: 'Mains' },
    { value: 'signature', label: 'Signature Masterpieces' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'cocktails', label: 'Artisanal Cocktails' },
  ];

  const dietFilterOptions = ['Vegan', 'Gluten-Free', 'Chef Special', 'Nut-Free', 'Contains Alcohol'];

  // Toggle dietary tags
  const handleToggleDietTag = (tag: string) => {
    setSelectedDietTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter items
  const filteredItems = MENU_ITEMS.filter((item) => {
    // Category check
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Search check
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Diet tags check (must match all selected tags)
    const matchesDiet = selectedDietTags.every((tag) => item.dietTags.includes(tag as any));

    return matchesCategory && matchesSearch && matchesDiet;
  });

  return (
    <section id="menu" className="relative bg-transparent py-24 border-t border-white/5">
      {/* Decorative blurred glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase block">GASTRONOMIC CARD</span>
            <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
              The Aura Sensory Menu
            </h2>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Explore our curated offerings. Each plate is engineered to balance visual contrast, flavor complexity, and thermal perfection.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                  : 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dietary Multi-Select Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mr-2">
            <Filter className="h-3.5 w-3.5 text-orange-400" />
            <span>FILTER DIET:</span>
          </div>
          {dietFilterOptions.map((tag) => {
            const isSelected = selectedDietTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleToggleDietTag(tag)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                    : 'bg-transparent border-white/10 text-white/40 hover:text-white hover:border-white/20'
                }`}
              >
                {isSelected && <Check className="h-3 w-3 mr-0.5" />}
                <span>{tag}</span>
              </button>
            );
          })}
          {selectedDietTags.length > 0 && (
            <button
              onClick={() => setSelectedDietTags([])}
              className="text-xs text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer ml-auto font-mono"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* AdSense Placement space - Horizontal Banner Leaderboard unit */}
        <AdSensePlaceholder format="leaderboard" id="adsense-menu-top" className="my-8" />

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setDetailedItem(item)}
                className="group relative flex flex-col justify-between glass-card p-5 hover:border-orange-500/20 hover:shadow-[0_4px_25px_rgba(249,115,22,0.1)] transition-all duration-300 cursor-pointer"
              >
                {/* Upper block with Image */}
                <div className="space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden bg-black border border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating diet labels */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                      {item.dietTags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-black/75 text-[8px] font-mono tracking-widest text-white/80 px-2 py-0.5 rounded uppercase border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-serif font-bold text-lg text-zinc-200 group-hover:text-orange-400 transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-mono text-base font-bold text-orange-400">${item.price}</span>
                    </div>
                    <p className="text-xs text-white/50 font-light mt-2 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Lower wine recommendations & actions */}
                <div className="border-t border-white/10 mt-5 pt-4 flex items-center justify-between">
                  {item.pairing ? (
                    <div className="flex items-center space-x-1.5 text-white/40 text-[10px]">
                      <Wine className="h-3 w-3 text-orange-400 flex-shrink-0" />
                      <span className="truncate max-w-[150px]">{item.pairing}</span>
                    </div>
                  ) : (
                    <div className="text-[10px] text-white/30">Aura Reserve Collection</div>
                  )}

                  <span className="flex items-center text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl mt-10 bg-white/5">
            <Filter className="h-8 w-8 text-white/30 mx-auto" />
            <p className="text-sm text-white/40 mt-4">We couldn&rsquo;t find any items matching your selected filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSelectedDietTags([]);
              }}
              className="text-xs text-orange-400 mt-2 font-mono hover:underline cursor-pointer"
            >
              Reset all menu filters
            </button>
          </div>
        )}
      </div>

      {/* DISH DETAIL DIALOG (MODAL) */}
      <AnimatePresence>
        {detailedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setDetailedItem(null);
                onClearSearchItem?.();
              }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed inset-x-4 top-[8%] sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 w-full max-w-2xl bg-black/80 border border-white/10 rounded-3xl shadow-2xl p-6 overflow-y-auto max-h-[84vh] backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setDetailedItem(null);
                  onClearSearchItem?.();
                }}
                className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left col: Image & core details */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <img src={detailedItem.image} alt={detailedItem.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {detailedItem.calories && (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-white/40">
                      <span>NUTRITIONAL INFORMATION</span>
                      <span className="text-white/80">{detailedItem.calories} kCal</span>
                    </div>
                  )}

                  <div className="flex items-center space-x-2 text-white/40 text-[10px] font-mono uppercase bg-white/5 p-3 rounded-xl border border-white/10">
                    <Clock className="h-3.5 w-3.5 text-orange-400" />
                    <span>Avg prep time: 15–20 mins</span>
                  </div>
                </div>

                {/* Right col: Epicurean narrative */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Header with tags */}
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase">
                        {detailedItem.category} Offering
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">{detailedItem.name}</h3>
                      <div className="font-mono text-2xl font-black text-orange-400 mt-2">${detailedItem.price}</div>
                    </div>

                    {/* Diet pills */}
                    <div className="flex flex-wrap gap-2">
                      {detailedItem.dietTags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/5 text-white/80 text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Culinary Description */}
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                      {detailedItem.description}
                    </p>

                    {/* Wine Pairing */}
                    {detailedItem.pairing && (
                      <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-semibold text-orange-400">
                          <Wine className="h-4 w-4 text-orange-400" />
                          <span>CHEF&rsquo;S SOMMELIER PAIRING</span>
                        </div>
                        <p className="text-xs text-white/50 font-light leading-relaxed">
                          We recommend pairing this delicacy with <span className="text-white font-medium">{detailedItem.pairing}</span>. The biological mineral tones enhance the fat structure, balancing your palate.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Reservation CTA */}
                  <div className="pt-6 border-t border-white/10 mt-8">
                    <button
                      onClick={() => {
                        setDetailedItem(null);
                        onClearSearchItem?.();
                        onReserveWithDish?.(detailedItem.name);
                        
                        // Scroll to booking section
                        const bookingSec = document.getElementById('booking');
                        if (bookingSec) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = bookingSec.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                          });
                        }
                      }}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all cursor-pointer"
                    >
                      <span>Reserve Table & Request This Dish</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
