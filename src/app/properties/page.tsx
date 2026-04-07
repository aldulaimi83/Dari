"use client";
import { useState, useMemo, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties as staticProperties, Property } from "@/lib/data";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

const CITIES = ["All", "Riyadh", "Dubai", "Jeddah", "Abu Dhabi", "Khobar", "Dammam", "Doha", "Kuwait City", "Manama"];
const TYPES = ["All", "villa", "apartment", "compound", "townhouse"];
const ROOM_OPTIONS = ["Any", "1", "2", "3", "4", "5+"];
const BATH_OPTIONS = ["Any", "1", "2", "3", "4", "5+"];
const STORY_OPTIONS = ["Any", "1", "2", "3", "4+"];
const GARAGE_OPTIONS = ["Any", "0", "1", "2", "3+"];

function matchNum(value: number | undefined, filter: string): boolean {
  if (filter === "Any") return true;
  if (value === undefined) return false;
  if (filter.endsWith("+")) return value >= parseInt(filter);
  return value === parseInt(filter);
}

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(searchParams.get("status") || "all");
  const [city, setCity] = useState(searchParams.get("city") || "All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("newest");
  const [bedrooms, setBedrooms] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [stories, setStories] = useState("Any");
  const [garage, setGarage] = useState("Any");
  const [userListings, setUserListings] = useState<Property[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("dari_listings") || "[]");
      setUserListings(saved);
    } catch { /* ignore */ }
  }, []);

  const allProperties = useMemo(() => [...userListings, ...staticProperties], [userListings]);

  const filtered = useMemo(() => {
    let list = [...allProperties];
    if (status !== "all") list = list.filter((p) => p.status === status);
    if (city !== "All") list = list.filter((p) => p.city === city);
    if (type !== "All") list = list.filter((p) => p.type === type);
    list = list.filter((p) => matchNum(p.bedrooms, bedrooms));
    list = list.filter((p) => matchNum(p.bathrooms, bathrooms));
    list = list.filter((p) => matchNum(p.stories, stories));
    list = list.filter((p) => matchNum(p.garage, garage));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime());
    return list;
  }, [allProperties, status, city, type, sort, bedrooms, bathrooms, stories, garage]);

  const selectCls = "px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white";

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Property Listings</h1>
        <Link href="/list" className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
          + Add Listing
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border p-4 mb-8 flex flex-wrap gap-4 items-end">
        {/* Buy / Rent */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Listing Type</label>
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

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} className={selectCls}>
            {CITIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Property Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className={selectCls}>
            {TYPES.map((t) => <option key={t} className="capitalize">{t}</option>)}
          </select>
        </div>

        {/* Bedrooms */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Bedrooms</label>
          <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className={selectCls}>
            {ROOM_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Bathrooms */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Bathrooms</label>
          <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className={selectCls}>
            {BATH_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Stories */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Stories</label>
          <select value={stories} onChange={(e) => setStories(e.target.value)} className={selectCls}>
            {STORY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Garage */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">Garage (cars)</label>
          <select value={garage} onChange={(e) => setGarage(e.target.value)} className={selectCls}>
            {GARAGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>

        {/* Sort */}
        <div className="flex flex-col gap-1 ml-auto">
          <label className="text-xs font-medium text-gray-500">Sort</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectCls}>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">{filtered.length} {filtered.length === 1 ? "property" : "properties"} found</p>

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
