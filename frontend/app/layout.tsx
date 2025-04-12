import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import ogImage from "../app/opengraph-image.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://avhimaz.in"),
  title: {
    default: "avhimaz.in",
    template: "%s | avhimaz.in",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  description:
    "Welcome to the portfolio of Avhi Mazumder. Explore my projects, blogs, skills and experiences in development, design, and more.",
  openGraph: {
    title: "https://avhimaz.in",
    description:
      "Welcome to the portfolio of Avhi Mazumder. Explore my projects, blogs, skills and experiences in development, design, and more.",
    url: "https://avhimaz.in",
    siteName: "avhimaz.in",
    images: [
      {
        url: "https://avhimaz.in.11.04.2025_11.03.43_REC",
        width: ogImage.width,
        height: ogImage.height,
      },
    ],

    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Avhi_Maz",
    card: "summary_large_image",

    images: [
      {
        url: "https://avhimaz.in.11.04.2025_11.03.43_REC",
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}
