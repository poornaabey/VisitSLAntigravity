import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ChevronLeft, Map, Compass, Coffee, Sparkles } from 'lucide-react';

export default function TripBuilder() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ dates: '', travelers: '', vibe: '', focus: [] });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 min-h-screen">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-950 p-8 text-white">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Sparkles className="text-emerald-400" /> Concierge Trip Builder
          </h1>
          <p className="text-emerald-200 mt-2">Let our AI match you with the perfect experiences.</p>
          
          <div className="flex gap-2 mt-8">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`h-2 flex-1 rounded-full ${step >= s ? 'bg-emerald-400' : 'bg-emerald-900'}`} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 min-h-[400px]">
          {step === 1 && (
            <div className="animate-in slide-in-from-right-8 duration-300">
              <h2 className="text-2xl font-bold mb-6">When and who?</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Travel Dates (Approx)</label>
                  <input type="text" placeholder="e.g. Next December for 14 days" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Who is traveling?</label>
                  <select className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-emerald-500 outline-none bg-white">
                    <option>Solo Traveler</option>
                    <option>Couple / Romance</option>
                    <option>Family with Kids</option>
                    <option>Group of Friends</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in slide-in-from-right-8 duration-300">
              <h2 className="text-2xl font-bold mb-6">What's your vibe?</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'luxury', label: 'Luxury & Relaxed', icon: Coffee },
                  { id: 'adventure', label: 'Active Adventure', icon: Compass },
                  { id: 'culture', label: 'Cultural & Historic', icon: Map },
                  { id: 'balanced', label: 'A bit of everything', icon: Sparkles }
                ].map(v => (
                  <button key={v.id} onClick={() => setData({...data, vibe: v.id})} className={`p-6 rounded-2xl border-2 text-left transition-all ${data.vibe === v.id ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-200 hover:border-emerald-200'}`}>
                    <v.icon className={`mb-3 ${data.vibe === v.id ? 'text-emerald-600' : 'text-slate-400'}`} size={28} />
                    <div className="font-bold">{v.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in slide-in-from-right-8 duration-300">
              <h2 className="text-2xl font-bold mb-6">Must-haves</h2>
              <p className="text-slate-500 mb-6">Select up to 3 primary focuses for this trip.</p>
              <div className="flex flex-wrap gap-3">
                {['Wildlife Safari', 'Surfing', 'Tea Trails', 'Ancient Ruins', 'Train Rides', 'Local Food', 'Wellness/Ayurveda'].map(tag => (
                  <button key={tag} onClick={() => {
                    const focus = data.focus.includes(tag) ? data.focus.filter(t => t !== tag) : [...data.focus, tag];
                    setData({...data, focus});
                  }} className={`px-5 py-3 rounded-full font-semibold transition-all border-2 ${data.focus.includes(tag) ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in duration-500 text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">You're all set!</h2>
              <p className="text-slate-600 mb-8 max-w-sm mx-auto">We're generating a completely bespoke itinerary based on your preferences. Our local expert will be in touch shortly.</p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700">
                View Proposed Itinerary
              </button>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step < 4 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
            <button onClick={prevStep} disabled={step === 1} className={`flex items-center font-bold px-6 py-3 rounded-full ${step === 1 ? 'text-slate-300' : 'text-slate-600 hover:bg-slate-200'}`}>
              <ChevronLeft size={20} className="mr-1" /> Back
            </button>
            <button onClick={nextStep} className="flex items-center font-bold px-8 py-3 rounded-full bg-slate-900 text-white hover:bg-emerald-600 transition-colors shadow-md">
              Next <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
