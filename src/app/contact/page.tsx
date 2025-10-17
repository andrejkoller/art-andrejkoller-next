export default function Contact() {
  return (
    <div className="grid grid-cols-12 w-[calc(100%-128px)] max-w-[1312px] mx-auto">
      <section className="relative mt-[240px] mb-[240px] pt-[128px] pb-[64px] px-[112px] col-start-3 col-end-11 bg-[#101010]">
        <div className="absolute -top-[4px] left-1/2 -translate-y-1/2 -translate-x-1/2 whitespace-nowrap">
          <h1 className="m-0 text-[#ffffff] text-[72px] font-normal leading-none overflow-hidden">
            <span className="inline-block">C</span>
            <span className="inline-block">o</span>
            <span className="inline-block">n</span>
            <span className="inline-block">t</span>
            <span className="inline-block">a</span>
            <span className="inline-block">c</span>
            <span className="inline-block">t</span>
            <span className="inline-block">&nbsp;</span>
            <span className="inline-block">m</span>
            <span className="inline-block">e</span>
          </h1>
          <span className="absolute -bottom-[1rem] -right-[48px] h-px w-[calc(100%+96px)] bg-[#ffffff] block"></span>
        </div>
        <form className="flex flex-wrap justify-between">
          <div className="relative mb-[48px] w-[calc(50%-16px)] shadow-[0_2px_4px_0_rgba(0,0,0,.5),0_4px_8px_0_rgba(0,0,0,.25)] leading-none">
            <input
              type="text"
              id="name"
              autoComplete="off"
              className="pl-[20px] h-[64px] w-full bg-[#0a0a0a] border border-[#444444] rounded-none text-[#ffffff] text-[1rem] font-normal transition-[background-color_.4s_cubic-bezier(.5,.25,0,1),border-color_.4s_cubic-bezier(.5,.25,0,1),box-shadow_.4s_cubic-bezier(.5,.25,0,1)]"
            />
            <label className="absolute top-[3px] left-[20px] text-[#ffffff] text-[16px] font-normal tracking-[.25em] uppercase -translate-y-1/2 z-[2] before:absolute before:-top-[3px] before:-left-[8px] before:h-[8px] before:w-[calc(100%+12px)] before:bg-[#0a0a0a] before:content-[''] before:block before:transition-[background-color_.4s_cubic-bezier(.5,.25,0,1)] before:-z-[1]">
              Name
            </label>
          </div>
          <div className="relative mb-[48px] w-[calc(50%-16px)] shadow-[0_2px_4px_0_rgba(0,0,0,.5),0_4px_8px_0_rgba(0,0,0,.25)] leading-none">
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="pl-[20px] h-[64px] w-full bg-[#0a0a0a] border border-[#444444] rounded-none text-[#ffffff] text-[1rem] font-normal transition-[background-color_.4s_cubic-bezier(.5,.25,0,1),border-color_.4s_cubic-bezier(.5,.25,0,1),box-shadow_.4s_cubic-bezier(.5,.25,0,1)]"
            />
            <label className="absolute top-[3px] left-[20px] text-[#ffffff] text-[16px] font-normal tracking-[.25em] uppercase -translate-y-1/2 z-[2] before:absolute before:-top-[3px] before:-left-[8px] before:h-[8px] before:w-[calc(100%+12px)] before:bg-[#0a0a0a] before:content-[''] before:block before:transition-[background-color_.4s_cubic-bezier(.5,.25,0,1)] before:-z-[1]">
              Email
            </label>
          </div>
          <div className="relative mb-[48px] w-full shadow-[0_2px_4px_0_rgba(0,0,0,.5),0_4px_8px_0_rgba(0,0,0,.25)] leading-none">
            <textarea
              id="message"
              autoComplete="off"
              className="p-[20px] h-[200px] w-full bg-[#0a0a0a] border border-[#444444] rounded-none text-[#ffffff] text-[1rem] font-normal leading-normal transition-[background-color_.4s_cubic-bezier(.5,.25,0,1),border-color_.4s_cubic-bezier(.5,.25,0,1),box-shadow_.4s_cubic-bezier(.5,.25,0,1)]"
            />
            <label className="absolute top-[3px] left-[20px] text-[#ffffff] text-[16px] font-normal tracking-[.25em] uppercase -translate-y-1/2 z-[2] before:absolute before:-top-[3px] before:-left-[8px] before:h-[8px] before:w-[calc(100%+12px)] before:bg-[#0a0a0a] before:content-[''] before:block before:transition-[background-color_.4s_cubic-bezier(.5,.25,0,1)] before:-z-[1]">
              Message
            </label>
          </div>
          <button
            type="submit"
            className="relative top-0 mb-[32px] pt-[4px] px-[16px] h-[64px] w-full bg-[#000000] border border-[#888888] shadow-[0_2px_4px_0_rgba(0,0,0,.5),0_4px_8px_0_rgba(0,0,0,.25)] text-[#ffffff] text-[20px] font-normal tracking-[.5em] outline-none uppercase transition-[border-color_.4s_cubic-bezier(.5,.25,0,1)] hover:border-[#ffffff] overflow-hidden"
          >
            <span className="relative z-[2]">Send</span>
            <span className="absolute top-0 left-0 h-full w-full bg-[#ffffff] inline-block mix-blend-difference scale-x-0 origin-left transition-[transform_.4s_cubic-bezier(.5,.25,0,1)] hover:scale-x-100"></span>
          </button>
        </form>
      </section>
    </div>
  );
}
