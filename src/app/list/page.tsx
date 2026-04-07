"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CITIES = ["Riyadh", "Jeddah", "Khobar", "Dammam", "Dubai", "Abu Dhabi", "Sharjah", "Doha", "Kuwait City", "Manama"];
const CURRENCIES = ["SAR", "AED", "QAR", "KWD", "BHD", "OMR"];

type FormData = {
  title: string;
  type: string;
  status: string;
  price: string;
  currency: string;
  city: string;
  neighborhood: string;
  bedrooms: string;
  bathrooms: string;
  stories: string;
  garage: string;
  area: string;
  description: string;
  agentName: string;
  agentPhone: string;
  imageUrl: string;
};

const EMPTY: FormData = {
  title: "", type: "villa", status: "sale", price: "", currency: "SAR",
  city: "Riyadh", neighborhood: "", bedrooms: "3", bathrooms: "2",
  stories: "1", garage: "1", area: "", description: "",
  agentName: "", agentPhone: "", imageUrl: "",
};

export default function ListPropertyPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate() {
    const e: Partial<FormData> = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.price || isNaN(Number(form.price)) || Number(form.price) <= 0) e.price = "Valid price required";
    if (!form.neighborhood.trim()) e.neighborhood = "Neighborhood is required";
    if (!form.area || isNaN(Number(form.area)) || Number(form.area) <= 0) e.area = "Valid area required";
    if (!form.agentName.trim()) e.agentName = "Your name is required";
    if (!form.agentPhone.trim()) e.agentPhone = "Phone number is required";
    if (!form.description.trim()) e.description = "Description is required";
    return e;
  }

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }

    const newProperty = {
      id: `user-${Date.now()}`,
      title: form.title,
      titleAr: form.title,
      type: form.type,
      status: form.status,
      price: Number(form.price),
      currency: form.currency,
      city: form.city,
      cityAr: form.city,
      neighborhood: form.neighborhood,
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      stories: Number(form.stories),
      garage: Number(form.garage),
      area: Number(form.area),
      lat: 24.6877,
      lng: 46.6921,
      images: form.imageUrl
        ? [form.imageUrl]
        : ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"],
      description: form.description,
      agentName: form.agentName,
      agentPhone: form.agentPhone,
      listedAt: new Date().toISOString().split("T")[0],
    };

    try {
      const existing = JSON.parse(localStorage.getItem("dari_listings") || "[]");
      localStorage.setItem("dari_listings", JSON.stringify([newProperty, ...existing]));
    } catch { /* localStorage unavailable */ }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Listing Submitted!</h1>
        <p className="text-gray-500 mb-8 max-w-sm">Your property has been added. It will appear in the listings right away.</p>
        <div className="flex gap-4">
          <Link href="/properties" className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
            View Listings
          </Link>
          <button onClick={() => { setForm(EMPTY); setSubmitted(false); }} className="border border-gray-300 px-6 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            Add Another
          </button>
        </div>
      </div>
    );
  }

  const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );

  const inputCls = (err?: string) =>
    `px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${err ? "border-red-400" : "border-gray-300"}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link href="/" className="text-sm text-emerald-600 hover:underline mb-6 inline-block">← Back to home</Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">List Your Property</h1>
      <p className="text-gray-500 text-sm mb-8">Fill in the details below to add your listing — it&apos;s free.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Basic info */}
        <div className="bg-white border rounded-xl p-5 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800">Property Details</h2>

          <Field label="Listing Title *" error={errors.title}>
            <input className={inputCls(errors.title)} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="e.g. Modern Villa in Al Olaya" />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Property Type">
              <select className={inputCls()} value={form.type} onChange={(e) => set("type", e.target.value)}>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="compound">Compound</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </Field>
            <Field label="Listing For">
              <select className={inputCls()} value={form.status} onChange={(e) => set("status", e.target.value)}>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Price *" error={errors.price}>
              <input className={inputCls(errors.price)} value={form.price} onChange={(e) => set("price", e.target.value)} type="number" min="0" placeholder="e.g. 1500000" />
            </Field>
            <Field label="Currency">
              <select className={inputCls()} value={form.currency} onChange={(e) => set("currency", e.target.value)}>
                {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Field label="City">
              <select className={inputCls()} value={form.city} onChange={(e) => set("city", e.target.value)}>
                {CITIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Neighborhood *" error={errors.neighborhood}>
              <input className={inputCls(errors.neighborhood)} value={form.neighborhood} onChange={(e) => set("neighborhood", e.target.value)} placeholder="e.g. Al Olaya" />
            </Field>
          </div>

          <Field label="Area (sqm) *" error={errors.area}>
            <input className={inputCls(errors.area)} value={form.area} onChange={(e) => set("area", e.target.value)} type="number" min="0" placeholder="e.g. 350" />
          </Field>
        </div>

        {/* Rooms & Features */}
        <div className="bg-white border rounded-xl p-5 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800">Rooms &amp; Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Field label="Bedrooms">
              <select className={inputCls()} value={form.bedrooms} onChange={(e) => set("bedrooms", e.target.value)}>
                {["0","1","2","3","4","5","6","7","8"].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Bathrooms">
              <select className={inputCls()} value={form.bathrooms} onChange={(e) => set("bathrooms", e.target.value)}>
                {["1","2","3","4","5","6","7","8"].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Stories / Floors">
              <select className={inputCls()} value={form.stories} onChange={(e) => set("stories", e.target.value)}>
                {["1","2","3","4","5"].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
            <Field label="Garage (cars)">
              <select className={inputCls()} value={form.garage} onChange={(e) => set("garage", e.target.value)}>
                {["0","1","2","3","4","5","6"].map((n) => <option key={n}>{n}</option>)}
              </select>
            </Field>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border rounded-xl p-5 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800">Description</h2>
          <Field label="Description *" error={errors.description}>
            <textarea
              className={`${inputCls(errors.description)} resize-none`}
              rows={4}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Describe the property, its features, nearby amenities..."
            />
          </Field>
          <Field label="Photo URL (optional)">
            <input className={inputCls()} value={form.imageUrl} onChange={(e) => set("imageUrl", e.target.value)} placeholder="https://..." type="url" />
            <p className="text-xs text-gray-400">Paste a direct image link. Leave blank to use a placeholder.</p>
          </Field>
        </div>

        {/* Contact */}
        <div className="bg-white border rounded-xl p-5 flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800">Your Contact Info</h2>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Your Name *" error={errors.agentName}>
              <input className={inputCls(errors.agentName)} value={form.agentName} onChange={(e) => set("agentName", e.target.value)} placeholder="Full name" />
            </Field>
            <Field label="Phone / WhatsApp *" error={errors.agentPhone}>
              <input className={inputCls(errors.agentPhone)} value={form.agentPhone} onChange={(e) => set("agentPhone", e.target.value)} placeholder="+966 50 000 0000" />
            </Field>
          </div>
        </div>

        <button type="submit" className="bg-emerald-600 text-white py-3.5 rounded-xl font-semibold text-base hover:bg-emerald-700 transition-colors">
          Submit Listing →
        </button>
      </form>
    </div>
  );
}
