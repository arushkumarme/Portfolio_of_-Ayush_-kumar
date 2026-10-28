"use client";

import { useEffect } from "react";

// Smooth cubic in-out curve for natural, fluid gliding between anchors
const ease = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

// In-page links glide at a pace set by distance (0.85s to 1.5s) instead of the
// browser's fixed, quick smooth scroll. Only link clicks are handled: wheel,
// touchpad and touch scrolling stay native, and any of them cancels a glide.
export function SmoothAnchors() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest?.<HTMLAnchorElement>('a[href^="#"]');
      const id = link ? decodeURIComponent(link.hash.slice(1)) : "";
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();
      stop();
      history.pushState(null, "", `#${id}`);

      const maxTop = document.documentElement.scrollHeight - window.innerHeight;
      const to = Math.min(target.getBoundingClientRect().top + window.scrollY, maxTop);
      const from = window.scrollY;

      // Keyboard and screen-reader users land on the section they asked for
      const land = () => {
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };

      if (reduce.matches || Math.abs(to - from) < 2) {
        window.scrollTo({ top: to, behavior: "instant" });
        land();
        return;
      }

      const duration = Math.min(1500, Math.max(850, 550 + Math.abs(to - from) * 0.15));
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo({ top: from + (to - from) * ease(t), behavior: "instant" });
        if (t < 1) {
          frame = requestAnimationFrame(step);
        } else {
          stop();
          land();
        }
      };

      window.addEventListener("wheel", stop, { passive: true });
      window.addEventListener("touchstart", stop, { passive: true });
      window.addEventListener("keydown", stop);
      frame = requestAnimationFrame(step);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      stop();
    };
  }, []);

  return null;
}
