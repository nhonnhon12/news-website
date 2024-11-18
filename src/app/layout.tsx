import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "News Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-100">
        <Header />
        <div className="w-full justify-between content-center py-8 px-4 md:px-24 text-gray-800 z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
