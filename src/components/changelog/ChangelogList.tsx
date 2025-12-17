"use client";

import { changelogData } from "@/data/changelog";
import { useLanguage } from "@/context/LanguageContext";

export default function ChangelogList() {
    const { language } = useLanguage();

    return (
        <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
            {changelogData.map((entry, index) => (
                <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-black border-2 border-[#ccff00] z-10 box-border shadow-[0_0_10px_rgba(204,255,0,0.5)]" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3">
                        <span className="text-2xl font-bold text-[#ccff00] font-display">
                            {entry.version}
                        </span>
                        <span className="text-sm text-gray-500 font-mono">
                            {entry.date}
                        </span>
                        {entry.type && (
                            <span className={`text-xs px-2 py-0.5 rounded border ${entry.type === 'feature' ? 'border-blue-500/50 text-blue-400' :
                                entry.type === 'fix' ? 'border-red-500/50 text-red-400' :
                                    'border-gray-500/50 text-gray-400'
                                } bg-black/50 backdrop-blur-sm self-start md:self-auto uppercase tracking-wider`}>
                                {entry.type}
                            </span>
                        )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-4">
                        {entry.title[language]}
                    </h2>

                    <ul className="space-y-3">
                        {entry.description[language]?.map((desc, i) => (
                            <li key={i} className="flex items-start text-gray-300 leading-relaxed">
                                <span className="mr-3 text-[#ccff00] mt-1.5 text-xs">▶</span>
                                {desc}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
