import type { Metadata } from "next";
import { Spectral, Inter } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gigaton Finance",
  description: "Carbon Credits You Can Trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.variable} ${inter.variable} antialiased`}>
        <main className="border-gig-white bg-gig-paper shadow-gig-paper mx-auto max-w-[1500px] border-[10px] md:border-[30px]">
          {children}
        </main>
      </body>
    </html>
  );
}
