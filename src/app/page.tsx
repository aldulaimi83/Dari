import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";

const CITIES = ["Riyadh", "Dubai", "Jeddah", "Abu Dhabi", "Khobar"];

export default function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Home in the Gulf
          </h1>
          <p className="text-xl text-emerald-100 mb-10">
            ابحث عن منزلك المثالي في الخليج
          </p>

          {/* Search bar */}
          <div className="bg-white rounded-2xl p-3 shadow-xl flex flex-col md:flex-row gap-3 max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search city, neighborhood..."
              className="flex-1 px-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select className="px-4 py-3 text-gray-700 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option value="">Buy or Rent</option>
              <option value="sale">Buy</option>
              <option value="rent">Rent</option>
            </select>
            <Link
              href="/properties"
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center"
            >
              Search
            </Link>
          </div>

          {/* Quick city links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {CITIES.map((city) => (
              <Link
                key={city}
                href={`/properties?city=${city}`}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold text-emerald-600">2,400+</p>
            <p className="text-gray-500 text-sm mt-1">Active Listings</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-600">6</p>
            <p className="text-gray-500 text-sm mt-1">GCC Cities</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-emerald-600">850+</p>
            <p className="text-gray-500 text-sm mt-1">Verified Agents</p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Properties</h2>
          <Link href="/properties" className="text-emerald-600 hover:underline text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 border-y py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Have a Property to List?</h2>
        <p className="text-gray-600 mb-6">Reach thousands of verified buyers and renters across the GCC.</p>
        <Link
          href="/properties"
          className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors inline-block"
        >
          List Your Property Free
        </Link>
      </section>
    </div>
  );
}
