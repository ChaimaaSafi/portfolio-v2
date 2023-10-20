import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaimaa Safi",
  description: "Welcome to my portfolio!Enjoy your visit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-v2-phi-bay.vercel.app/",
    images: [
      {
        url: "https://portfolio-v2-phi-bay.vercel.app/assets/og-image.png",
        height: 1200,
        width: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Chaimaa Safi" />
        <meta
          property="og:description"
          content="Welcome to my portfolio!Enjoy your visit"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:image:secure_url" content="" />
        <meta
          property="og:url"
          content="https://portfolio-v2-phi-bay.vercel.app/assets/og-image.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
