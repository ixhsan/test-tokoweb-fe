import Link from "next/link";

const MenuBantuan = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2 min-w-[100px]">
      <h4 className="text-md sm:text-lg font-bold">Menu Bantuan</h4>
      <div className="flex flex-col gap-2 text-md text-gray-400 font-gilroy">
        <Link href={"#keunggulan"}>
          <p>Keunggulan</p>
        </Link>
        <Link href={"#pengiriman"}>
          <p>Fitur Aplikasi</p>
        </Link>
        <Link href={"#testimoni"}>
          <p>Testimoni</p>
        </Link>
      </div>
    </div>
  );
};

export default MenuBantuan;
