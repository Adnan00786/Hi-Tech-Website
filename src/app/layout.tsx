import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi Tech Copier Solutions",
  description: "Hi Tech Copier Solutions offers top-quality Canon, Xerox, and Kyocera copier sales, services, and rentals in Hyderabad. Best prices guaranteed. Call us for the best copier solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
