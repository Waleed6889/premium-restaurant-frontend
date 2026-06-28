import React from 'react';
import { motion } from 'motion/react';
import { VolumeX, Wine, Car, Leaf, Award, GlassWater } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      id: 'point-1',
      icon: <VolumeX className="h-6 w-6 text-orange-400" />,
      title: 'Acoustic Privacy & Spacing',
      desc: 'All dining configurations are meticulously spaced over 8 feet apart, granting unmatched vocal privacy for critical corporate deals or intimate romance.',
      gridClass: 'md:col-span-2 lg:col-span-8',
      bgSpot: 'bg-red-500/5',
    },
    {
      id: 'point-2',
      icon: <Wine className="h-6 w-6 text-orange-400" />,
      title: 'Curated 10,000+ Bottle Cellar',
      desc: 'Sip on rare organic Grand Cru reserves curated by master sommeliers, including direct allocations from Burgundy, Sancerre, and Napa.',
      gridClass: 'md:col-span-1 lg:col-span-4',
      bgSpot: 'bg-orange-500/5',
    },
    {
      id: 'point-3',
      icon: <Car className="h-6 w-6 text-orange-400" />,
      title: 'White-glove Valet Service',
      desc: 'Arrive in comfort with premium, secure valet parking directly at our main Central Park South entry gates, validated for our premium diners.',
      gridClass: 'md:col-span-1 lg:col-span-4',
      bgSpot: 'bg-orange-500/5',
    },
    {
      id: 'point-4',
      icon: <Leaf className="h-6 w-6 text-orange-400" />,
      title: 'Pure Farm-to-Fork Sourcing',
      desc: 'We support local ecological families. Zero processed additives, zero hormone meats—just pure, seasonal, biological food harvested in harmony with solar phases.',
      gridClass: 'md:col-span-2 lg:col-span-8',
      bgSpot: 'bg-red-500/5',
    },
  ];

  return (
    <section id="experiences" className="relative bg-transparent py-24 border-t border-white/5">
      {/* Glow spots */}
      <div className="absolute bottom-12 right-1/4 w-80 h-80 bg-red-600/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Award className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">THE AURA EXPERIENCE</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Why Discerning Guests Choose Aura
          </h2>
          <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
            Our luxury standard is defined by details that go unnoticed, but are felt deeply on every visit.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {points.map((p, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={p.id}
              className={`group relative overflow-hidden rounded-3xl glass-card p-8 flex flex-col justify-between hover:border-orange-500/20 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(249,115,22,0.1)] ${p.gridClass}`}
            >
              {/* Soft background ambient glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${p.bgSpot} blur-3xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

              <div className="space-y-6">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-zinc-100 group-hover:text-orange-400 transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Decorative bento indicators */}
              <div className="mt-8 flex items-center space-x-1.5 text-white/40 text-[10px] font-mono uppercase tracking-widest group-hover:text-orange-400 transition-colors">
                <span>0{idx + 1}</span>
                <div className="h-[1px] w-6 bg-white/10 group-hover:bg-orange-500 transition-colors" />
                <span>Standard Code</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
