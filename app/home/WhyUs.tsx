const WhyUs = () => {
  return (
    <div
      id="whyus"
      className="animate-fade-up md:h-screen max-md:py-20 bg-gradient-to-b from-[#003896] to-[#050569] flex items-center"
    >
      <div className="max-w-desktop mx-auto px-2 relative z-[1]">
        <p className="uppercase text-[72px] max-md:text-[42px] max-md:leading-[42px] leading-[72px] text-green text-center font-title">
          WHy us?
        </p>
        <div className="flex flex-col gap-4 max-md:mt-8 mt-20">
          <div className="flex gap-4 max-md:flex-col">
            <div className="px-8 py-6 rounded bg-gradient-to-r hover:brightness-150 duration-300 from-[#27CFFE26] to-[#05056926] flex-1">
              <p className="font-bold text-[32px] max-md:text-2xl capitalize">
                Built for Starknet
              </p>
              <p className="text-white/50 mt-2 text-2xl">
                {`Leverage Starknet's high throughput, low-cost infrastructure for
                optimal performance`}
              </p>
            </div>
            <div className="px-8 py-6 rounded bg-gradient-to-l hover:brightness-150 duration-300 from-[#27CFFE26] to-[#05056926] flex-1">
              <p className="font-bold text-[32px] max-md:text-2xl capitalize">
                Full Control Over Your Bots
              </p>
              <p className="text-white/50 mt-2 text-2xl">
                Create, configure, and deploy with no technical barriers
              </p>
            </div>
          </div>
          <div className="px-8 py-6 rounded bg-gradient-to-r hover:brightness-150 duration-300 from-[#27CFFE26] via-[#05056926] to-[#27CFFE26] flex-1">
            <p className="font-bold text-[32px] max-md:text-2xl capitalize">
              Constant Innovation
            </p>
            <p className="text-white/50 mt-2 text-2xl">
              Regular updates and new features to stay ahead of the competition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
