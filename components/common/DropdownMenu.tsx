import scrollToSection from "@/heplers/scrollToSection";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

interface DropdownMenuProps {
  items: { name: string; section: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <HiMenuAlt3
          onClick={toggleMenu}
          className="text-2xl right-0 lg:hidden cursor-pointer text-white/75 hover:text-white"
        />
      </div>

      {isOpen && (
        <div
          className={`animate-jump-in animate-duration-300 animate-ease-linear absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-900`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {items.map((item, index) => (
              <div
                className="block px-4 py-2 font-bold hover:text-primary-light cursor-pointer"
                key={index}
                onClick={() => {
                  scrollToSection(item.section);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
