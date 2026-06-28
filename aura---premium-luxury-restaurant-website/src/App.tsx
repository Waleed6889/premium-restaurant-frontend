import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import ChefSection from './components/ChefSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingBookingButton from './components/FloatingBookingButton';
import AdSensePlaceholder from './components/AdSensePlaceholder';
import { MenuItem } from './types';

export default function App() {
  const [searchSelectedItem, setSearchSelectedItem] = useState<MenuItem | null>(null);
  const [requestedDish, setRequestedDish] = useState<string | null>(null);

  // When a dish is selected from the Navbar Search overlay, scroll and show details
  const handleSearchSelect = (item: MenuItem) => {
    setSearchSelectedItem(item);
  };

  // When a guest wants to reserve table to taste a specific dish
  const handleReserveWithDish = (dishName: string) => {
    setRequestedDish(dishName);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* Dynamic Background Glows (Frosted Glass theme signature) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[25%] right-[-100px] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-[50%] left-[-200px] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* 1. Header Sticky Navigation */}
      <Navbar onSearchSelect={handleSearchSelect} />

      {/* 2. Hero Section Slideshow and Core CTAs */}
      <Hero />

      {/* 3. About Restaurant Heritage & spacing story */}
      <About />

      {/* AdSense slot: separating primary content to prevent clutter */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder format="leaderboard" id="adsense-hero-divider" className="my-12" />
      </div>

      {/* 4. Chef's Masterpiece Featured Dishes */}
      <FeaturedDishes onSelectDish={handleSearchSelect} />

      {/* 5. Full Digital Sensory Menu with search and filters */}
      <MenuSection
        selectedSearchItem={searchSelectedItem}
        onClearSearchItem={() => setSearchSelectedItem(null)}
        onReserveWithDish={handleReserveWithDish}
      />

      {/* 6. Executive Chef Profile Tribute */}
      <ChefSection />

      {/* 7. Bento Grid Advantages / Why Choose Us */}
      <WhyChooseUs />

      {/* AdSense slot: placed above testimonials for optimized view ratios */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AdSensePlaceholder format="leaderboard" id="adsense-testimonial-divider" className="my-12" />
      </div>

      {/* 8. Editorial Critic Testimonials */}
      <Testimonials />

      {/* 9. Interactive Reservation Engine Seating Concierge */}
      <ReservationSection
        requestedDish={requestedDish}
        onClearRequestedDish={() => setRequestedDish(null)}
      />

      {/* 10. Photo Gallery and Lightbox Modal */}
      <GallerySection />

      {/* 11. Seasonal Tasting Special Offers */}
      <SpecialOffers />

      {/* 12. Blog / Notebook Preview */}
      <BlogPreview />

      {/* 13. Accessible Accordion FAQs */}
      <FAQ />

      {/* 14. Contact Coordinates, Opening Hours, & Vector Interactive Map */}
      <ContactSection />

      {/* 15. Local SEO Rich Sitemap Footer with Schema.org JSON-LD structured script */}
      <Footer />

      {/* 16. Floating Quick Reserve Conversion trigger button */}
      <FloatingBookingButton />

    </div>
  );
}
