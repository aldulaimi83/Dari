"use client";
import { useEffect, useRef } from "react";
import type { Property } from "@/lib/data";
import { formatPrice } from "@/lib/data";

export default function PropertyMap({ properties, center }: { properties: Property[]; center?: [number, number] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    import("leaflet").then((L) => {
      // Fix default icon paths
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const defaultCenter: [number, number] = center || [24.7136, 46.6753];
      const map = L.map(mapRef.current!).setView(defaultCenter, 5);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      properties.forEach((p) => {
        const marker = L.marker([p.lat, p.lng]).addTo(map);
        marker.bindPopup(`
          <div style="min-width:180px">
            <img src="${p.images[0]}" style="width:100%;height:90px;object-fit:cover;border-radius:6px;margin-bottom:8px" />
            <p style="font-weight:600;font-size:13px;margin:0 0 4px">${p.title}</p>
            <p style="color:#059669;font-weight:700;margin:0 0 4px">${formatPrice(p.price, p.currency)}</p>
            <a href="/properties/${p.id}" style="color:#059669;font-size:12px;text-decoration:underline">View Details →</a>
          </div>
        `);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapInstanceRef.current as any).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <div ref={mapRef} className="w-full h-full rounded-xl" />
    </>
  );
}
