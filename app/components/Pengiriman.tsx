import CardPengiriman from "./Card/CardPengiriman";

const dataPengiriman = [
  {
    title: "Berbagai Metode Pengiriman",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto nesciunt nisi consequatur totam maxime eveniet repellendus quisquam doloribus quibusdam.",
    imageName: "pengiriman-1",
  },
  {
    title: "Lacak Status Pengiriman Anda",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto nesciunt nisi consequatur totam maxime eveniet repellendus quisquam doloribus quibusdam.",
    imageName: "pengiriman-2",
  },
  {
    title: "Cek Schedule Pengiriman Anda",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi iusto nesciunt nisi consequatur totam maxime eveniet repellendus quisquam doloribus quibusdam.",
    imageName: "pengiriman-3",
  },
];

const Pengiriman = () => {
  return (
    <section id="pengiriman">
      <div className="container max-w-7xl mx-auto">
        {dataPengiriman.length &&
          dataPengiriman.map((item, index) => (
            <CardPengiriman
              key={index}
              id={index + 1}
              title={item.title}
              descriptions={item.descriptions}
              imageName={item.imageName}
            />
          ))}
      </div>
    </section>
  );
};

export default Pengiriman;
