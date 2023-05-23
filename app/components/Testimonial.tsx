"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import CardReview from "./Card/CardReview";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Floyd Miles",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing el quisquam iusto corrupti incidunt aut repudiandae voluptates!",
    imageName: "testi-1",
    rating: 4
  },
  {
    name: "Ronald Richard",
    comment:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum inventore quam quos est tempore amet.",
    imageName: "testi-6",
    rating: 4.5
  },
  {
    name: "Savannah",
    comment:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elie minima sint alias sapiente quod magnam iure.",
    imageName: "testi-3",
    rating: 5
  },
  {
    name: "Hari Irawan",
    comment:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ur quam aspernatur numquam ipsam in beatae.",
    imageName: "testi-4",
    rating: 3
  },
  {
    name: "Rizal Syaputra",
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing et provident quasi beatae mollitia a unde.",
    imageName: "testi-5",
    rating: 3.5
  },
];

const Testimonial = () => {
  const [indexSlick, setIndexSlick] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    afterChange: (index: number) => setIndexSlick(index),
  };

  const slickRef = useRef<Slider>(null);

  function fnNext() {
    slickRef?.current?.slickNext();
  }

  function fnPrev() {
    slickRef?.current?.slickPrev();
  }

  return (
    <section id="testimonial">
      <div className="container max-w-8xl mx-auto my-10">
        <div className="w-full">
          <div className="text-center text-5xl font-semibold mb-8">
            Testimonial
          </div>
          <div className="text-center font-light text-lg text-gray-400 w-full md:w-3/4 mx-auto leading-relaxed px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            esse dolorem ea nulla recusandae quos nemo.
          </div>
        </div>
        <div className="my-10">
          <Slider {...settings} arrows={false} ref={slickRef}>
            {reviews.map((val, index) => (
              <div key={index} className={index === 0 ? "ml-4 sm:ml-10" : ""}>
                <CardReview {...val} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex space-x-4">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`${
                  indexSlick === index
                    ? "w-4 bg-red-500 transition-all duration-200 ease-in-out"
                    : "w-4 bg-gray-300 transition-all duration-200 ease-in-out"
                } h-4 rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
