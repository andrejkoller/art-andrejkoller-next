"use client";

import * as React from "react";

export const Cursor = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [innerPos, setInnerPos] = React.useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = React.useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = React.useState(false);

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as Element;
      const isLink = target?.closest("a") !== null;
      setIsHoveringLink(isLink);
    };

    window.addEventListener("mousemove", handleMove);
    document.body.style.cursor = "none";

    let animationFrame: number;

    const animate = () => {
      setOuterPos(mousePos);

      setInnerPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "auto";
    };
  }, [mousePos]);

  return (
    <React.Fragment>
      <div
        className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block"
        style={{
          transform: `translate3d(${outerPos.x - 24}px, ${
            outerPos.y - 24
          }px, 1px) scale(${isHoveringLink ? 1.5 : 1})`,
        }}
      >
        <div className="h-12 w-12 rounded-full border border-white shadow-[0_0_0_1px_#000] origin-center transition-all will-change-transform duration-150 ease-out"></div>
      </div>

      <div
        className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:block"
        style={{
          transform: `translate3d(${innerPos.x - 6}px, ${
            innerPos.y - 6
          }px, 1px) scale(${isHoveringLink ? 1.5 : 1})`,
        }}
      >
        <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_0_1px_#000] origin-center transition-transform will-change-transform duration-75 ease-out"></div>
      </div>
    </React.Fragment>
  );
};
