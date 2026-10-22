"use client";

import { useEffect } from "react";

// Reveals [data-reveal] blocks once as they scroll into view.
// Server-rendered content stays visible: only blocks that start below the
// viewport are hidden, and only after this script runs with motion allowed.
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add("reveal-pending");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
