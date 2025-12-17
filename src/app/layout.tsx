import type { Metadata } from "next";
import { Space_Grotesk, Syne, Noto_Sans_KR } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import Cursor from "@/components/ui/Cursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "700", "800"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  weight: ["300", "400", "500", "700", "900"],
  preload: false, // Often needed for Noto Sans KR to avoid timeout
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bearhumans.github.io'),
  title: {
    default: "Dopamine Cutter | Reclaim Your Brain",
    template: "%s | Dopamine Cutter",
  },
  description: "Stop the doom scrolling. Block Shorts. Reclaim your attention span. 둠스크롤링을 멈추고 집중력을 되찾으세요.",
  keywords: ["dopamine detox", "block shorts", "digital wellbeing", "focus app", "도파민 중독", "쇼츠 차단", "집중력 향상"],
  authors: [{ name: "Dopamine Cutter Team" }],
  creator: "Dopamine Cutter",
  publisher: "Dopamine Cutter",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: "https://bearhumans.github.io/dopamine_cutter_landing/",
    title: "Dopamine Cutter | Reclaim Your Brain",
    description: "Stop the doom scrolling. Block Shorts. Reclaim your attention span.",
    siteName: "Dopamine Cutter",
    images: [
      {
        url: "https://bearhumans.github.io/dopamine_cutter_landing/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dopamine Cutter - Reclaim Your Brain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dopamine Cutter | Reclaim Your Brain",
    description: "Stop the doom scrolling. Block Shorts. Reclaim your attention span.",
    images: ["https://bearhumans.github.io/dopamine_cutter_landing/og-image.png"],
    creator: "@dopaminecutter",
  },
  verification: {
    google: "OwiHh7_fFofvyDdZLvIbIoKoVI8Dfp_7Yp7hbTtMFvA",
  },
};

const theme = createTheme({
  colors: {
    // approximating the neon green as a primary color
    neonGreen: [
      "#f4ffcc",
      "#eaff99",
      "#dfff66",
      "#d5ff33",
      "#ccff00", // main
      "#a3cc00",
      "#7a9900",
      "#526600",
      "#293300",
      "#000000",
    ],
  },
  primaryColor: "neonGreen",
  fontFamily: `var(--font-space-grotesk), var(--font-noto-sans-kr), sans-serif`,
  headings: {
    fontFamily: `var(--font-syne), var(--font-noto-sans-kr), sans-serif`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${syne.variable} ${notoSansKR.variable}`} suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased selection:bg-[#ccff00] selection:text-black">
        <div className="bg-gradient-mesh" />
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Cursor />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
