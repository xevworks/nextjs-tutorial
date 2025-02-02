import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js Course",
  description: "Generated by create next app",
  openGraph: {
    siteName: "Next.js Course",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Navbar></Navbar>
        <main className="p-20 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
