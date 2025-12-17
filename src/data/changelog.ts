export interface ChangelogEntry {
    version: string;
    date: string;
    title: string;
    description: string[];
    type?: 'feature' | 'fix' | 'improvement';
}

export const changelogData: ChangelogEntry[] = [
    {
        version: "v1.0.0",
        date: "2025-12-14",
        title: "Initial Launch",
        description: [
            "Released Dopamine Cutter Chrome Extension.",
            "Blocked Shorts, Reels, and TikTok feeds by default.",
            "Added customizable 'Replace with Wisdom' quote feature.",
            "Implemented strict mode for deep focus sessions."
        ],
        type: "feature"
    }
];
