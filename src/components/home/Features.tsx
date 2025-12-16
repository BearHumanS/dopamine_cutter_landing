"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Ban, EyeOff, MessageSquareOff, Zap, Play } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function Features() {
    const { t } = useLanguage();
    const cardRef = useRef<HTMLDivElement>(null);
    const layerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current || !layerRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        layerRef.current.style.clipPath = `circle(150px at ${x}px ${y}px)`;
    };

    const handleMouseLeave = () => {
        if (!layerRef.current) return;
        layerRef.current.style.clipPath = `circle(0px at 50% 50%)`;
    };

    return (
        <section className="min-h-screen relative flex items-center justify-center py-24 px-6" id="features">
            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="order-2 md:order-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="display-font text-5xl md:text-7xl font-bold mb-8 leading-tight"
                    >
                        <span>{t("feature_title_1")}</span> <br />
                        <span className="text-[#ccff00]">{t("feature_title_2")}</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed break-keep">
                        {t("feature_desc")}
                    </p>

                    <ul className="space-y-6">
                        <FeatureItem icon={<Ban className="w-6 h-6" />} title={t("f1_title")} desc={t("f1_desc")} />
                        <FeatureItem icon={<EyeOff className="w-6 h-6" />} title={t("f2_title")} desc={t("f2_desc")} />
                        <FeatureItem icon={<MessageSquareOff className="w-6 h-6" />} title={t("f3_title")} desc={t("f3_desc")} />
                    </ul>
                </div>

                {/* Visual Metaphor */}
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="order-1 md:order-2 relative h-[600px] w-full glass-panel rounded-2xl overflow-hidden group interactable cursor-none"
                    id="comparison-card"
                >
                    {/* 1. BAD UI */}
                    <div className="absolute inset-0 bg-[#0f0f0f] p-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                        <BadUIMockup />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none">
                            <span className="text-2xl font-bold text-white/30 tracking-widest uppercase rotate-12">{t("card_bad")}</span>
                        </div>
                    </div>

                    {/* 2. GOOD UI (Reveal) */}
                    <div
                        ref={layerRef}
                        className="absolute inset-0 bg-[#050505] flex items-center justify-center transition-all duration-100 ease-out"
                        style={{ clipPath: 'circle(0px at 50% 50%)' }}
                    >
                        <GoodUIMockup />
                    </div>

                    <div className="absolute bottom-6 left-0 w-full text-center text-xs uppercase tracking-widest text-white/50 pointer-events-none mix-blend-difference">
                        {t("card_instr")}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 opacity-50 border-b border-white/10 pb-4 interactable hover:opacity-100 transition-opacity"
        >
            <div className="bg-white/10 p-3 rounded-full text-[#ccff00]">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </motion.li>
    );
}

// Replaced mockups with generated assets for higher fidelity
const BadUIMockup = () => (
    <div className="w-full h-full relative bg-[#0a0a0a]">
        <Image
            src="/assets/ui-distraction.png"
            alt="Distracting UI"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[#ff2a2a]/10 mix-blend-overlay" />
    </div>
);

const GoodUIMockup = () => (
    <div className="w-full h-full flex items-center justify-center bg-black relative">
        <Image
            src="/assets/ui-focus.png"
            alt="Focused UI"
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay" />
    </div>
);
