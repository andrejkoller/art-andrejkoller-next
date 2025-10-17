import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-12 gap-8 max-w-[1312px] mx-auto">
      <section className="relative mt-[384px] mb-[384px] pt-[180px] pb-[48px] px-[48px] col-start-3 col-end-11 bg-[#101010]">
        <div className="absolute w-[528px] -top-[232px] -right-[112px] before:pt-[69.6969697%] before:content-[''] block">
          <div className="absolute top-0 left-0 h-[368px] w-[528px] shadow-[0_4px_8px_0_rgba(0,0,0,.5),0_8px_16px_0_rgba(0,0,0,.25)] leading-none overflow-hidden">
            <Image
              className="absolute top-0 left-0"
              src={"/about.jpg"}
              alt={"Andrej Koller"}
              width={528}
              height={368}
            />
          </div>
        </div>
        <div className="absolute top-[48px] -left-[112px]">
          <h1 className="m-0 text-[#ffffff] text-[72px] font-normal leading-none overflow-hidden">
            <span className="inline-block">A</span>
            <span className="inline-block">b</span>
            <span className="inline-block">o</span>
            <span className="inline-block">u</span>
            <span className="inline-block">t</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">m</span>
            <span className="inline-block">e</span>
          </h1>
          <span className="absolute -bottom-4 right-0 h-px w-[calc(100%+48px)] bg-[#ffffff] block"></span>
        </div>
        <blockquote className="m-0 text-[#ffffff] text-[1.25rem] font-normal leading-[2.5rem]">
          <p className="mb-5">
            Hi there! I’m Danielle, a graphic designer born and raised in the
            Philippines, currently living in Baltimore. My experience includes
            illustration, branding, designing websites for e-commerce clients,
            as well as creating digital marketing and promotional materials.
            When I’m not designing, you can probably find me cooking, doodling
            in my sketchbook, or playing my Nintendo Switch.
          </p>
          <footer className="static w-auto text-right transform-none">
            — Andrej Koller
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
