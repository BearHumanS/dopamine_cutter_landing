"use client";
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Features from "@/components/home/Features";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="noise-overlay"></div>
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Features />
          <Stats />
          <CTA />
          <Footer />
        </main>
      </SmoothScroll>
    </LanguageProvider>
  );
}
