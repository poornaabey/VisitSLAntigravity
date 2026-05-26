import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import PortalLayout from './src/layouts/PortalLayout';
import AdminLayout from './src/layouts/AdminLayout';

// Portal Pages
import Home from './src/pages/portal/Home';
import Packages from './src/pages/portal/Packages';
import Destinations from './src/pages/portal/Destinations';
import TripBuilder from './src/pages/portal/TripBuilder';

// Admin Pages
import Dashboard from './src/pages/admin/Dashboard';
import Inventory from './src/pages/admin/Inventory';
import AdminUnderConstruction from './src/pages/admin/UnderConstruction';

// Temporary Portal Fallback
const PortalFallback = () => (
  <div className="pt-32 pb-20 text-center min-h-[60vh]">
    <h1 className="text-4xl font-bold text-slate-800">Coming Soon</h1>
    <p className="mt-4 text-slate-500">This section is currently being updated.</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer Facing Portal Routes */}
        <Route path="/" element={<PortalLayout />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="builder" element={<TripBuilder />} />
          <Route path="*" element={<PortalFallback />} />
        </Route>

        {/* Admin CMS Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="*" element={<AdminUnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
