"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;
        if (!dot || !outline) return;

        const moveCursor = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;

            dot.style.left = `${posX}px`;
            dot.style.top = `${posY}px`;

            outline.animate(
                {
                    left: `${posX}px`,
                    top: `${posY}px`,
                },
                { duration: 500, fill: "forwards" }
            );
        };

        window.addEventListener("mousemove", moveCursor);

        // Hover effect
        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(".interactable")) {
                outline.classList.add("hovered");
            }
        };
        const handleMouseOut = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(".interactable")) {
                outline.classList.remove("hovered");
            }
        };

        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={outlineRef} className="cursor-outline" />
        </>
    );
}
