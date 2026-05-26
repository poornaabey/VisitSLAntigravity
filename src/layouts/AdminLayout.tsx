import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Map, Tent, CalendarCheck, Users, 
  Settings, Menu, X, Bell, Package
} from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const SidebarItem = ({ icon: Icon, label, path }) => {
    const isActive = location.pathname === path || (path !== '/admin' && location.pathname.startsWith(path));
    return (
      <Link 
        to={path}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
          isActive 
            ? 'bg-emerald-600 text-white shadow-md' 
            : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }`}
      >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky top-0 h-screen bg-slate-950 text-slate-300 w-72 flex flex-col z-40 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-800">
          <span className="text-2xl font-extrabold text-white tracking-tight">
            visit<span className="text-emerald-500">srilanka</span>
            <span className="block text-xs text-slate-500 font-medium tracking-widest uppercase mt-1">Admin Portal</span>
          </span>
          <button className="md:hidden text-slate-400" onClick={() => setSidebarOpen(false)}><X size={24}/></button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/admin" />
          <SidebarItem icon={CalendarCheck} label="Bookings & Orders" path="/admin/bookings" />
          
          <div className="pt-4 pb-2 px-4">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Content</p>
          </div>
          <SidebarItem icon={Tent} label="Experiences" path="/admin/inventory" />
          <SidebarItem icon={Package} label="Tour Packages" path="/admin/packages" />
          <SidebarItem icon={Map} label="Destinations" path="/admin/destinations" />
          
          <div className="pt-4 pb-2 px-4">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">System</p>
          </div>
          <SidebarItem icon={Users} label="Customers" path="/admin/customers" />
          <SidebarItem icon={Settings} label="Settings" path="/admin/settings" />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 h-20 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
          <button className="md:hidden p-2 text-slate-600" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className="flex-1" />

          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-semibold text-emerald-600 hover:underline mr-4">View Live Site</Link>
            <button className="relative p-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md cursor-pointer border-2 border-white">
              JD
            </div>
          </div>
        </header>

        {/* Dynamic View Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
