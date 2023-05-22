import Link from "next/link";
import React from "react";

const NavLink = () => {
  return (
    <div className="flex flex-row justify-start items-center gap-2 w-2/3 text-base text-black">
      <Link href={"#"} className="w-1/4 p-2">
        <h4 className="text-primary">Beranda</h4>
      </Link>
      <Link href={"#keunggulan"} className="w-1/4">
        <h4>Keunggulan</h4>
      </Link>
      <Link href={"#pengiriman"} className="w-1/4">
        <h4 className="text-center">Fitur Aplikasi</h4>
      </Link>
      <Link href={"#testimonial"} className="w-1/4">
        <h4>Testimonial</h4>
      </Link>
    </div>
  );
};

export default NavLink;
