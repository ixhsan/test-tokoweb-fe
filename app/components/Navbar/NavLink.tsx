import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-4 w-2/3 text-base text-black">
      <Link href={"#"} className="w-1/4  pl-4">
        {/* <h4 className="text-primary">Beranda</h4> */}
        <img src="/icons/nav-beranda.svg" alt="nav-beranda" className="" />
      </Link>
      <Link href={"#keunggulan"} className="w-1/4 pt-1 ">
        {/* <h4>Keunggulan</h4> */}
        <img src="/icons/nav-keunggulan.svg" alt="nav-keunggulan" />
      </Link>
      <Link href={"#pengiriman"} className="w-1/4 pt-1 ">
        {/* <h4 className="text-center">Fitur Aplikasi</h4> */}
        <img src="/icons/nav-fituraplikasi.svg" alt="nav-fituraplikasi" />
      </Link>
      <Link href={"#testimonial"} className="w-1/4 ">
        {/* <h4>Testimonial</h4> */}
        <img src="/icons/nav-testimonial.svg" alt="nav-testimonial" />
      </Link>
    </div>
  );
};

export default NavLink;
