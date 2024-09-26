import ImageComp from "@/components/common/ImageComp";

const Intro = () => {
  return (
    <div
      id="home"
      className="md:h-screen relative bg-gradient-to-b from-[#6EE9F9] to-[#050569] pt-[72px] max-md:py-20 animate-fade-up"
    >
      <div className="max-w-desktop mx-auto px-2 mt-[140px] relative z-[1]">
        <p className="font-title text-[124px] max-md:text-[56px] text-center max-w-[1060px] leading-[100px] max-md:leading-[56px] mx-auto">
          Empower Your Trading with MEV Bots
        </p>
        <p className="text-center mt-8 text-2xl">
          Create, Configure, and Control Your Own MEV Bot for Maximizing Profit
          in LP-Pools on StarkNet
        </p>
      </div>
      <ImageComp
        src="/logo_magikpool.png"
        className="h-auto absolute left-0 -translate-x-1/2 md:w-[50%] max-md:blur-sm max-md:brightness-50 pointer-events-none"
      />
    </div>
  );
};

export default Intro;
