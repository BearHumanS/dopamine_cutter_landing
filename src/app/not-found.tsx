import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center text-center bg-[#050505] text-white p-4">
            {/* Background Gradient */}
            <div className="fixed inset-0 bg-gradient-mesh pointer-events-none" />

            <div className="relative z-10">
                <h1 className="display-font text-9xl font-bold mb-4 text-[#ccff00] animate-pulse">
                    404
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 uppercase tracking-widest">
                    Signal Lost
                </h2>
                <p className="text-gray-400 mb-12 max-w-md mx-auto">
                    The page you are looking for has been cut off from the network.
                    Return to focus.
                </p>

                <Link
                    href="/"
                    className="interactable inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-[#ccff00] transition-colors duration-300"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
