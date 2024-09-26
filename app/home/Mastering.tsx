"use client";
import ImageComp from "@/components/common/ImageComp";
import { useCallback, useEffect, useRef, useState } from "react";

const Mastering = () => {
  const refItem1 = useRef<HTMLDivElement>(null);
  const refItem2 = useRef<HTMLDivElement>(null);
  const refItem3 = useRef<HTMLDivElement>(null);
  const refItem4 = useRef<HTMLDivElement>(null);

  const [heightLine1, setHeightLine1] = useState(0);
  const [heightLine2, setHeightLine2] = useState(0);
  const [heightLine3, setHeightLine3] = useState(0);

  const handleResize = useCallback(() => {
    if (refItem1.current && refItem2.current) {
      const { top, height } = refItem1.current.getBoundingClientRect();
      const { top: top2, height: height2 } =
        refItem2.current.getBoundingClientRect();
      setHeightLine1(top2 + height2 / 2 - (top + height / 2));
    }
    if (refItem2.current && refItem3.current) {
      const { top, height } = refItem2.current.getBoundingClientRect();
      const { top: top3, height: height3 } =
        refItem3.current.getBoundingClientRect();
      setHeightLine2(top3 + height3 / 2 - (top + height / 2));
    }
    if (refItem3.current && refItem4.current) {
      const { top, height } = refItem3.current.getBoundingClientRect();
      const { top: top4, height: height4 } =
        refItem4.current.getBoundingClientRect();
      setHeightLine3(top4 + height4 / 2 - (top + height / 2));
    }
  }, [refItem1, refItem2, refItem3, refItem4]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div
      id="guidance"
      className="animate-fade-up bg-gradient-to-b from-[#050569] to-[#003896] max-md:py-20 relative overflow-hidden md:pt-20"
    >
      <ImageComp
        src="/logo_magikpool.png"
        className="h-auto absolute top-1/2 right-0 translate-x-1/3 md:max-w-[50%] -translate-y-1/2 brightness-50 opacity-50 -rotate-[30deg]"
      />
      <div className="max-w-desktop mx-auto max-md:px-7 px-[60px] relative z-[1]">
        <div>
          <p className="uppercase text-[72px] max-md:text-[42px] max-md:leading-[42px] text-green font-title text-center leading-[72px]">
            Mastering magikpool
          </p>
          <p className="text-green text-[36px] font-title text-center uppercase">
            step-by-step
          </p>
        </div>
        <div className="flex flex-col gap-[54px] max-md:gap-4 max-w-[689px] mx-auto md:mt-[129px] relative max-md:mt-8">
          <div
            ref={refItem1}
            className="px-8 py-6 rounded bg-[#27CFFE26] hover:bg-[#27cffe50] transition-all duration-300 relative"
          >
            <div
              style={{
                top: "50%",
                height: heightLine1,
              }}
              className="w-1 bg-[#75A5FF] absolute left-[-50px] max-md:left-[-20px]"
            ></div>
            <div className="absolute left-0 h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px] -translate-x-full"></div>
            <p className="text-center font-bold text-[32px] max-md:text-2xl">
              1. Create Your MEV Bot
            </p>
            <p className="text-2xl text-center">
              Use our user-friendly interface to design your bot from scratch or
              start with a pre-built template
            </p>
          </div>
          <div
            ref={refItem2}
            className="px-8 py-6 rounded bg-[#27CFFE26] hover:bg-[#27cffe50] transition-all duration-300 hover:bg-[] relative"
          >
            <div
              style={{
                top: "50%",
                height: heightLine2,
              }}
              className="w-1 bg-[#75A5FF] absolute right-[-50px] max-md:right-[-20px]"
            ></div>
            <div className="absolute left-0 h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px] -translate-x-full"></div>
            <div className="absolute left-full h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px]"></div>
            <div className="absolute rotate-45 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 bg-[#75A5FF]"></div>
            <p className="text-center font-bold text-[32px] max-md:text-2xl">
              2. Configure The Strategy
            </p>
            <p className="text-2xl text-center">
              {`Set your bot's parameters and rules for targeting LP-pools on DEXs`}
            </p>
          </div>
          <div
            ref={refItem3}
            className="px-8 py-6 rounded bg-[#27CFFE26] hover:bg-[#27cffe50] transition-all duration-300 hover:bg-[] relative"
          >
            <div
              style={{
                top: "50%",
                height: heightLine3,
              }}
              className="w-1 bg-[#75A5FF] absolute left-[-50px] max-md:left-[-20px]"
            ></div>
            <div className="absolute left-0 h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px] -translate-x-full"></div>
            <div className="absolute left-full h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px]"></div>
            <div className="absolute rotate-45 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 h-5 w-5 bg-[#75A5FF]"></div>
            <p className="text-center font-bold text-[32px] max-md:text-2xl">
              3. Fund Your Bot
            </p>
            <p className="text-2xl text-center">
              Connect your wallet and fund your bot to start executing trades
            </p>
          </div>
          <div
            ref={refItem4}
            className="px-8 py-6 rounded bg-[#27CFFE26] hover:bg-[#27cffe50] transition-all duration-300 hover:bg-[] relative"
          >
            <div className="absolute rotate-45 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 bg-[#75A5FF]"></div>
            <div className="absolute left-0 h-1 bg-[#75A5FF] top-1/2 -translate-y-1/2 w-[50px] max-md:w-[20px] -translate-x-full"></div>
            <p className="text-center font-bold text-[32px] max-md:text-2xl">
              4. Monitor & Optimize
            </p>
            <p className="text-2xl text-center">
              Track performance and make adjustments in real-time to maximize
              returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mastering;
