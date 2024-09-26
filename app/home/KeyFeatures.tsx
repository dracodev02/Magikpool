import ImageComp from "@/components/common/ImageComp";

const KeyFeatures = () => {
  const features: { title: string; description: string }[] = [
    {
      title: "Customizable MEV Bots",
      description: "Easily create and configure your own bots",
    },
    {
      title: "User-Friendly Interface",
      description: "Simple setup with powerful options for experienced traders",
    },
    {
      title: "Starknet Integration",
      description: " Low fees, high efficiency, and secure transactions",
    },
    {
      title: "Liquidity Pool Sniping",
      description: "Target LP-pools on DEXs for optimal returns",
    },
  ];

  return (
    <div
      id="keyfeatures"
      className="md:h-screen max-md:py-20 flex items-center animate-fade-up"
    >
      <div className="max-w-desktop mx-auto px-2 flex md:gap-4 justify-between w-full max-md:flex-col max-md:items-center max-md:relative">
        <div className="flex flex-col">
          <p className="text-[72px] max-md:text-[42px] max-md:leading-[42px] text-primary-light font-title max-md:text-center leading-[72px]">
            KEY FEATURES
          </p>
          <ImageComp
            src="/key.png"
            className="mt-[56px] w-[286px] h-[286px] aspect-square max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:z-[-1] max-md:opacity-65"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 max-w-[689px] max-md:mt-8">
          {features.map((feature, index) => (
            <div
              className={`${
                index % 2 == 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
              } from-[#05056926] to-[#27CFFE26] py-6 px-8 rounded hover:brightness-150 duration-300 transition-all`}
              key={index}
            >
              <p className="text-[32px] max-md:text-2xl font-bold">
                {feature.title}
              </p>
              <p className="text-2xl text-white/50 mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
