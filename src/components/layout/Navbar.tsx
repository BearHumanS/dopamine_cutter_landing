"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
                <Link href="/" className="text-xl font-bold tracking-tighter uppercase interactable z-50">
                    Dopamine Cutter
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
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
                        className="text-sm font-medium hover:text-[#ccff00] transition-colors interactable"
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

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden interactable z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 text-white md:hidden"
                    >
                        {/* Language Toggle Mobile */}
                        <div className="flex items-center gap-6 text-2xl font-bold">
                            <button
                                className={`interactable transition-colors ${language === "en" ? "text-[#ccff00]" : "text-white/50"
                                    }`}
                                onClick={() => { setLanguage("en"); }}
                            >
                                EN
                            </button>
                            <span className="opacity-30">/</span>
                            <button
                                className={`interactable transition-colors ${language === "ko" ? "text-[#ccff00]" : "text-white/50"
                                    }`}
                                onClick={() => { setLanguage("ko"); }}
                            >
                                KO
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-col items-center gap-8">
                            <Link
                                href="/changelog"
                                className="text-3xl font-bold tracking-tight hover:text-[#ccff00] transition-colors interactable"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t("updates")}
                            </Link>

                            <a
                                href="https://chromewebstore.google.com/detail/dopamine-cutter-block-sho/lcjgndamdhkddnncjpfallkgdanpeeka?utm_source=landing_page"
                                target="_blank"
                                className="interactable px-8 py-4 bg-[#ccff00] text-black text-lg font-bold rounded-full flex items-center gap-2 hover:bg-white transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>{t("nav_cta")}</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
