import * as React from "react";
import Link from "next/link";
import { AdaptiveCursor } from "@/components/adaptive-cursor";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-1/2 mt-10 mx-auto w-[calc(100%-128px)] -translate-x-1/2 z-10 mix-blend-difference">
      <Link
        href="/"
        className="relative inline-block h-12 text-base leading-12.5 uppercase tracking-[6px] text-foreground after:absolute after:bottom-1 after:left-0 after:h-px after:w-[calc(100%-6px)] after:bg-foreground after:content-[''] after:inline-block after:scale-x-0 after:origin-right after:transition-transform after:duration-400 after:ease-[cubic-bezier(.5,.25,0,1)] after:will-change-transform hover:after:scale-x-100 hover:after:origin-left"
      >
        Andrej Koller
      </Link>

      <button
        className="absolute top-1/2 -right-4 p-0 h-16 w-16 bg-transparent border-0 rounded-0 outline-none -translate-y-1/2"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
      >
        <AdaptiveCursor />
        <span className="sr-only">Menu</span>
        <span className="absolute top-0 left-0 h-full w-full pointer-events-none before:scale-x-100 before:delay-[0ms] before:top-6.5 before:origin-left before:absolute before:left-4 before:h-0.5 before:w-8 before:bg-foreground before:content-[''] before:block before:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)] after:scale-x-100 after:delay-[0ms] after:bottom-6.5 after:origin-right after:absolute after:left-4 after:h-0.5 after:w-8 after:bg-foreground after:content-[''] after:block after:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)]"></span>
        <span className="absolute top-0 left-0 h-full w-full pointer-events-none before:origin-left before:absolute before:top-1/2 before:left-4 before:h-0.5 before:w-8 before:bg-foreground before:content-[''] before:block before:-translate-x-[3.5px] before:-translate-y-[20.75px] before:rotate-45 before:scale-x-0 before:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)_0ms] after:translate-x-[3.5px] after:-translate-y-[20.75px] after:-rotate-45 after:origin-right after:absolute after:top-1/2 after:left-4 after:h-0.5 after:w-8 after:bg-foreground after:content-[''] after:scale-x-0 after:block after:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)_0ms]"></span>
      </button>
    </header>
  );
};
