"use client";

import { useLanguage } from "@/context/LanguageContext";
import GlitchText from "@/components/ui/GlitchText";

export default function ChangelogHeader() {
    const { t } = useLanguage();

    return (
        <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                <GlitchText text={t('changelog_title')} />
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
                {t('changelog_desc')}
            </p>
        </div>
    );
}
