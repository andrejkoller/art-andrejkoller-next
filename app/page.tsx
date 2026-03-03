import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center h-screen w-full">
      <nav className="relative w-full overflow-hidden">
        <ul className="relative m-0 py-0 px-1 h-full w-full flex bg-[rgba(0,0,0,.5)] list-none">
          <li className="relative py-0 px-1 h-full w-[33.33333%] leading-none">
            <Link
              href="/2027"
              className="relative block before:pt-[100%] before:content-[''] before:block after:absolute after:transition-[opacity_.4s_cubic-bezier(.5,.25,0,1)] after:will-change-[opacity] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#000000] after:content-[''] after:opacity-0 hover:after:opacity-50"
            >
              <div className="hidden">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="border-none"
                />
              </div>
              <h1 className="absolute top-1/2 left-1/2 mt-[1vw] mb-0 -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-[10vw] font-normal leading-none opacity-[.875] overflow-hidden pointer-events-none no-underline whitespace-nowrap z-10">
                <span>2</span>
                <span>0</span>
                <span>2</span>
                <span>7</span>
              </h1>
            </Link>
          </li>
          <li className="relative py-0 px-1 h-full w-[33.33333%] leading-none">
            <Link
              href="/2028"
              className="relative block before:pt-[100%] before:content-[''] before:block after:absolute after:transition-[opacity_.4s_cubic-bezier(.5,.25,0,1)] after:will-change-[opacity] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#000000] after:content-[''] after:opacity-0 hover:after:opacity-50"
            >
              <div className="hidden">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="border-none"
                />
              </div>
              <h1 className="absolute top-1/2 left-1/2 mt-[1vw] mb-0 -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-[10vw] font-normal leading-none opacity-[.875] overflow-hidden pointer-events-none no-underline whitespace-nowrap z-10">
                <span>2</span>
                <span>0</span>
                <span>2</span>
                <span>8</span>
              </h1>
            </Link>
          </li>
          <li className="relative py-0 px-1 h-full w-[33.33333%] leading-none">
            <Link
              href="/2029"
              className="relative block before:pt-[100%] before:content-[''] before:block after:absolute after:transition-[opacity_.4s_cubic-bezier(.5,.25,0,1)] after:will-change-[opacity] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#000000] after:content-[''] after:opacity-0 hover:after:opacity-50"
            >
              <div className="hidden">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="border-none"
                />
              </div>
              <h1 className="absolute top-1/2 left-1/2 mt-[1vw] mb-0 -translate-x-1/2 -translate-y-1/2 text-[#ffffff] text-[10vw] font-normal leading-none opacity-[.875] overflow-hidden pointer-events-none no-underline whitespace-nowrap z-10">
                <span>2</span>
                <span>0</span>
                <span>2</span>
                <span>9</span>
              </h1>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
