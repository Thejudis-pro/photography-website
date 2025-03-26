import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhotoArt - Professional Photography Services",
  description:
    "Professional photography services for weddings, portraits, events, and commercial projects. Capture your special moments with our expert team.",
  keywords: "photography, wedding photography, portrait photography, event photography, commercial photography",
  openGraph: {
    title: "PhotoArt - Professional Photography Services",
    description:
      "Professional photography services for weddings, portraits, events, and commercial projects. Capture your special moments with our expert team.",
    type: "website",
    locale: "en_US",
    siteName: "PhotoArt",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoArt - Professional Photography Services",
    description:
      "Professional photography services for weddings, portraits, events, and commercial projects. Capture your special moments with our expert team.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
