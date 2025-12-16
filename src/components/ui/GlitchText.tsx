"use client";
import React from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
    return (
        <div className={`${styles.glitchWrapper} ${className}`}>
            <span className={styles.glitchText} data-text={text}>
                {text}
            </span>
        </div>
    );
}
