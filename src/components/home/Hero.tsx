"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import Image from "next/image";
import GlitchText from "@/components/ui/GlitchText";

export default function Hero() {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const item = {
        hidden: { y: "100%" },
        show: { y: "0%", transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as const } },
    };

    return (
        <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pb-32">
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="/dopamine_cutter_landing/assets/hero-noise.jpg"
                    alt="Static Noise"
                    fill
                    className="object-cover grayscale brightness-75"
                    priority
                />
            </div>

            <div className="z-10 text-center px-4 relative">
                <div className="mb-6">
                    <GlitchText
                        text={t("hero_status")}
                        className="text-[#ff2a2a] tracking-[0.5em] text-xs font-bold uppercase"
                    />
                </div>

                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="display-font text-6xl md:text-9xl font-extrabold leading-[0.9] uppercase tracking-tighter mb-8"
                >
                    <div className="overflow-hidden">
                        <motion.span variants={item} className="block">
                            {t("hero_w1")}
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            variants={item}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500"
                        >
                            {t("hero_w2")}
                        </motion.span>
                    </div>
                    <div className="overflow-hidden">
                        <motion.span
                            variants={item}
                            className="block italic text-[#ccff00]"
                        >
                            {t("hero_w3")}
                        </motion.span>
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="hero-sub max-w-md mx-auto text-gray-400 mt-8 break-keep"
                >
                    {t("hero_sub")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="mt-12"
                >
                    <a
                        href="https://chromewebstore.google.com/detail/dopamine-cutter-block-sho/lcjgndamdhkddnncjpfallkgdanpeeka?utm_source=landing_page"
                        target="_blank"
                        className="interactable inline-flex items-center gap-3 bg-[#ccff00] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
                    >
                        <span>{t("hero_btn")}</span>
                        <Scissors className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
                <span className="text-[10px] uppercase tracking-widest">{t("scroll_text")}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}
