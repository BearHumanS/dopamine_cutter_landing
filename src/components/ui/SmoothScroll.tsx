"use client";

import ReactLenis from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const options = {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical" as const,
        gestureDirection: "vertical" as const,
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    };

    return (
        <ReactLenis root options={options}>
            {/* @ts-ignore */}
            {children}
        </ReactLenis>
    );
}
