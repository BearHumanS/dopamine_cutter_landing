"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-8 px-6 text-center text-gray-600 text-xs uppercase tracking-widest border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
            <p dangerouslySetInnerHTML={{ __html: t("footer") }} />
            <span className="hidden md:inline text-gray-800">|</span>
            <a
                href="https://bearhumans.github.io/privacy/"
                target="_blank"
                className="hover:text-white transition-colors underline underline-offset-4"
            >
                {t("privacy")}
            </a>
        </footer>
    );
}
