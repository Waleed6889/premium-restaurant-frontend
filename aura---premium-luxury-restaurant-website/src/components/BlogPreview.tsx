import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Clock, BookOpen, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';

export default function BlogPreview() {
  return (
    <section id="blog" className="relative bg-transparent py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono tracking-[0.25em] text-orange-400 uppercase block">CULINARY DIARY</span>
            <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
              Chronicles from Aura
            </h2>
            <p className="text-sm text-white/50 font-light leading-relaxed">
              Gain exclusive culinary perspectives, recipe secrets, wine cellar wisdom, and chronicles about sustainable organic husbandry.
            </p>
          </div>

          <button className="group flex items-center space-x-1.5 text-xs font-mono font-bold tracking-widest text-orange-400 hover:text-orange-300 uppercase cursor-pointer">
            <span>Read All Chronicles</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Blog Post List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={post.id}
              className="group flex flex-col justify-between glass-card p-4 overflow-hidden hover:border-orange-500/20 hover:shadow-[0_4px_25px_rgba(249,115,22,0.1)] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-black border border-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 border border-white/10 text-orange-400 text-[9px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex items-center space-x-4 text-[10px] font-mono text-white/40 uppercase">
                  <div className="flex items-center space-x-1">
                    <User className="h-3.5 w-3.5 text-orange-400" />
                    <span className="truncate max-w-[100px]">{post.author.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{post.date.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title and Excerpt */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white/90 group-hover:text-orange-400 transition-colors duration-250 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="border-t border-white/10 mt-6 pt-4">
                <button className="flex items-center space-x-1.5 text-xs font-mono font-bold text-white/50 group-hover:text-orange-400 transition-colors uppercase cursor-pointer">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Unfold Chronicle</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
