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
        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          © 2026 Dari · داري — Gulf Real Estate
        </footer>
      </body>
    </html>
  );
}
