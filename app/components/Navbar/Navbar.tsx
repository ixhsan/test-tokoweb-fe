"use client";
import DownloadButton from "./DownloadButton";
import Menu from "./Menu";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full">
          <div className="flex flex-row justify-start items-center p-8 box-border">
            <div className="w-1/2 md:w-2/6 flex flex-row justify-start items-center">
              <h4 className="text-4xl text-primary">Toko Ikan</h4>
            </div>
            <div className="w-1/2 md:w-3/4 flex flex-row justify-end items-center">
              <div className="hidden md:flex md:flex-row md:justify-between w-full">
                <NavLink />
                <div className="w-1/4">
                  <DownloadButton />
                </div>
              </div>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
