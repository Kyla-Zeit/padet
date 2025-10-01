// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kyla-zeit.github.io/padet"),
  title: {
    default: "PADet — Professional Alliance for Development Ethiopia",
    template: "%s | PADet",
  },
  description:
    "Programs and partnerships improving the lives of children, youth, and women across Ethiopia.",
  openGraph: {
    title: "PADet — Professional Alliance for Development Ethiopia",
    description:
      "Programs and partnerships improving the lives of children, youth, and women across Ethiopia.",
    url: "https://kyla-zeit.github.io/padet/",
    siteName: "PADet",
    images: [
      {
        url: "https://kyla-zeit.github.io/padet/og.jpg", // put an image in /public/og.jpg
        width: 1200,
        height: 630,
        alt: "PADet",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADet",
    description:
      "Programs and partnerships improving the lives of children, youth, and women across Ethiopia.",
    images: ["https://kyla-zeit.github.io/padet/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico", // add /public/favicon.ico
  },
};
