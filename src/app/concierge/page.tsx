"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { id: "apartment", icon: "🏠", label: "Find Apartment" },
  { id: "bank", icon: "🏦", label: "Bank Account" },
  { id: "car", icon: "🚗", label: "Car" },
  { id: "sim", icon: "📱", label: "SIM Card" },
  { id: "school", icon: "🏫", label: "School for Kids" },
  { id: "helper", icon: "👩‍🍳", label: "Domestic Helper" },
  { id: "insurance", icon: "🏥", label: "Health Insurance" },
  { id: "visa", icon: "📋", label: "Visa & PRO Help" },
];

const TIMELINES = ["Already in Dubai", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];
const BUDGETS = ["$499 — Solo", "$999 — Family", "$1,999 — Premium", "Not sure yet"];

export default function ConciergePage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", timeline: "", budget: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-10 max-w-lg w-full text-center shadow-lg">
          <p className="text-6xl mb-4">🎉</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">You're all set, {form.name}!</h1>
          <p className="text-gray-500 mb-6">
            We'll WhatsApp you within 24 hours to start your Dubai setup. Check your email for confirmation.
          </p>
          <div className="bg-emerald-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm font-semibold text-gray-700 mb-2">Services requested:</p>
            <div className="flex flex-wrap gap-2">
              {selected.map((id) => {
                const s = SERVICES.find((sv) => sv.id === id);
                return s ? (
                  <span key={id} className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">
                    {s.icon} {s.label}
                  </span>
                ) : null;
              })}
            </div>
          </div>
          <Link href="/" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-emerald-700 text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Your Dubai Setup — Free Consultation</h1>
        <p className="text-emerald-200">Tell us what you need. We'll handle everything.</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-emerald-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                {step > s ? "✓" : s}
              </div>
              <div className={`flex-1 h-1 rounded ${s < 3 ? (step > s ? "bg-emerald-600" : "bg-gray-200") : "hidden"}`} />
            </div>
          ))}
        </div>

        {/* Step 1 — Services */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">What do you need help with?</h2>
            <p className="text-gray-500 mb-6">Select all that apply — we'll customize your plan.</p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleService(s.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${selected.includes(s.id) ? "border-emerald-500 bg-emerald-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className={`text-sm font-semibold ${selected.includes(s.id) ? "text-emerald-700" : "text-gray-700"}`}>{s.label}</span>
                  {selected.includes(s.id) && <span className="ml-auto text-emerald-500 font-bold">✓</span>}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={selected.length === 0}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Continue → ({selected.length} selected)
            </button>
          </div>
        )}

        {/* Step 2 — Timeline & Budget */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">When are you arriving?</h2>
            <p className="text-gray-500 mb-6">This helps us prioritize what to set up first.</p>

            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Arrival timeline</label>
              <div className="space-y-2">
                {TIMELINES.map((t) => (
                  <button key={t} onClick={() => setForm({ ...form, timeline: t })}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${form.timeline === t ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`}>
                    {form.timeline === t ? "✓ " : ""}{t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold text-gray-700 mb-2 block">Package preference</label>
              <div className="space-y-2">
                {BUDGETS.map((b) => (
                  <button key={b} onClick={() => setForm({ ...form, budget: b })}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${form.budget === b ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-semibold" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}`}>
                    {form.budget === b ? "✓ " : ""}{b}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                ← Back
              </button>
              <button onClick={() => setStep(3)} disabled={!form.timeline || !form.budget}
                className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Contact */}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Almost done!</h2>
            <p className="text-gray-500 mb-6">We'll WhatsApp you within 24 hours to get started.</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Your name *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ahmed Al-Rashidi"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Email *</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">WhatsApp number *</label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+971 50 123 4567"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Anything specific we should know?</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="e.g. Family of 4, need British school, budget 15K AED/month..."
                  rows={3}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 resize-none" />
              </div>
            </div>

            {/* Summary */}
            <div className="bg-emerald-50 rounded-xl p-4 mb-6 border border-emerald-100">
              <p className="text-sm font-semibold text-gray-700 mb-2">Your request summary:</p>
              <div className="flex flex-wrap gap-1 mb-2">
                {selected.map((id) => {
                  const s = SERVICES.find((sv) => sv.id === id);
                  return s ? <span key={id} className="text-xs bg-white border border-emerald-200 text-emerald-700 px-2 py-1 rounded-full">{s.icon} {s.label}</span> : null;
                })}
              </div>
              <p className="text-xs text-gray-500">{form.timeline} · {form.budget}</p>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="flex-1 border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                ← Back
              </button>
              <button type="submit" className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-colors">
                🚀 Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
