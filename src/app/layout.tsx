import type { Metadata } from "next";
import { Space_Grotesk, Syne, Noto_Sans_KR } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";

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
  title: "Dopamine Cutter | Reclaim Your Brain",
  description: "Stop the doom scrolling. Block Shorts. Reclaim your attention span.",
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
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
