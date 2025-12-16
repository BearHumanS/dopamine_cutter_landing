"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-[#050505] text-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-[#050505] to-[#050505]"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="display-font text-5xl md:text-7xl font-bold mb-8">
                    <span>{t("cta_title_1")}</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-green-500">
                        {t("cta_title_2")}
                    </span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 break-keep">
                    {t("cta_desc")}
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a
                        href="https://chromewebstore.google.com/detail/dopamine-cutter-block-sho/lcjgndamdhkddnncjpfallkgdanpeeka?utm_source=landing_page"
                        target="_blank"
                        className="interactable group relative px-10 py-5 bg-[#ccff00] text-black font-bold text-lg rounded-full overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                            {t("cta_btn")}
                        </span>
                        <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
