import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

/**
 * Smoothly scrolls the window to a target element or selector with a silky ease-in-out curve.
 * @param target Selector string (e.g. '#overview', '#case-studies'), HTMLElement, or number (pixels)
 * @param duration Duration in seconds (default 1.25)
 */
export const smoothScrollTo = (target: string | number | HTMLElement, duration = 1.25) => {
    let targetElement: HTMLElement | number | null = null;

    if (typeof target === "string") {
        if (target.startsWith("#")) {
            const id = target.substring(1);
            targetElement = document.getElementById(id);
        } else {
            targetElement = document.querySelector<HTMLElement>(target);
        }
        if (!targetElement) return;
    } else {
        targetElement = target;
    }

    gsap.to(window, {
        duration,
        scrollTo: {
            y: targetElement,
            offsetY: 75,
            autoKill: true,
        },
        ease: "power3.inOut",
        overwrite: "auto",
    });
};
