"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import DownloadButton from "./DownloadButton";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative md:hidden">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
            p-4 
            md:py-1 
            md:px-2 
            border-0
            flex
            flex-row
            items-center
            gap-3
            rounded-sm
            cursor-pointer
            hover:shadow-md
            transition
        "
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem label="Beranda" id={`#`} onClick={toggleOpen} />
              <MenuItem
                label="Keunggulan"
                id={`#keunggulan`}
                onClick={toggleOpen}
              />
              <MenuItem
                label="Fitur Aplikasi"
                id={`#pengiriman`}
                onClick={toggleOpen}
              />
              <MenuItem
                label="Testimonial"
                id={`#testimoni`}
                onClick={toggleOpen}
              />
              <div className="px-4 py-2 text-center">
                <DownloadButton onClick={toggleOpen} />
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
