import { properties, formatPrice } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/properties" className="text-sm text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Images + Details */}
        <div className="lg:col-span-2">
          {/* Images */}
          <div className="grid grid-cols-2 gap-2 mb-6 rounded-2xl overflow-hidden">
            <img src={property.images[0]} alt={property.title} className="col-span-2 w-full h-72 object-cover" />
            {property.images.slice(1).map((img, i) => (
              <img key={i} src={img} alt={`${property.title} ${i + 2}`} className="w-full h-40 object-cover" />
            ))}
          </div>

          {/* Title + badges */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
              <p className="text-gray-500 mt-1">{property.titleAr}</p>
              <p className="text-gray-500 text-sm mt-1">{property.neighborhood}, {property.city}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-emerald-600">
                {formatPrice(property.price, property.currency)}
              </p>
              {property.status === "rent" && <p className="text-gray-400 text-sm">per year</p>}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-xl p-4 mb-6">
            {property.bedrooms > 0 && (
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                <p className="text-xs text-gray-500">Bedrooms</p>
              </div>
            )}
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
              <p className="text-xs text-gray-500">Bathrooms</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{property.area}</p>
              <p className="text-xs text-gray-500">sqm</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Location</h2>
            <div className="h-72 rounded-xl overflow-hidden border">
              <MapWrapper properties={[property]} center={[property.lat, property.lng]} />
            </div>
          </div>
        </div>

        {/* Right: Agent Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border rounded-2xl p-6 shadow-sm sticky top-24">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                {property.agentName[0]}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{property.agentName}</p>
                <p className="text-sm text-gray-500">Verified Agent</p>
              </div>
            </div>

            <a
              href={`tel:${property.agentPhone}`}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mb-3"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Agent
            </a>

            <a
              href={`https://wa.me/${property.agentPhone.replace(/\s+/g, "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>

            <div className="mt-4 pt-4 border-t text-sm text-gray-500">
              <p>Listed: {new Date(property.listedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
              <p className="mt-1 capitalize">Type: {property.type} · {property.status === "sale" ? "For Sale" : "For Rent"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
