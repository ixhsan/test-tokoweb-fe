"use client";

import Star from "./Star";

const Rating = ({ rating }: { rating: number }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex flex-row gap-2 ">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled />
      ))}
      {hasHalfStar && <Star halfFilled />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

export default Rating;
