"use client";

import * as React from "react";

export const AdaptiveCursor = () => {
  const cursorRef = React.useRef<HTMLSpanElement>(null);
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let scale = 1;
    let opacity = 0;

    const speed = 0.15; // Bewegungsgeschwindigkeit
    const animate = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * speed;
      currentY += dy * speed;

      // Transform wie bei anotherdei
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
      cursor.style.opacity = `${opacity}`;
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - 28; // Cursorgröße/2
      mouseY = e.clientY - 28;
      opacity = 0.25;
    };

    const handleMouseEnter = () => {
      opacity = 0.25;
    };

    const handleMouseLeave = () => {
      opacity = 0;
    };

    // adaptive hover zone für bestimmte Elemente
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='adaptive']")) {
        setIsActive(true);
        scale = 1.8;
      } else {
        setIsActive(false);
        scale = 1;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <span
      ref={cursorRef}
      className="fixed top-0 left-0 z-9999 h-14 w-14 rounded-full bg-white pointer-events-none will-change-transform mix-blend-difference transition-transform duration-200 ease-out"
    />
  );
};
