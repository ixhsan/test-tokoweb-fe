interface CardPengirimanProps {
  id: number;
  title: string;
  descriptions: string;
  imageName: string;
}

const CardPengiriman: React.FC<CardPengirimanProps> = (props) => {
  const { id, title, descriptions, imageName } = props;
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className={`flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center outline-dashed p-4 ${
        id % 2 === 1 ? `md:order-first` : `md:order-last`
      }`}
      >
        <h1 className="text-3xl text-center font-semibold text-black mb-4">
          {title}
        </h1>
        <p className="font-medium text-gray-400 text-center max-w-sm">
          {descriptions}
        </p>
      </div>
      <div className={`w-full md:w-1/2 md:${
        id % 2 === 1 ? `md:order-last` : `md:order-first`
      }`}>
        <img src={`/images/${imageName}.svg`} alt={imageName} />
      </div>
    </div>
  );
};

export default CardPengiriman;
