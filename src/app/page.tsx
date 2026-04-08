import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

const CITIES = ["Riyadh", "Dubai", "Jeddah", "Abu Dhabi", "Khobar"];

const SERVICES = [
  { icon: "🏠", title: "Find Apartment", desc: "Verified listings across Dubai. No scams.", color: "bg-emerald-50 border-emerald-200" },
  { icon: "🏦", title: "Open Bank Account", desc: "Emirates NBD, ADCB, Mashreq — sorted before you land.", color: "bg-blue-50 border-blue-200" },
  { icon: "🚗", title: "Get a Car", desc: "Buy, lease or rent. We compare all options.", color: "bg-red-50 border-red-200" },
  { icon: "📱", title: "SIM Card", desc: "du or Etisalat plan ready when you arrive.", color: "bg-purple-50 border-purple-200" },
  { icon: "🏫", title: "School for Kids", desc: "British, American, IB schools with availability.", color: "bg-yellow-50 border-yellow-200" },
  { icon: "👩‍🍳", title: "Domestic Helper", desc: "Verified maids, nannies and drivers.", color: "bg-pink-50 border-pink-200" },
  { icon: "🏥", title: "Health Insurance", desc: "Mandatory in Dubai. Best plan for your family.", color: "bg-cyan-50 border-cyan-200" },
  { icon: "📋", title: "Visa & PRO Help", desc: "Residency visa, Emirates ID — all handled.", color: "bg-indigo-50 border-indigo-200" },
];

const PACKAGES = [
  {
    name: "Solo",
    price: "$499",
    desc: "Perfect for single professionals",
    features: ["Apartment search", "Bank account setup", "SIM card", "Visa guidance"],
    highlight: false,
  },
  {
    name: "Family",
    price: "$999",
    desc: "Everything a family needs",
    features: ["Apartment search", "Bank account setup", "SIM cards (family)", "School finder", "Health insurance", "Visa & Emirates ID", "Domestic helper"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$1,999",
    desc: "White-glove concierge service",
    features: ["Everything in Family", "Personal relocation manager", "Airport pickup", "Furniture sourcing", "Car purchase assistance", "Unlimited WhatsApp support"],
    highlight: false,
  },
];

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Moving to Dubai? <br />We Handle Everything.
          </h1>
          <p className="text-xl text-emerald-100 mb-4">
            ابحث عن منزلك المثالي في الخليج
          </p>
          <p className="text-lg text-emerald-200 mb-10 max-w-2xl mx-auto">
            Apartment, bank account, car, SIM, school, insurance — all sorted before you land.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/concierge" className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors">
              🚀 Start My Dubai Setup
            </Link>
            <Link href="/properties" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Browse Properties
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.map((city) => (
              <Link key={city} href={`/properties?city=${city}`}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-colors">
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><p className="text-3xl font-bold text-emerald-600">100K+</p><p className="text-gray-500 text-sm mt-1">Expats move to Dubai yearly</p></div>
          <div><p className="text-3xl font-bold text-emerald-600">8</p><p className="text-gray-500 text-sm mt-1">Services in one place</p></div>
          <div><p className="text-3xl font-bold text-emerald-600">2,400+</p><p className="text-gray-500 text-sm mt-1">Property Listings</p></div>
          <div><p className="text-3xl font-bold text-emerald-600">5★</p><p className="text-gray-500 text-sm mt-1">Concierge Rating</p></div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Moving to Dubai is overwhelming</h2>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          100,000+ expats move to Dubai every year. They spend weeks figuring out apartments, banks, schools — alone, stressed, and getting scammed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <p className="text-4xl mb-3">😩</p>
            <h3 className="font-bold text-gray-900 mb-2">Before Dari</h3>
            <p className="text-gray-500 text-sm">Weeks of research, WhatsApp groups, scammy agents, wrong schools, delayed bank accounts.</p>
          </div>
          <div className="flex items-center justify-center text-4xl">→</div>
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <p className="text-4xl mb-3">😌</p>
            <h3 className="font-bold text-gray-900 mb-2">After Dari</h3>
            <p className="text-gray-500 text-sm">Pay one fee. Everything sorted before you land. Walk off the plane ready to live.</p>
          </div>
        </div>
      </section>

      {/* 8 Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything You Need in One Place</h2>
            <p className="text-gray-500 text-lg">We coordinate all 8 services so you don't have to</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className={`${s.color} border rounded-2xl p-5 text-center`}>
                <p className="text-3xl mb-2">{s.icon}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/concierge" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors inline-block">
              Get My Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-lg">One fee. Everything handled. No surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className={`rounded-2xl p-8 border-2 ${pkg.highlight ? "border-emerald-500 bg-emerald-50 shadow-lg scale-105" : "border-gray-200 bg-white"}`}>
              {pkg.highlight && (
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">MOST POPULAR</span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{pkg.desc}</p>
              <p className="text-4xl font-bold text-emerald-600 mb-6">{pkg.price}</p>
              <ul className="space-y-2 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-emerald-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/concierge"
                className={`block text-center py-3 rounded-xl font-bold transition-colors ${pkg.highlight ? "bg-emerald-600 text-white hover:bg-emerald-700" : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
            <Link href="/properties" className="text-emerald-600 hover:underline text-sm font-medium">View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-700 text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to make Dubai home?</h2>
        <p className="text-emerald-200 text-lg mb-8 max-w-xl mx-auto">
          Join thousands of expats who moved to Dubai stress-free with Dari.
        </p>
        <Link href="/concierge"
          className="bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-colors inline-block">
          🚀 Start My Dubai Setup — Free Consultation
        </Link>
      </section>
    </div>
  );
}
