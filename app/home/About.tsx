const About = () => {
  return (
    <div
      id="about"
      className="md:h-screen flex items-center relative z-[1] max-md:py-20 animate-fade-up"
    >
      <div className="max-w-desktop mx-auto px-2 flex w-full items-end flex-col">
        <p className="capitalize text-[32px] max-md:text-2xl font-bold text-end w-full max-md:text-center">{`Unleash MagikPool’s Power`}</p>
        <p className="text-2xl max-w-[890px] max-md:text-center text-end mt-8 w-full">{`MagikPool is a cutting-edge platform designed to give you the power to create, configure, and deploy your own MEV (Miner Extractable Value) bot. Whether you're a professional or a newcomer, our intuitive tools allow you to leverage MEV strategies and take advantage of opportunities within decentralized exchanges (DEXs) on Starknet`}</p>
      </div>
    </div>
  );
};

export default About;
