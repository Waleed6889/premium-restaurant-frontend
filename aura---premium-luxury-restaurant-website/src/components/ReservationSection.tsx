import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, Compass, ShieldAlert, Sparkles, CheckCircle2, Loader2, ArrowRight, X, Phone, Mail, Award, MapPin } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationSectionProps {
  requestedDish?: string | null;
  onClearRequestedDish?: () => void;
}

export default function ReservationSection({
  requestedDish,
  onClearRequestedDish
}: ReservationSectionProps) {
  // Booking Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    seatingPreference: 'Main Dining Room',
    dietaryNotes: '',
  });

  const [activeDish, setActiveDish] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Reservation | null>(null);
  const [pastBookings, setPastBookings] = useState<Reservation[]>([]);

  // Available Time Slots
  const timeSlots = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'];

  // Seating options
  const seatingOptions = [
    { value: 'Main Dining Room', label: 'Grand Dining Room', desc: 'Elegant chandeliers, lively ambient music' },
    { value: 'Sommelier Lounge', label: 'Sommelier Wine Cellar Lounge', desc: 'Surrounded by rare vintages, quieter acoustic privacy' },
    { value: 'Grand Solarium', label: 'Grand Solarium', desc: 'Lush plants, starlit glass canopy ceilings' },
    { value: 'Skyline Patio', label: 'Skyline Patio Lounge', desc: 'Outdoor heated balcony, Central Park vistas' }
  ];

  // Load existing bookings from local storage
  useEffect(() => {
    const saved = localStorage.getItem('aura_reservations');
    if (saved) {
      try {
        setPastBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Sync requested dish from menu selection
  useEffect(() => {
    if (requestedDish) {
      setActiveDish(requestedDish);
      setFormData((prev) => ({
        ...prev,
        dietaryNotes: prev.dietaryNotes 
          ? `${prev.dietaryNotes} (Requested Dish: ${requestedDish})` 
          : `Requested Dish: ${requestedDish}`
      }));
    }
  }, [requestedDish]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: dateStr }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.time || !formData.date) {
      return;
    }

    setIsSubmitting(true);

    // Simulate elite verification system (adds a highly premium touch!)
    setTimeout(() => {
      const code = 'AURA-' + Math.floor(1000 + Math.random() * 9000);
      const newBooking: Reservation = {
        id: code,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        seatingPreference: formData.seatingPreference,
        dietaryNotes: formData.dietaryNotes,
        status: 'confirmed',
      };

      const updatedBookings = [newBooking, ...pastBookings];
      setPastBookings(updatedBookings);
      localStorage.setItem('aura_reservations', JSON.stringify(updatedBookings));

      setConfirmedBooking(newBooking);
      setIsSubmitting(false);
      
      // Clean request
      onClearRequestedDish?.();
      setActiveDish(null);
    }, 1800);
  };

  // Delete a reservation
  const handleCancelBooking = (id: string) => {
    const filtered = pastBookings.filter((b) => b.id !== id);
    setPastBookings(filtered);
    localStorage.setItem('aura_reservations', JSON.stringify(filtered));
    if (confirmedBooking?.id === id) {
      setConfirmedBooking(null);
    }
  };

  return (
    <section id="booking" className="relative bg-transparent py-24 border-t border-white/5">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-red-600/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-orange-500/[0.01] blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <Sparkles className="h-4 w-4 text-orange-400" />
            <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">REAL-TIME SEATING CONCIERGE</span>
          </div>
          <h2 className="text-3xl font-serif font-extrabold tracking-tight text-white sm:text-5xl">
            Secure Your Table
          </h2>
          <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
            Please fill out your parameters. Due to our extensive physical table-spacing spacing, weekend lunch and dinner slots fill up quickly.
          </p>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Booking Form Column (Left 7 Columns) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-10 relative overflow-hidden">
            
            {/* Ambient linear top light */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <AnimatePresence mode="wait">
              {!confirmedBooking ? (
                // BOOKING VIEW
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-white">Reserve Gastronomy Seating</h3>
                    {activeDish && (
                      <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md text-orange-400">
                        <span>Dish: {activeDish}</span>
                        <X className="h-3 w-3 cursor-pointer" onClick={() => { setActiveDish(null); onClearRequestedDish?.(); }} />
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white/60">SELECT DATE</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50"
                        />
                      </div>
                    </div>

                    {/* Guests count */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white/60">GUEST COUNT</label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500/50 appearance-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num} className="bg-zinc-900 text-white">
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60">SEATING PREFERENCE</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {seatingOptions.map((opt) => (
                        <div
                          key={opt.value}
                          onClick={() => setFormData((prev) => ({ ...prev, seatingPreference: opt.value }))}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                            formData.seatingPreference === opt.value
                              ? 'bg-orange-500/5 border-orange-500/30 shadow-inner'
                              : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">{opt.label}</span>
                            <div className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center ${
                              formData.seatingPreference === opt.value
                                ? 'border-orange-500 bg-orange-500'
                               : 'border-white/20'
                            }`}>
                              {formData.seatingPreference === opt.value && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-[11px] text-white/40 mt-1 font-light leading-snug">{opt.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60">SELECT DINING TIME</label>
                    <div className="flex flex-wrap gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, time }))}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase border transition-all duration-200 cursor-pointer ${
                            formData.time === time
                              ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white border-transparent font-bold'
                              : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white/60">FULL NAME</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Sterling Archer"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-widest text-white/60">PHONE NUMBER</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +1 (555) 019-2831"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. sterling@aura.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50"
                    />
                  </div>

                  {/* Dietary notes */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60">ALLERGENS & DIETARY NOTES</label>
                    <textarea
                      name="dietaryNotes"
                      rows={3}
                      placeholder="List any life-threatening allergies, gluten intolerances, or special milestones (anniversary, birthday)..."
                      value={formData.dietaryNotes}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Verifying Calendar Spacing...</span>
                      </>
                    ) : (
                      <>
                        <span>Secure Reservation Seating</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {/* Dress Code Prompt */}
                  <div className="flex items-start space-x-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <ShieldAlert className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-semibold text-white/85">Aura Dress Code Standard</h5>
                      <p className="text-[11px] text-white/40 mt-0.5 font-light leading-relaxed">
                        To preserve our elegant ambiance, business professional or formal attire is required. Athletic wear, tank tops, sandals, and sports caps are strictly prohibited.
                      </p>
                    </div>
                  </div>
                </motion.form>
              ) : (
                // SUCCESS CONFIRMATION RECEIPT TICKET (CRO MASTERPIECE!)
                <motion.div
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-serif font-extrabold text-white">Reservation Confirmed</h3>
                    <p className="text-sm text-white/50">Your table has been reserved under Chef’s Priority</p>
                  </div>

                  {/* Ticket Container */}
                  <div className="relative mx-auto max-w-sm rounded-2xl border border-white/10 bg-black/60 p-6 shadow-2xl overflow-hidden backdrop-blur-md">
                    {/* Decorative side ticket notches */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-4 bg-zinc-900 border-r border-y border-white/10 rounded-r-full -ml-px" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-4 bg-zinc-900 border-l border-y border-white/10 rounded-l-full -mr-px" />

                    <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-4 mb-4">
                      <span className="text-xs font-mono tracking-widest text-white/40 uppercase">AURA SEATING</span>
                      <span className="text-xs font-mono font-bold text-orange-400">{confirmedBooking.id}</span>
                    </div>

                    <div className="space-y-4 text-left">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">GUEST</span>
                          <span className="text-sm font-semibold text-white/80 truncate block">{confirmedBooking.name}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">CAPACITY</span>
                          <span className="text-sm font-semibold text-white/80 block">{confirmedBooking.guests} Guests</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">DATE</span>
                          <span className="text-sm font-semibold text-white/80 block">{confirmedBooking.date}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">TIME</span>
                          <span className="text-sm font-semibold text-white/80 block">{confirmedBooking.time}</span>
                        </div>
                      </div>

                      <div>
                        <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">SEATING LOUNGE</span>
                        <span className="text-sm font-semibold text-white/80 block">{confirmedBooking.seatingPreference}</span>
                      </div>

                      {confirmedBooking.dietaryNotes && (
                        <div className="border-t border-white/10 pt-3 mt-3">
                          <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">SPECIAL CONCESSIONS</span>
                          <p className="text-xs text-white/50 mt-0.5 font-light leading-relaxed truncate">{confirmedBooking.dietaryNotes}</p>
                        </div>
                      )}
                    </div>

                    {/* Footer instructions */}
                    <div className="border-t border-white/10 pt-4 mt-6 text-center">
                      <div className="inline-flex items-center space-x-1.5 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                        <Award className="h-3 w-3 text-orange-400" />
                        <span>Valet code: COMP-{confirmedBooking.id.split('-')[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setConfirmedBooking(null)}
                      className="bg-white/5 hover:bg-white/10 text-xs font-semibold uppercase tracking-wider text-white px-6 py-3 rounded-xl border border-white/10 transition-colors cursor-pointer"
                    >
                      Book Another Table
                    </button>
                    <a
                      href={`mailto:${confirmedBooking.email}?subject=My Aura Reservation Details&body=Reservation Code: ${confirmedBooking.id}%0ADate: ${confirmedBooking.date}%0ATime: ${confirmedBooking.time}%0APrefernce: ${confirmedBooking.seatingPreference}`}
                      className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] cursor-pointer inline-flex items-center justify-center"
                    >
                      <span>Share Details</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Past/Existing Reservations Sidecard Column (Right 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
              
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10 mb-6">
                <Compass className="h-5 w-5 text-orange-400" />
                <h4 className="font-serif font-bold text-lg text-white">Your Aura Reservations</h4>
              </div>

              {pastBookings.length === 0 ? (
                <div className="text-center py-10 text-white/40">
                  <p className="text-sm font-light">No reservations found in your current session.</p>
                  <p className="text-xs text-white/30 mt-1">Book a table on the left to see details saved here securely.</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                  {pastBookings.map((b) => (
                    <div key={b.id} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md relative group">
                      <button
                        onClick={() => handleCancelBooking(b.id)}
                        className="absolute top-3 right-3 p-1 rounded-full text-white/40 hover:text-orange-400 hover:bg-white/10 transition-colors cursor-pointer"
                        title="Cancel reservation"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-orange-400 font-bold tracking-wider">{b.id}</span>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-mono font-semibold">
                          Confirmed
                        </span>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p className="text-white/80 font-medium">Guest: {b.name}</p>
                        <p className="text-white/50 font-light">Date: {b.date} at {b.time}</p>
                        <p className="text-white/50 font-light">Lounge: {b.seatingPreference}</p>
                        <p className="text-white/40 font-light">Guests count: {b.guests}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Support Card for local SEO and trust */}
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <h4 className="font-serif font-bold text-lg text-white">Concierge Desk</h4>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-orange-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">DIRECT PHONE LINE</span>
                    <a href="tel:+12125557788" className="text-sm font-semibold text-white/80 hover:text-orange-400 transition-colors">+1 (212) 555-7788</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-orange-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-widest text-white/40 uppercase">CONCIERGE DESK EMAIL</span>
                    <a href="mailto:concierge@aura-nyc.com" className="text-sm font-semibold text-white/80 hover:text-orange-400 transition-colors">concierge@aura-nyc.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Central Park South, New York</span>
                <span className="text-[10px] font-mono uppercase bg-white/5 border border-white/10 px-2 py-1 rounded">Open 24/7 online</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
