import React from 'react';

interface AdSensePlaceholderProps {
  id?: string;
  format: 'leaderboard' | 'rectangle' | 'vertical';
  className?: string;
}

export default function AdSensePlaceholder({ id = 'adsense-unit', format, className = '' }: AdSensePlaceholderProps) {
  // Simulating luxury sponsors to fit perfectly in a premium dining context
  const ads = {
    leaderboard: {
      title: 'Pristine Horizon',
      tagline: 'The All-Electric Grand Tourer. Redefining Automotive Luxury.',
      sponsor: 'Horizon Motors USA',
      linkText: 'Experience Pure Innovation',
      bg: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
    },
    rectangle: {
      title: 'Monarch Chrono',
      tagline: 'Hand-assembled caliber. Co-axial escapement. 72-hour power reserve.',
      sponsor: 'Monarch Horology New York',
      linkText: 'Discover the Collection',
      bg: 'linear-gradient(135deg, #0d0d0d 0%, #262626 100%)',
    },
    vertical: {
      title: 'AeroCuisine Pro',
      tagline: 'Professional grade kitchenware designed for Michelin-starred homes.',
      sponsor: 'AeroCuisine',
      linkText: 'Shop the Chef Series',
      bg: 'linear-gradient(135deg, #121212 0%, #1f1f1f 100%)',
    }
  };

  const ad = ads[format];

  return (
    <div
      id={id}
      className={`relative mx-auto my-6 overflow-hidden rounded-xl border border-amber-500/10 transition-all duration-300 hover:border-amber-500/20 ${className}`}
      style={{
        background: ad.bg,
        maxWidth: format === 'leaderboard' ? '970px' : format === 'rectangle' ? '336px' : '300px',
        minHeight: format === 'leaderboard' ? '90px' : format === 'rectangle' ? '280px' : '600px',
        width: '100%',
      }}
    >
      {/* Tiny Ad Tag */}
      <div className="absolute top-2 right-3 z-10 text-[9px] font-mono tracking-wider uppercase text-zinc-500">
        Sponsored / AdSense Slot
      </div>

      <div className="flex h-full flex-col justify-between p-4 sm:p-6">
        {/* Format layout */}
        {format === 'leaderboard' && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-full gap-4 pt-2">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">{ad.sponsor}</div>
              <h4 className="text-sm font-serif font-semibold text-zinc-200 mt-0.5">{ad.title} — <span className="text-zinc-400 font-sans font-normal">{ad.tagline}</span></h4>
            </div>
            <button className="self-start sm:self-center bg-zinc-800 hover:bg-zinc-700 text-xs text-amber-400 hover:text-amber-300 px-4 py-2 rounded-full border border-zinc-700 transition-colors duration-200 cursor-pointer">
              {ad.linkText}
            </button>
          </div>
        )}

        {format === 'rectangle' && (
          <div className="flex flex-col justify-between h-full pt-4">
            <div>
              <div className="text-[9px] font-mono tracking-widest text-amber-500 uppercase">{ad.sponsor}</div>
              <h4 className="text-base font-serif font-bold text-zinc-100 mt-1">{ad.title}</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{ad.tagline}</p>
            </div>
            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-xs text-amber-400 hover:text-amber-300 py-2.5 rounded-lg border border-zinc-700 transition-colors duration-200 mt-4 cursor-pointer text-center">
              {ad.linkText}
            </button>
          </div>
        )}

        {format === 'vertical' && (
          <div className="flex flex-col justify-between h-full pt-6">
            <div className="space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">{ad.sponsor}</div>
              <h4 className="text-lg font-serif font-bold text-zinc-100 leading-snug">{ad.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{ad.tagline}</p>
              
              {/* Abstract decorative graphic for vertical layout */}
              <div className="h-32 rounded-lg bg-zinc-900 border border-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />
                <div className="w-16 h-16 rounded-full border border-amber-500/20 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-amber-500/10" />
                </div>
              </div>
            </div>
            <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-xs text-amber-400 hover:text-amber-300 py-3 rounded-lg border border-zinc-700 transition-colors duration-200 cursor-pointer text-center">
              {ad.linkText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
