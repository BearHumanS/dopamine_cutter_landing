"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Stats() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="display-font text-6xl md:text-8xl font-bold mb-16 tracking-tighter">
                    <span>{t("stat_title_1")}</span> <br />
                    <span>{t("stat_title_2")}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
                    <StatItem label={t("stat_1_label")} value={5} unit={t("stat_1_unit")} />
                    <StatItem label={t("stat_2_label")} value={40} unit="%" />
                    <StatItem label={t("stat_3_label")} value={Infinity} unit={t("stat_3_unit")} isInfinity />
                </div>
            </div>
        </section>
    );
}

function StatItem({ label, value, unit, isInfinity }: { label: string, value: number, unit: string, isInfinity?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView && !isInfinity && ref.current) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(val) {
                    if (ref.current) ref.current.textContent = Math.round(val).toString();
                }
            });
            return controls.stop;
        }
    }, [inView, value, isInfinity]);

    return (
        <div className="bg-white p-10 flex flex-col justify-between h-64 group hover:bg-[#ccff00] transition-colors duration-300">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 group-hover:text-black">{label}</span>
            <div className="flex items-baseline gap-2">
                <span ref={ref} className="text-6xl font-bold">
                    {isInfinity ? "∞" : "0"}
                </span>
                <span className="text-xl font-serif italic">{unit}</span>
            </div>
        </div>
    );
}
