import React from 'react';
import { TrendingUp } from 'lucide-react';
import { ADMIN_STATS, RECENT_BOOKINGS } from '../../data/mockData';

export default function Dashboard() {
  return (
    <div className="animate-in fade-in duration-300">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Business Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {ADMIN_STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                  <Icon size={24} />
                </div>
                <span className={`text-sm font-bold flex items-center ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-slate-400'}`}>
                  {stat.trend} <TrendingUp size={14} className="ml-1" />
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-slate-900">Recent Bookings</h3>
          <button className="text-emerald-600 text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-sm">
                <th className="p-4 font-semibold">Booking ID</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Item</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {RECENT_BOOKINGS.map((booking) => (
                <tr key={booking.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{booking.id}</td>
                  <td className="p-4 text-slate-600">{booking.customer}</td>
                  <td className="p-4 text-slate-600">{booking.item}</td>
                  <td className="p-4 text-slate-600">{booking.date}</td>
                  <td className="p-4 font-semibold text-slate-900">{booking.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 
                      booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {booking.status}
                    </span>
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
