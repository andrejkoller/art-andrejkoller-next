import Link from "next/link";

export const Menu = () => {
  const linkStyles = `
    relative inline-block pt-[0.15em] pr-[0.5em] pb-0 pl-[0.65em]
    text-foreground text-[96px] tracking-[0.125em]
    opacity-75 uppercase transition-all duration-500 ease-[cubic-bezier(.5,.25,0,1)]
    z-[1] hover:opacity-100
    before:absolute before:top-1/2 before:h-0.5 before:w-12
    before:bg-foreground before:content-[''] before:-z-[1]
    before:right-full before:origin-right before:scale-x-0
    before:translate-y-[-50%]
    before:transition-transform before:duration-500 before:ease-[cubic-bezier(.5,.25,0,1)]
    after:absolute after:top-1/2 after:h-0.5 after:w-12
    after:bg-foreground after:content-[''] after:-z-[1]
    after:left-full after:origin-left after:scale-x-0
    after:translate-y-[-50%]
    after:transition-transform after:duration-500 after:ease-[cubic-bezier(.5,.25,0,1)]
    hover:before:scale-x-100 hover:after:scale-x-100
  `;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] z-10">
      <ul className="fixed top-1/2 m-0 p-0 w-full list-none text-center hidden">
        {["Home", "About", "Contact"].map((label, i) => (
          <li key={i} className="mb-[4vh] will-change-transform">
            <Link className={linkStyles} href={`/${label.toLowerCase()}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
