import React, { useState } from 'react';
import { DESTINATION_REGIONS } from '../../data/destinations';
import { TOUR_PACKAGES } from '../../data/tours';
import { MapPin, ArrowRight, ChevronRight, Clock, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const REGION_COLORS: Record<string, string> = {
  'reg-cultural-triangle': 'bg-amber-100 text-amber-800',
  'reg-hill-country': 'bg-emerald-100 text-emerald-800',
  'reg-southern-coast': 'bg-sky-100 text-sky-800',
  'reg-wildlife-reserves': 'bg-orange-100 text-orange-800',
};

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const [activeRegion, setActiveRegion] = useState<string | null>(
    searchParams.get('region')
  );

  const selectedRegion = activeRegion
    ? DESTINATION_REGIONS.find((r) => r.slug === activeRegion || r.id === activeRegion)
    : null;

  const relatedTours = selectedRegion
    ? TOUR_PACKAGES.filter((t) => t.regionIds.includes(selectedRegion.id))
    : [];

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-500">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-2">Pearl of the Indian Ocean</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Explore Destinations</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Four extraordinary regions await. Choose your adventure and discover what makes Sri Lanka truly unforgettable.
        </p>
      </div>

      {/* Region Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DESTINATION_REGIONS.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(activeRegion === region.slug ? null : region.slug)}
              className={`group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-lg text-left w-full transition-all duration-300 ${
                activeRegion === region.slug ? 'ring-4 ring-emerald-500 ring-offset-4 scale-[0.99]' : 'hover:shadow-2xl hover:scale-[1.01]'
              }`}
            >
              {/* Image */}
              <img
                src={region.coverImage}
                alt={`${region.title}, Sri Lanka`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

              {/* Top tags */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                {region.focus.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Selected indicator */}
              {activeRegion === region.slug && (
                <div className="absolute top-5 right-5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ✓ Selected
                </div>
              )}

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h2 className="text-3xl font-bold text-white mb-2">{region.title}</h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">{region.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-emerald-400 text-sm font-semibold">
                    <MapPin size={15} className="mr-1.5" />
                    {region.focus.length} highlights
                  </div>
                  <span className="flex items-center text-white/80 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                    {activeRegion === region.slug ? 'Click to deselect' : 'View tours'} <ChevronRight size={15} className="ml-1" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Related Tours Section — shown when a region is selected */}
      {selectedRegion && (
        <div className="max-w-7xl mx-auto px-4 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-1">
                {selectedRegion.title}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {relatedTours.length} Tour{relatedTours.length !== 1 ? 's' : ''} in this Region
              </h2>
            </div>
            <Link
              to="/packages"
              className="hidden md:flex text-emerald-600 font-bold hover:text-emerald-700 items-center gap-1"
            >
              All Packages <ArrowRight size={17} />
            </Link>
          </div>

          {relatedTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={tour.coverImage}
                      alt={`${tour.title} – Sri Lanka`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-slate-900 flex items-center shadow">
                      <Clock size={12} className="mr-1.5 text-emerald-600" /> {tour.duration} Days
                    </div>
                    <div className="absolute top-3 right-3 bg-amber-400 px-2.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center">
                      <Star size={10} className="mr-1 fill-white" /> {tour.rating}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${REGION_COLORS[selectedRegion.id]}`}>
                      {selectedRegion.title}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{tour.title}</h3>
                    <ul className="space-y-1.5 mb-4 flex-grow">
                      {tour.highlights.slice(0, 2).map((h) => (
                        <li key={h} className="flex items-start text-sm text-slate-500">
                          <span className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-xs text-slate-400">From</p>
                        <p className="text-lg font-extrabold text-slate-900">${tour.price.toLocaleString()}</p>
                      </div>
                      <Link
                        to={`/packages/${tour.slug}`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-1 shadow shadow-emerald-600/30"
                      >
                        Book <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-12 text-center text-slate-400">
              <p className="text-lg font-medium">More tours coming soon for {selectedRegion.title}!</p>
              <Link to="/builder" className="mt-4 inline-block text-emerald-600 font-semibold hover:underline">
                Build a custom trip instead →
              </Link>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Not sure where to go?</h2>
            <p className="text-slate-400 text-lg">Let our Trip Builder personalise a perfect itinerary for you.</p>
          </div>
          <Link
            to="/builder"
            className="flex-shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold transition-colors inline-flex items-center gap-2 shadow-lg shadow-emerald-600/30 whitespace-nowrap"
          >
            Start Trip Builder <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
