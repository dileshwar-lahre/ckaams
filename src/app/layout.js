import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CKAAMS | Aesthetic Medicine & Cosmetology Courses in India",

  description:
    "Join CKAAMS - Cosmetic Krafts Academy of Aesthetic Medicine and Surgery. Learn aesthetic medicine, cosmetology, botox, fillers, and laser treatments with hands-on training and certification.",

  keywords: [
    "aesthetic medicine course india",
    "cosmetology course india",
    "botox filler training",
    "dermal fillers course",
    "clinical cosmetology courses",
    "aesthetic medicine certification",
    "cosmetic surgery training",
    "hair transplant training",
    "laser treatment course",
    "best aesthetic academy india",
    "CKAAMS",
  ],

  verification: {
    google: "lUplk3qN-D0gl5G-iZWEXjUwbtlFsNTduWo50TseOqY",
  },

  openGraph: {
    title: "CKAAMS - Aesthetic Medicine Courses",
    description:
      "Advance your career with professional training in aesthetic medicine, cosmetology, botox, fillers, and laser treatments.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}