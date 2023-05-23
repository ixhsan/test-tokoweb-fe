interface CardKeunggulanProps {
  title: string;
  descriptions: string;
  imageName: string;
}

const CardKeunggulan: React.FC<CardKeunggulanProps> = ({
  title,
  descriptions,
  imageName,
}) => {
  return (
    <div className="rounded-xl p-10 flex flex-col justify-center items-center gap-4 md:gap-2 lg:gap-4 border-solid border-2 md:w-2/6">
      <div className="bg-[#D8191E]/10 w-auto rounded-xl box-border">
        <img
          src={`/icons/${imageName}.svg`}
          alt={`${imageName}`}
          className="p-6"
        />
      </div>
      <h4 className="text-lg font-semibold text-center">{title}</h4>
      <p className="font-normal text-gray-400 text-center">{descriptions}</p>
    </div>
  );
};

export default CardKeunggulan;
