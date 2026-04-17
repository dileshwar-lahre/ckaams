import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // <-- Yeh line add kar di maine

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Medical Aesthetics",
  description: "Advanced Clinical Cosmetology & Aesthetic Medicine Courses",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black"> 
        
        {/* Navbar har page par dikhega */}
        <Navbar/>

        {/* Page ka main content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer yahan render hoga */}
        <Footer/>

      </body>
    </html>
  );
}