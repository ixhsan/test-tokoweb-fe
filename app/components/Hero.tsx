import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="w-full md:w-1/2 p-10">
            <div className="flex flex-col gap-4 mb-8">
              <h1 className="text-3xl sm:text-5xl md:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-hitam">
                Kirim berbagai jenis ikan dengan mudah
              </h1>
              <p className="text-lg font-medium text-abu leading-relaxed">
                A Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry&apos;s
              </p>
            </div>
            <div className="flex flex-row mb-8">
              <Link href={"#"} className="px-4 py-2 mr-2 bg-black rounded-lg">
                <Image
                  src="/icons/googleplay.svg"
                  width={146}
                  height={32}
                  alt="googleplay"
                />
              </Link>
              <Link href={"#"} className="px-4 py-2 bg-black rounded-lg">
                <Image
                  src="/icons/appstore.svg"
                  width={149}
                  height={32}
                  alt="appstore"
                />
              </Link>
            </div>
            <div className="flex flex-row gap-10">
              <div className="">
                <h4 className="font-gilroy font-bold text-4xl text-primary">
                  1.9K+
                </h4>
                <p className="font-gilroy text-abu leading-relaxed">
                  Active Users
                </p>
              </div>
              <div className="">
                <h4 className="font-gilroy font-bold text-4xl text-primary">
                  20+
                </h4>
                <p className="font-gilroy text-abu leading-relaxed">
                  New Features
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="self-center md:self-auto">
              <img src="/images/hero-banner.svg" alt="hero-banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
