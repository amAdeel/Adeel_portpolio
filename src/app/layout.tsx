import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export const metadata: Metadata = {
  title: "Adeel_Portpolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#1e293b] text-white">
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer /> 
        </body>
    </html>
  );
}
