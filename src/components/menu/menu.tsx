import Link from "next/link";

export const Menu = () => {
  const linkStyles = `
    relative pt-[0.15em] pr-[0.5em] pb-0 pl-[0.65em] 
    text-foreground text-[96px] tracking-[0.125em] 
    opacity-75 uppercase transition-[opacity_.4s_cubic-bezier(.5,.25,0,1)] 
    z-[1]
    before:absolute before:top-1/2 before:h-0.5 before:w-12 
    before:bg-foreground before:content-[''] before:inline-block 
    before:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)] 
    before:-z-[1] before:right-full before:-translate-y-1/2 
    before:scale-x-0 before:origin-left
    after:left-full after:-translate-y-1/2 after:scale-x-0 
    after:origin-left after:absolute after:top-1/2 after:h-0.5 
    after:w-12 after:bg-foreground after:content-[''] 
    after:inline-block after:transition-[transform_.4s_cubic-bezier(.5,.25,0,1)] 
    after:-z-[1]
  `;

  return (
    <nav className="fixed top-0 left-0 h-0 w-full bg-[#0a0a0a] z-50">
      <ul
        className="
        fixed top-1/2 m-0 p-0 w-full hidden list-none 
        text-center -translate-y-1/2
      "
      >
        <li className="mb-[4vh] will-change-transform">
          <Link className={linkStyles} href="/">
            Home
          </Link>
        </li>
        <li className="mb-[4vh] will-change-transform">
          <Link className={linkStyles} href="/about">
            About
          </Link>
        </li>
        <li className="mb-[4vh] will-change-transform">
          <Link className={linkStyles} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
