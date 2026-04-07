"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

const DEFAULT_EASING = (t: number) => 1 - Math.pow(1 - t, 4);

export default function SmoothScroll() {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        if (mediaQuery.matches) {
            return;
        }

        const lenis = new Lenis({
            autoRaf: true,
            anchors: true,
            duration: 1.15,
            easing: DEFAULT_EASING,
            touchMultiplier: 1,
            wheelMultiplier: 0.95,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
