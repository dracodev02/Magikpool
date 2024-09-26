"use client";
import { useState } from "react";
import ImageComp from "./ImageComp";
import DropdownMenu from "./DropdownMenu";
import scrollToSection from "@/heplers/scrollToSection";
import useActiveSection from "@/hooks/useActiveSection";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");

  const items = [
    {
      name: "Home",
      section: "home",
    },
    {
      name: "About",
      section: "about",
    },
    {
      name: "Key Features",
      section: "keyfeatures",
    },
    {
      name: "Guidance",
      section: "guidance",
    },
    {
      name: "Why us",
      section: "whyus",
    },
  ];

  useActiveSection(items, setActiveTab);

  return (
    <div className="h-[72px] bg-[#08083C] fixed top-0 left-0 z-10 right-0">
      <div className="max-w-desktop mx-auto h-full flex items-center px-2 relative w-full max-lg:justify-end">
        <div className="flex gap-6 max-lg:hidden">
          {items.map((item, index) => (
            <p
              onClick={() => {
                setActiveTab(item.section);
                scrollToSection(item.section);
              }}
              className={`${
                activeTab == item.section
                  ? "text-primary-light"
                  : "text-white/50"
              } font-bold transition-all hover:text-white cursor-pointer `}
              key={index}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center text-xl tracking-widest"
        >
          <ImageComp src="/logo_magikpool.png" className="w-[30px] h-auto" />
          <p className="font-title uppercase">Magikpool</p>
        </div>
        <DropdownMenu items={items} />
      </div>
    </div>
  );
};

export default Header;
