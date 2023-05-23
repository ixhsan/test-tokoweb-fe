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
    </main>
  );
}
