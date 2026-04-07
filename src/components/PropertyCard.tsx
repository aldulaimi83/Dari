import Link from "next/link";
import { Property, formatPrice } from "@/lib/data";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100">
      <div className="relative h-52 overflow-hidden bg-gray-200">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${property.status === "sale" ? "bg-emerald-600" : "bg-blue-600"}`}>
          {property.status === "sale" ? "For Sale" : "For Rent"}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium capitalize">
          {property.type}
        </span>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{property.neighborhood}, {property.city}</p>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>

        <p className="text-emerald-600 font-bold text-lg mb-3">
          {formatPrice(property.price, property.currency)}
          {property.status === "rent" && <span className="text-sm font-normal text-gray-500">/yr</span>}
        </p>

        <div className="flex items-center flex-wrap gap-3 text-sm text-gray-500 border-t pt-3">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1" title="Bedrooms">
              {/* bed icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {property.bedrooms} bd
            </span>
          )}
          <span className="flex items-center gap-1" title="Bathrooms">
            {/* drop icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            {property.bathrooms} ba
          </span>
          <span className="flex items-center gap-1" title="Area">
            {/* expand icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.area} m²
          </span>
          {property.stories && property.stories > 0 && (
            <span className="flex items-center gap-1" title="Stories">
              {/* layers icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {property.stories} fl
            </span>
          )}
          {property.garage !== undefined && property.garage > 0 && (
            <span className="flex items-center gap-1" title="Garage">
              {/* car icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5 1M13 16H3m10 0l1.5 1M13 16V10m0-4h3l3 4v6h-2.5" />
              </svg>
              {property.garage}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
