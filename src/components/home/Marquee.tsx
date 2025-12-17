"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Marquee() {
    const { t } = useLanguage();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Adjusted speed

    return (
        <section ref={ref} className="py-20 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden">
            <div className="noise-overlay absolute inset-0 bg-red-900/10 blur-3xl"></div>

            <div className="scrolling-text-container overflow-hidden whitespace-nowrap">
                <motion.h2 style={{ x: x1 }} className="text-[10vw] font-bold uppercase opacity-20 whitespace-nowrap leading-none">
                    Shorts Reels TikTok Shorts Reels TikTok Doomscrolling Dopamine Addiction
                </motion.h2>
            </div>

            <div className="scrolling-text-container mt-[-2vw] overflow-hidden whitespace-nowrap">
                <motion.h2 style={{ x: x2 }} className="text-[10vw] font-bold uppercase text-[#ff2a2a] opacity-80 whitespace-nowrap leading-none italic font-serif">
                    {t("marquee_chaos")}
                </motion.h2>
            </div>
        </section>
    );
}
