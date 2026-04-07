"use client";
import dynamic from "next/dynamic";
import type { Property } from "@/lib/data";

const PropertyMap = dynamic(() => import("@/components/PropertyMap"), { ssr: false });

export default function MapWrapper({ properties, center }: { properties: Property[]; center?: [number, number] }) {
  return <PropertyMap properties={properties} center={center} />;
}
