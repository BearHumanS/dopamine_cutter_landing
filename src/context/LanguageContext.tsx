"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations } from '@/utils/translations';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations['en']) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ko');

    useEffect(() => {
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'ko') {
            setLanguage('ko');
        } else {
            setLanguage('en');
        }
    }, []);

    const t = (key: keyof typeof translations['en']) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
