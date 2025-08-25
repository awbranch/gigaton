import type { Metadata } from "next";
import { Spectral, Inter } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/relume/navbar-01";
import { Footer3 } from "@/components/relume/footer-03";

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
      <body className={`${spectral.variable} ${inter.variable}`}>
        <Navbar1 />
        <main>{children}</main>
        <Footer3 />
      </body>
    </html>
  );
}
