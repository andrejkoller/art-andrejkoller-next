import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="fixed bottom-12 left-1/2 w-[calc(100%-128px)] -translate-x-1/2 z-10">
      <small className="text-foreground text-[0.5rem] leading-[18px] tracking-[3px] uppercase">
        © {new Date().getFullYear()} Andrej Koller
      </small>
      <div className="absolute top-1/2 -right-4 flex leading-none -translate-y-1/2">
        <Link
          className="relative h-12 w-12 inline-block"
          href={"https://linktr.ee/andrejkoller"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linktree Profile"
        >
          <span className="bg-[url('/icon-linktree.svg')] bg-center bg-no-repeat bg-[length:16px_16px] pointer-events-none relative h-12 w-12 inline-block brightness-0 invert"></span>
        </Link>
      </div>
    </footer>
  );
};
