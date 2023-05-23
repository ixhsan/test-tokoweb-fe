"use client";
import React from "react";

interface StarProps {
  filled?: boolean;
  halfFilled?: boolean;
}

const Star: React.FC<StarProps> = ({ filled, halfFilled }) => {
  const starPath = filled
    ? "M10.67 15.27L16.85 19L15.21 11.97L20.67 7.24L13.48 6.63L10.67 0L7.86001 6.63L0.670013 7.24L6.13001 11.97L4.49001 19L10.67 15.27Z"
    : halfFilled
    ? "M20.67 7.24L13.48 6.62L10.67 0L7.86001 6.63L0.670013 7.24L6.13001 11.97L4.49001 19L10.67 15.27L16.85 19L15.22 11.97L20.67 7.24ZM10.67 13.4V4.1L12.38 8.14L16.76 8.52L13.44 11.4L14.44 15.68L10.67 13.4Z"
    : "M20.67 7.24L13.48 6.62L10.67 0L7.86001 6.63L0.670013 7.24L6.13001 11.97L4.49001 19L10.67 15.27L16.85 19L15.22 11.97L20.67 7.24ZM10.67 13.4L6.91001 15.67L7.91001 11.39L4.59001 8.51L8.97001 8.13L10.67 4.1L12.38 8.14L16.76 8.52L13.44 11.4L14.44 15.68L10.67 13.4Z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="19"
      viewBox="0 0 21 19"
    >
      <path d={starPath} fill="#F8A401" />
    </svg>
  );
};

export default Star;
