"use client";
import { useInView } from "react-intersection-observer";
import About from "./home/About";
import BotAccess from "./home/BotAccess";
import Intro from "./home/Intro";
import KeyFeatures from "./home/KeyFeatures";
import Mastering from "./home/Mastering";
import WhyUs from "./home/WhyUs";

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-50"
      }`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Intro />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <KeyFeatures />
      </SectionWrapper>
      <SectionWrapper>
        <Mastering />
      </SectionWrapper>
      <SectionWrapper>
        <WhyUs />
      </SectionWrapper>
      <SectionWrapper>
        <BotAccess />
      </SectionWrapper>
    </>
  );
}
