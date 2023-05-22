import React from "react";
import MenuBantuan from "./Footer/MenuBantuan";
import InformasiKontak from "./Footer/InformasiKontak";
import CompanyDescription from "./Footer/CompanyDescription";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container max-w-7xl mx-auto p-10">
        <div className="flex flex-wrap md:flex-nowrap gap-4 ">
          <div className="flex flex-row justify-left gap-16 md:gap-8 p-4 md:order-last w-full md:w-1/2">
            <MenuBantuan />
            <InformasiKontak />
          </div>
          <CompanyDescription />
        </div>
      </div>
      <div className="pt-4 pb-10">
        <p className="text-center text-gray-400 font-gilroy">
          All rights reserved@2022
        </p>
      </div>
    </section>
  );
};

export default Footer;
