"use client";
import ImageComp from "./ImageComp";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import scrollToSection from "@/heplers/scrollToSection";

const Footer = () => {
  return (
    <div className="bg-[#090934] mx-auto">
      <div className="flex items-center flex-col gap-5 pt-12 pb-16">
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex gap-2 items-center justify-center text-xl tracking-widest"
        >
          <ImageComp src="/logo_magikpool.png" className="w-[30px] h-auto" />
          <p className="font-title uppercase">Magikpool</p>
        </div>
        <div className="flex items-center gap-8">
          <Link href="https://x.com/MagikPool" target="_blank">
            <FaXTwitter className="text-2xl" />
          </Link>
          <div className="h-[24px] min-w-[1px] w-[1px] bg-[#D5A2FE]"></div>
          <FaDiscord className="text-2xl text-[#F8F8F880]" />
          <div className="h-[24px] min-w-[1px] w-[1px] bg-[#D5A2FE]"></div>
          <FaTelegram className="text-2xl text-[#F8F8F880]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
