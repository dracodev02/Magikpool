import ImageComp from "@/components/common/ImageComp";

const BotAccess = () => {
  return (
    <div className="md:h-screen max-md:py-20 flex items-center relative animate-fade-up">
      <ImageComp
        src="/logo_magikpool.png"
        className="h-[80%] absolute top-1/2 left-0-0 -translate-x-1/3 -translate-y-1/2 brightness-50 opacity-50 rotate-[30deg]"
      />
      <div className="max-w-desktop mx-auto px-2 relative z-[1]">
        <p className="uppercase text-green text-[72px] max-md:text-[42px] max-md:leading-[42px] text-center font-title leading-[72px]">
          Public MEV Bot Access
        </p>
        <p className="mx-auto text-center text-2xl max-w-[943px] md:mt-20 max-md:mt-8">
          {`Not ready to build your own bot? No problem. MagikPool will soon offer
          pre-configured MEV bots specifically designed to snipe LP-pools on
          DEXs within the Starknet ecosystem. Get ahead of the competition with
          expert-tested strategies, ready to deploy at the click of a button`}
        </p>
      </div>
    </div>
  );
};

export default BotAccess;
