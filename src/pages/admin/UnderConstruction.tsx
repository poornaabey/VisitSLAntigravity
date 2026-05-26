import React from 'react';
import { Settings } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function UnderConstruction() {
  const location = useLocation();
  const moduleName = location.pathname.split('/').pop();

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 text-center animate-in fade-in">
      <Settings size={64} className="mb-6 opacity-20" />
      <h3 className="text-2xl font-bold text-slate-600 capitalize">{moduleName} Module Under Construction</h3>
      <p className="text-base mt-2">The API routes and frontend components for this module are being generated.</p>
    </div>
  );
}
