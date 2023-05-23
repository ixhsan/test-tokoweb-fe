"use client";

import Rating from "../Rating/Rating";

interface CardReviewProps {
  name: string;
  comment: string;
  imageName: string;
  rating: number;
}

const CardReview: React.FC<CardReviewProps> = ({
  name,
  comment,
  imageName,
  rating,
}) => {
  return (
    <div
      className={`border mx-4 border-gray-300 rounded-3xl p-5 w-80 h-56 sm:w-96 sm:h-52 box-border`}
    >
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-col space-y-5 ">
          <img
            src={`/testimonial/${imageName}.svg`}
            className="w-10 h-10 rounded-sm"
            alt={imageName}
          />
          <div>
            <h5 className="text-lg font-semibold">{name}</h5>
          </div>
        </div>
        <div className="self-start">
          <Rating rating={rating} />
        </div>
      </div>
      <div className="mt-2">{comment}</div>
    </div>
  );
};

export default CardReview;
