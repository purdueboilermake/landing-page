"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const COLORS = [
  "#E94560", // red-pink
  "#F5A623", // orange
  "#50E3C2", // teal
  "#BD10E0", // purple
  "#7ED321", // green
  "#4A90D9", // blue
  "#F8E71C", // yellow
  "#FF6B6B", // coral
];

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

export default function SprayPaintOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const styleTagRef = useRef<HTMLStyleElement | null>(null);
  const [active, setActive] = useState(false);
  const activeRef = useRef(false);

  // Sync activeRef so closures always see latest value
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  // --- Activate after the Hero section is fully behind the viewport.
  // The visible About content is absolutely positioned inside its section, so
  // the #about wrapper's rect does not reliably describe the painted area.
  useEffect(() => {
    const updateActiveState = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroRect = hero.getBoundingClientRect();
      setActive(heroRect.bottom <= 0);
    };

    updateActiveState();
    window.addEventListener("scroll", updateActiveState, { passive: true });
    window.addEventListener("resize", updateActiveState);
    return () => {
      window.removeEventListener("scroll", updateActiveState);
      window.removeEventListener("resize", updateActiveState);
    };
  }, []);

  // --- Canvas size: always matches viewport (canvas is position:fixed) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // --- Scroll handler: shift canvas content so paint stays on the page ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let lastScrollY = window.scrollY;
    // Reusable offscreen canvas to avoid allocation every scroll event
    const offscreen = document.createElement("canvas");

    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      if (!activeRef.current || dy === 0) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Copy current canvas to offscreen, then redraw shifted by -dy
      offscreen.width = canvas.width;
      offscreen.height = canvas.height;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      offCtx.drawImage(canvas, 0, 0);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(offscreen, 0, -dy); // shift content opposite to scroll direction
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Fade loop: slowly evaporates all paint ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;

    const fade = () => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0, 0, 0, 0.018)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
      }
      rafId = requestAnimationFrame(fade);
    };

    rafId = requestAnimationFrame(fade);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // --- Mouse tracking: cursor + spray ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorEl = cursorRef.current;

    const spray = (x: number, y: number) => {
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;

      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const { r, g, b } = hexToRgb(color);
      const dotCount = 10 + Math.floor(Math.random() * 8);
      const spread = 18;

      ctx.globalCompositeOperation = "source-over";

      for (let i = 0; i < dotCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * spread;
        const dx = x + Math.cos(angle) * dist;
        const dy = y + Math.sin(angle) * dist;
        const radius = 0.8 + Math.random() * 3;
        const alpha = 0.25 + Math.random() * 0.35;

        ctx.beginPath();
        ctx.arc(dx, dy, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      // Both canvas and cursor are fixed — screen coords
      if (cursorEl) {
        cursorEl.style.left = `${e.clientX}px`;
        cursorEl.style.top = `${e.clientY}px`;
      }
      if (!activeRef.current) return;
      spray(e.clientX, e.clientY);
    };

    const onMouseLeave = () => {
      if (cursorEl) cursorEl.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (cursorEl && activeRef.current) cursorEl.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  // --- Active state: hide cursor globally + manage style tag ---
  useEffect(() => {
    const cursorEl = cursorRef.current;

    if (active) {
      // Inject a style tag that hides the cursor on EVERY element,
      // including buttons, links, and anything with a pointer cursor.
      const style = document.createElement("style");
      style.textContent = `*, *::before, *::after { cursor: none !important; }`;
      document.head.appendChild(style);
      styleTagRef.current = style;

      if (cursorEl) cursorEl.style.opacity = "1";
    } else {
      // Remove the style tag to restore all cursors
      styleTagRef.current?.remove();
      styleTagRef.current = null;

      if (cursorEl) cursorEl.style.opacity = "0";

      // Clear canvas when returning to hero
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    return () => {
      styleTagRef.current?.remove();
      styleTagRef.current = null;
    };
  }, [active]);

  return (
    <>
      {/*
        Canvas: position FIXED so it always sits on top of page content.
        Scroll is handled by shifting canvas pixels, not by changing position.
        z-index 6 keeps it above background layers but below text/buttons.
      */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 6,
          pointerEvents: "none",
          opacity: active ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Spray can cursor: fixed, always follows mouse on screen */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s ease",
          transform: "translate(-12px, -80%)",
          willChange: "left, top",
        }}
      >
        <Image
          src="/imagesbm14/schedule/spray paint.png"
          alt=""
          width={48}
          height={80}
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </>
  );
}
