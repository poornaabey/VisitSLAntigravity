import React, { useState } from 'react';
import { Plus, Search, Tent, Package, Edit, Trash2 } from 'lucide-react';
import { INVENTORY } from '../../data/mockData';

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Content Management</h2>
          <p className="text-slate-500 text-sm mt-1">Manage experiences, packages, and destinations.</p>
        </div>
        <button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center shadow-sm transition-colors"
        >
          <Plus size={18} className="mr-2" /> Add New Item
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Filters/Search */}
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search inventory..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-emerald-500 text-sm" 
            />
          </div>
          <select className="border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-emerald-500 bg-white">
            <option>All Categories</option>
            <option>Experiences</option>
            <option>Packages</option>
            <option>Destinations</option>
          </select>
        </div>

        {/* Inventory Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-slate-500 text-sm border-b border-slate-200">
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Price (USD)</th>
                <th className="p-4 font-semibold">Total Bookings</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {INVENTORY.filter(i => i.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
                <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                  <td className="p-4 font-bold text-slate-900">{item.title}</td>
                  <td className="p-4 text-slate-500">
                    <span className="flex items-center gap-1">
                      {item.category === 'Experience' ? <Tent size={14}/> : <Package size={14}/>} {item.category}
                    </span>
                  </td>
                  <td className="p-4 text-slate-900">${item.price}</td>
                  <td className="p-4 text-slate-600">{item.bookings}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                      item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"><Edit size={18} /></button>
                    <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
