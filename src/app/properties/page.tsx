"use client";
import { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const CITIES = ["All", "Riyadh", "Dubai", "Jeddah", "Abu Dhabi", "Khobar"];
const TYPES = ["All", "villa", "apartment", "compound", "townhouse"];

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [city, setCity] = useState(searchParams.get("city") || "All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("newest");

  const filtered = useMemo(() => {
    let list = [...properties];
    if (status !== "all") list = list.filter((p) => p.status === status);
    if (city !== "All") list = list.filter((p) => p.city === city);
    if (type !== "All") list = list.filter((p) => p.type === type);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [status, city, type, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Property Listings</h1>

      {/* Filters */}
      <div className="bg-white rounded-xl border p-4 mb-8 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Type</label>
          <div className="flex gap-2">
            {["all", "sale", "rent"].map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${status === s ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {s === "all" ? "All" : s === "sale" ? "Buy" : "Rent"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {CITIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Property Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {TYPES.map((t) => <option key={t} className="capitalize">{t}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1 ml-auto">
          <label className="text-xs font-medium text-gray-500">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">{filtered.length} properties found</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl">No properties found</p>
          <p className="text-sm mt-2">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense>
      <PropertiesContent />
    </Suspense>
  );
}
