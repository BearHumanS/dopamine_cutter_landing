"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-xl font-bold tracking-tighter uppercase interactable">
                Dopamine Cutter
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <button
                        className={`lang-btn interactable hover:text-[#ccff00] transition-colors ${language === "en" ? "text-[#ccff00] font-bold" : ""
                            }`}
                        onClick={() => setLanguage("en")}
                    >
                        EN
                    </button>
                    <span className="opacity-30">|</span>
                    <button
                        className={`lang-btn interactable hover:text-[#ccff00] transition-colors ${language === "ko" ? "text-[#ccff00] font-bold" : ""
                            }`}
                        onClick={() => setLanguage("ko")}
                    >
                        KO
                    </button>
                </div>

                <Link
                    href="/changelog"
                    className="hidden md:block text-sm font-medium hover:text-[#ccff00] transition-colors interactable"
                >
                    {t("updates")}
                </Link>

                <a
                    href="https://chromewebstore.google.com/detail/dopamine-cutter-block-sho/lcjgndamdhkddnncjpfallkgdanpeeka?utm_source=landing_page"
                    target="_blank"
                    className="interactable group flex items-center gap-2 text-sm font-medium hover:text-[#ccff00] transition-colors"
                >
                    <span>{t("nav_cta")}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
            </div>
        </nav>
    );
}
