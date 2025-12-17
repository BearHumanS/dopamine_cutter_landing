import ChangelogList from "@/components/changelog/ChangelogList";
import ChangelogHeader from "@/components/changelog/ChangelogHeader";
import { LanguageProvider } from "@/context/LanguageContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "System Updates | Dopamine Cutter",
    description: "Track the evolution of the Dopamine Cutter system. See what's new in the latest version.",
};

export default function ChangelogPage() {
    return (
        <LanguageProvider>
            <main className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <ChangelogHeader />
                <ChangelogList />
            </main>
        </LanguageProvider>
    );
}
