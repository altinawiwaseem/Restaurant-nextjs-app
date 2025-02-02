"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh and delicious food",
    image: "/slide1.png",
  },
  {
    id: 1,
    title: "We deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 1,
    title: "The best pizza to share with your family and friends",
    image: "/slide3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /*  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []); */

  return (
    <div className=" flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className=" flex items-center justify-center flex-col gap-8 text-red-500 font-bold flex-1">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 ">Order Now</button>
      </div>
      <div className=" w-full relative flex-1">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
