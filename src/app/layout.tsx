import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Dari | داري — Find Your Home in the Gulf",
  description: "Search properties for sale and rent across Saudi Arabia, UAE, and the GCC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t py-8 text-sm text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© 2026 Dari · داري — Gulf Real Estate</p>
            <div className="flex items-center gap-6">
              <a href="/properties" className="hover:text-emerald-600 transition-colors">Listings</a>
              <a href="/list" className="hover:text-emerald-600 transition-colors">List Property</a>
              <a href="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</a>
              <a href="https://youooo.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Youooo</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
