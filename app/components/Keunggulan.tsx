import CardKeunggulan from "./Card/CardKeunggulan";

const dataKeunggulan = [
  {
    title: "Kirim ke Berbagai Negara",
    descriptions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim et nobis perferendis, ipsam corrupti veniam!",
    imageName: "keunggulan1",
  },
  {
    title: "Mudah digunakan",
    descriptions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim et nobis perferendis, ipsam corrupti veniam!",
    imageName: "keunggulan2",
  },
  {
    title: "Pengiriman Aman",
    descriptions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim et nobis perferendis, ipsam corrupti veniam!",
    imageName: "keunggulan3",
  },
];

const Keunggulan = () => {
  return (
    <section id="keunggulan">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col w-full">
          <div className="px-6 py-14 flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center font-semibold text-black my-6">
              Keunggulan kami
            </h1>
            <h5 className="font-normal text-gray-400 text-center max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              perferendis quo nesciunt. Ducimus eveniet tempora blanditiis natus
              saepe aliquid dolor.
            </h5>
          </div>
          <div className="w-full flex flex-col md:flex-row p-8 gap-4">
            {dataKeunggulan.length &&
              dataKeunggulan.map((item, index) => (
                <CardKeunggulan
                  key={index}
                  title={item.title}
                  descriptions={item.descriptions}
                  imageName={item.imageName}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulan;
