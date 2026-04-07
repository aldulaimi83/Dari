export type Property = {
  id: string;
  title: string;
  titleAr: string;
  type: "villa" | "apartment" | "compound" | "townhouse";
  status: "sale" | "rent";
  price: number;
  currency: "SAR" | "AED";
  city: string;
  cityAr: string;
  neighborhood: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // sqm
  lat: number;
  lng: number;
  images: string[];
  description: string;
  agentName: string;
  agentPhone: string;
  listedAt: string;
};

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Villa in Al Olaya",
    titleAr: "فيلا حديثة في العليا",
    type: "villa",
    status: "sale",
    price: 4500000,
    currency: "SAR",
    city: "Riyadh",
    cityAr: "الرياض",
    neighborhood: "Al Olaya",
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    lat: 24.6877,
    lng: 46.6921,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    description: "Stunning modern villa with private pool, landscaped garden, and smart home system in the heart of Riyadh's most prestigious district.",
    agentName: "Mohammed Al-Rashidi",
    agentPhone: "+966 50 123 4567",
    listedAt: "2026-03-15",
  },
  {
    id: "2",
    title: "Luxury Apartment in Dubai Marina",
    titleAr: "شقة فاخرة في مارينا دبي",
    type: "apartment",
    status: "rent",
    price: 18000,
    currency: "AED",
    city: "Dubai",
    cityAr: "دبي",
    neighborhood: "Dubai Marina",
    bedrooms: 2,
    bathrooms: 2,
    area: 140,
    lat: 25.0805,
    lng: 55.1403,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    description: "High-floor apartment with breathtaking marina and sea views. Fully furnished, gym and pool access included.",
    agentName: "Sara Al-Mansouri",
    agentPhone: "+971 55 987 6543",
    listedAt: "2026-03-20",
  },
  {
    id: "3",
    title: "Family Villa in Jeddah Corniche",
    titleAr: "فيلا عائلية في كورنيش جدة",
    type: "villa",
    status: "sale",
    price: 3200000,
    currency: "SAR",
    city: "Jeddah",
    cityAr: "جدة",
    neighborhood: "Al Corniche",
    bedrooms: 4,
    bathrooms: 5,
    area: 480,
    lat: 21.5433,
    lng: 39.1728,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    ],
    description: "Spacious family villa steps from the Red Sea. Includes maid's quarters, driver's room, and rooftop terrace with sea views.",
    agentName: "Khalid Bahamdan",
    agentPhone: "+966 55 321 0987",
    listedAt: "2026-03-10",
  },
  {
    id: "4",
    title: "Studio Apartment in Abu Dhabi",
    titleAr: "استوديو في أبوظبي",
    type: "apartment",
    status: "rent",
    price: 5500,
    currency: "AED",
    city: "Abu Dhabi",
    cityAr: "أبوظبي",
    neighborhood: "Al Reem Island",
    bedrooms: 0,
    bathrooms: 1,
    area: 52,
    lat: 24.4975,
    lng: 54.3885,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    ],
    description: "Modern studio on Al Reem Island. Close to malls, schools, and waterfront. Ideal for professionals.",
    agentName: "Fatima Al-Zaabi",
    agentPhone: "+971 50 456 7890",
    listedAt: "2026-04-01",
  },
  {
    id: "5",
    title: "Compound Villa in Khobar",
    titleAr: "فيلا مجمع في الخبر",
    type: "compound",
    status: "rent",
    price: 85000,
    currency: "SAR",
    city: "Khobar",
    cityAr: "الخبر",
    neighborhood: "Al Corniche",
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    lat: 26.2794,
    lng: 50.2083,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    ],
    description: "Secure gated compound villa with shared pool, tennis court, and 24/7 security. Popular with expat families.",
    agentName: "Omar Al-Ghamdi",
    agentPhone: "+966 56 789 0123",
    listedAt: "2026-03-25",
  },
  {
    id: "6",
    title: "Penthouse in Downtown Dubai",
    titleAr: "بنتهاوس في وسط دبي",
    type: "apartment",
    status: "sale",
    price: 12000000,
    currency: "AED",
    city: "Dubai",
    cityAr: "دبي",
    neighborhood: "Downtown Dubai",
    bedrooms: 4,
    bathrooms: 5,
    area: 520,
    lat: 25.1972,
    lng: 55.2744,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800",
    ],
    description: "Ultra-luxury penthouse with direct Burj Khalifa views, private terrace, and concierge service.",
    agentName: "Ali Hassan",
    agentPhone: "+971 52 111 2233",
    listedAt: "2026-02-28",
  },
];

export function formatPrice(price: number, currency: string): string {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M ${currency}`;
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(0)}K ${currency}`;
  }
  return `${price.toLocaleString()} ${currency}`;
}
