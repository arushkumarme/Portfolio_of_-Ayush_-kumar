"use client";

import { useEffect } from "react";

// Reveals [data-reveal] blocks once, when they have scrolled a fair way into
// view rather than the moment their top edge appears, so the reader sees each
// effect play. Server-rendered content stays visible: only blocks that start
// below the viewport are hidden, and only after this script runs with motion
// allowed.
export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const show = (el: Element) => {
      el.classList.remove("reveal-pending");
      el.classList.add("reveal-in");
    };

    // Fires once the block's top enters near the bottom (90% viewport height)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const pending: HTMLElement[] = [];
    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add("reveal-pending");
      observer.observe(el);
      pending.push(el);
    }

    // Blocks near the end of the page may never reach the 80% line, so the
    // footer coming into view releases anything still waiting.
    const footer = document.querySelector(".footer");
    const end = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      for (const el of pending) if (el.classList.contains("reveal-pending")) show(el);
      end.disconnect();
    });
    if (footer) end.observe(footer);

    return () => {
      observer.disconnect();
      end.disconnect();
    };
  }, []);

  return null;
}
