export default function Page() {
  return (
    <>
      <section className="relative pt-35 overflow-auto">
        <div className="mx-auto pb-9 w-[calc(100%-128px)] overflow-hidden text-center">
          <div className="relative inline-block">
            <span className="right-[calc(100%+24px)] bg-linear-to-r from-white to-transparent origin-right absolute top-[calc(50%-10px)] h-1 w-[calc(50vw-50%-88px)] inline-block -translate-y-1/2"></span>
            <h1 className="relative m-0 color-[#fff] inline-block text-[144px] font-normal leading-none overflow-hidden">
              <span className="inline-block">2</span>
              <span className="inline-block">0</span>
              <span className="inline-block">2</span>
              <span className="inline-block">9</span>
            </h1>
            <span className="left-[calc(100%+24px)] bg-linear-to-r from-transparent to-white origin-left absolute top-[calc(50%-10px)] h-1 w-[calc(50vw-50%-88px)] inline-block -translate-y-1/2"></span>
          </div>
        </div>
        <hr className="mb-12 w-[calc(100%-128px)] mx-auto border-white opacity-50" />
      </section>
    </>
  );
}
