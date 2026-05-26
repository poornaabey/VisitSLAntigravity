import React, { useState } from 'react';
import { TOUR_PACKAGES } from '../../data/tours';
import { DESTINATION_REGIONS } from '../../data/destinations';
import { Calendar, ChevronRight, ArrowRight, Star, Clock, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const REGION_LABELS: Record<string, string> = {
  'reg-cultural-triangle': 'Cultural Triangle',
  'reg-hill-country': 'Hill Country',
  'reg-southern-coast': 'Southern Coast',
  'reg-wildlife-reserves': 'Wildlife Reserves',
};

const REGION_COLORS: Record<string, string> = {
  'reg-cultural-triangle': 'bg-amber-100 text-amber-800',
  'reg-hill-country': 'bg-emerald-100 text-emerald-800',
  'reg-southern-coast': 'bg-sky-100 text-sky-800',
  'reg-wildlife-reserves': 'bg-orange-100 text-orange-800',
};

export default function Packages() {
  const [activeRegion, setActiveRegion] = useState<string>('all');

  const filtered = activeRegion === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((t) => t.regionIds.includes(activeRegion));

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 animate-in fade-in duration-500">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-2">Handpicked Itineraries</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Tour Packages</h1>
        <p className="text-lg text-slate-500">
          Curated multi-day journeys crafted by local experts — from airport pickup to departure.
        </p>
      </div>

      {/* Region Filter Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveRegion('all')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
            activeRegion === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-md'
              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
          }`}
        >
          <Filter size={14} /> All Packages
        </button>
        {DESTINATION_REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveRegion(r.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
              activeRegion === r.id
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      {/* Tour Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filtered.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={tour.coverImage}
                alt={`${tour.title} – Sri Lanka`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-slate-900 flex items-center shadow">
                <Clock size={13} className="mr-1.5 text-emerald-600" /> {tour.duration} Days
              </div>
              <div className="absolute top-4 right-4 bg-amber-400 px-2.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center shadow">
                <Star size={11} className="mr-1 fill-white" /> {tour.rating}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Region Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {tour.regionIds.slice(0, 2).map((rid) => (
                  <span
                    key={rid}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${REGION_COLORS[rid] ?? 'bg-slate-100 text-slate-600'}`}
                  >
                    {REGION_LABELS[rid] ?? rid}
                  </span>
                ))}
                {tour.regionIds.length > 2 && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                    +{tour.regionIds.length - 2} more
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{tour.title}</h3>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5 flex-grow">
                {tour.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start text-sm text-slate-500">
                    <span className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400 font-medium">From</p>
                  <p className="text-xl font-extrabold text-slate-900">${tour.price.toLocaleString()}</p>
                </div>
                <Link
                  to={`/packages/${tour.slug}`}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-1 shadow shadow-emerald-600/30"
                >
                  View Tour <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg font-medium">No tours found for this region yet.</p>
          <button onClick={() => setActiveRegion('all')} className="mt-4 text-emerald-600 font-semibold hover:underline">
            View all packages
          </button>
        </div>
      )}

      {/* CTA Banner */}
      <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Want something custom?</h2>
          <p className="text-emerald-100 mb-8 text-lg">
            Use our Trip Builder to craft a completely bespoke itinerary based on your preferences, budget, and travel style.
          </p>
          <Link
            to="/builder"
            className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-colors inline-flex items-center shadow-lg"
          >
            Try Trip Builder <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
