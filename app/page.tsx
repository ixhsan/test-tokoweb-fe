import Link from "next/link";
import Image from "next/image";
import Hero from "./components/Hero";
import Resi from "./components/Resi";
import Keunggulan from "./components/Keunggulan";
import Pengiriman from "./components/Pengiriman";
import DownloadUs from "./components/DownloadUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Resi />
      <Keunggulan />
      <Pengiriman />
      <Footer />
      {/* <div className="container max-w-7xl mx-auto outline-center flex justify-center items-center outline-dashed my-10">
        <div className="flex flex-row max-w-2xl outline-dashed justify-center items-center">
          <div className="max-w-[20rem] min-h-20 outline-dashed px-4 text-sm md:text-lg order-3 md:order-0">
            <h1 className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              cum nisi incidunt veniam perspiciatis, recusandae quam dolor ipsam
              ?
            </h1>
          </div>
          <div className="outline-dashed order-1 md:order-3">
            <h1 className="text-center">hello</h1>
          </div>
          <div className="flex flex-col flex-wrap gap-4 outline-dashed break-all min-w-2/6 md:hidden">
              <h4>Informasi kontak</h4>
              <div className="flex flex-col gap-2 flex-wrap">
                <p>0821-9797-1227</p>
                <p>0812-9797-1227</p>
                <p>Jbgtranshipping@gmail.com</p>
              </div>
            </div>
        </div>
      </div> */}
    </main>
  );
}
