import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles, CreditCard, Phone } from 'lucide-react';
import { MENU_ITEMS } from '../data/mockData';

export default function PortalLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage 
      ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
      : 'bg-transparent py-4'
  }`;

  const textClasses = isScrolled || !isHomePage ? 'text-emerald-950' : 'text-white';
  const itemClasses = isScrolled || !isHomePage ? 'border-slate-200 pt-3 text-slate-600' : 'border-white/20 pt-3 text-slate-100';
  const btnClasses = isScrolled || !isHomePage 
    ? 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100' 
    : 'text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm';
  const cartClasses = isScrolled || !isHomePage 
    ? 'bg-slate-900 text-white hover:bg-slate-800' 
    : 'bg-white text-slate-900 hover:bg-slate-100';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-200 flex flex-col">
      {/* Navbar */}
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-2">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={`text-3xl font-extrabold tracking-tighter ${textClasses}`}>
                visit<span className="text-emerald-500">srilanka</span>.co
              </span>
            </Link>
            
            {/* Top-Right Utility */}
            <div className="hidden md:flex items-center gap-4">
              <Link to="/builder" className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all ${btnClasses}`}>
                <Sparkles size={16} /> Trip Builder
              </Link>
              <button className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all ${cartClasses}`}>
                <CreditCard size={18} /> Bookings
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={isScrolled || !isHomePage ? 'text-slate-900' : 'text-white'}>
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Main Desktop Menu Items */}
          <div className={`hidden md:flex space-x-6 items-center text-sm font-semibold mt-1 border-t ${itemClasses}`}>
            {MENU_ITEMS.map(item => (
              <Link 
                key={item.id} 
                to={item.path}
                className="hover:text-emerald-500 transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-4 border-t border-slate-100">
              {MENU_ITEMS.map(item => (
                <Link key={item.id} to={item.path} onClick={() => setMobileMenuOpen(false)} className="text-left py-3 font-semibold text-slate-700 border-b border-slate-50">
                  {item.label}
                </Link>
              ))}
              <Link to="/builder" onClick={() => setMobileMenuOpen(false)} className="mt-4 text-emerald-600 font-bold flex items-center gap-2">
                <Sparkles size={16}/> Trip Builder
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <span className="text-2xl font-bold text-white mb-4 block">visitsrilanka<span className="text-emerald-500">.co</span></span>
            <p className="text-sm mb-6 max-w-sm">The official holistic travel portal for Sri Lanka. Destinations, packages, transfers, and unique experiences all in one place.</p>
            <div className="flex gap-4">
              <Phone size={20} className="text-emerald-500" />
              <span className="text-white">+94 77 123 4567 (24/7 Support)</span>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-emerald-400">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-emerald-400">Tour Packages</Link></li>
              <li><Link to="/experiences" className="hover:text-emerald-400">Experiences</Link></li>
              <li><Link to="/culinary" className="hover:text-emerald-400">Culinary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/transfers" className="hover:text-emerald-400">Airport Transfers</Link></li>
              <li><Link to="/transfers" className="hover:text-emerald-400">Private Chauffeurs</Link></li>
              <li><Link to="/transfers" className="hover:text-emerald-400">Train Tickets</Link></li>
              <li><Link to="/facilities" className="hover:text-emerald-400">Visa Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-emerald-400">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-emerald-400">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
