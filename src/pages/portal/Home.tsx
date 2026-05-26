import React, { useState } from 'react';
import { Search, MapPin, Calendar, ArrowRight, ChevronRight, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/mockData';
import { DESTINATION_REGIONS } from '../../data/destinations';
import { TOUR_PACKAGES } from '../../data/tours';

// Map regionId → short label for badges
const REGION_LABELS: Record<string, string> = {
  'reg-cultural-triangle': 'Cultural Triangle',
  'reg-hill-country': 'Hill Country',
  'reg-southern-coast': 'Southern Coast',
  'reg-wildlife-reserves': 'Wildlife Reserves',
};

// Badge color per region
const REGION_COLORS: Record<string, string> = {
  'reg-cultural-triangle': 'bg-amber-100 text-amber-800',
  'reg-hill-country': 'bg-emerald-100 text-emerald-800',
  'reg-southern-coast': 'bg-sky-100 text-sky-800',
  'reg-wildlife-reserves': 'bg-orange-100 text-orange-800',
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}"`);
    }
  };

  // Show first 3 tours on homepage preview
  const featuredTours = TOUR_PACKAGES.slice(0, 3);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000"
            alt="Sri Lanka landscape"
            className="w-full h-full object-cover opacity-70 mix-blend-overlay"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
            Discover the Real <span className="text-emerald-400">Sri Lanka.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-100 mb-10 font-medium drop-shadow-md">
            Destinations, Packages, Transfers &amp; Unique Experiences.
          </p>

          <form
            onSubmit={handleSearch}
            className="bg-white p-2 md:p-3 rounded-full shadow-2xl flex flex-col md:flex-row items-center w-full transform transition-all hover:scale-[1.02]"
          >
            <div className="flex-1 flex items-center px-4 md:px-6 py-4 md:py-3 w-full border-b md:border-b-0 md:border-r border-slate-200">
              <Search className="text-slate-400 mr-3 md:mr-4 flex-shrink-0" size={28} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where to? (e.g. Kandy, Yala Safari, Train Tickets...)"
                className="w-full text-lg md:text-xl focus:outline-none text-slate-800 placeholder-slate-400 bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-5 md:py-4 mt-2 md:mt-0 font-bold text-lg transition-all m-1 flex items-center justify-center shadow-lg shadow-emerald-600/30"
            >
              Search
            </button>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-white/80 font-medium">
            <span className="opacity-70">Popular:</span>
            <Link to="/destinations" className="hover:text-emerald-400 hover:underline">Ella Train</Link>
            <Link to="/destinations" className="hover:text-emerald-400 hover:underline">Yala Safari</Link>
            <Link to="/destinations" className="hover:text-emerald-400 hover:underline">Private Driver</Link>
            <Link to="/packages" className="hover:text-emerald-400 hover:underline">7-Day Tour</Link>
          </div>
        </div>
      </div>

      {/* ── QUICK CATEGORIES ─────────────────────────────────── */}
      <div className="bg-white py-12 border-b border-slate-100 -mt-6 relative z-20 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs text-slate-500">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── DESTINATIONS REGIONS GRID ────────────────────────── */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-2">Explore the Island</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Discover Destinations</h2>
              <p className="text-slate-500 mt-2">Four extraordinary regions, each a world of its own.</p>
            </div>
            <Link
              to="/destinations"
              className="hidden md:flex font-bold text-emerald-600 hover:text-emerald-700 items-center gap-1 transition-colors"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATION_REGIONS.map((region) => (
              <Link
                to={`/destinations?region=${region.slug}`}
                key={region.id}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md block"
              >
                {/* Cover Image */}
                <img
                  src={region.coverImage}
                  alt={`${region.title} - Sri Lanka`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                {/* Focus tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {region.focus.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{region.title}</h3>
                  <p className="text-slate-300 text-sm leading-snug line-clamp-2">{region.description}</p>
                  <div className="mt-4 flex items-center text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <MapPin size={14} className="mr-1" /> Explore Region <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── TRENDING TOURS ───────────────────────────────────── */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-2">Handpicked Itineraries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trending Tour Packages</h2>
            <p className="text-slate-500">
              From airport pickup to departure, let our local experts handle every detail of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Tour Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.coverImage}
                    alt={`${tour.title} - Sri Lanka tour`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Duration badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-sm font-bold text-slate-900 flex items-center shadow">
                    <Clock size={13} className="mr-1.5 text-emerald-600" /> {tour.duration} Days
                  </div>
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 px-2.5 py-1.5 rounded-full text-xs font-bold text-white flex items-center shadow">
                    <Star size={11} className="mr-1 fill-white" /> {tour.rating}
                  </div>
                </div>

                {/* Tour Card Body */}
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

                  {/* Top 2 highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {tour.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start text-sm text-slate-500">
                        <span className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-100">
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

          <div className="mt-12 text-center">
            <Link
              to="/packages"
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors inline-flex items-center shadow-lg shadow-slate-900/20"
            >
              View All {TOUR_PACKAGES.length} Packages <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
