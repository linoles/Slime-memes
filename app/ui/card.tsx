"use client";

import type { CardProps } from "@/app/lib/definitions";
import Image from "next/image";
import { robotoCondensed } from "@/app/ui/fonts";
import { useState, useEffect } from "react";

export function Card({
  heading,
  description,
  bg,
  color,
  photoPath,
}: CardProps) {
  const cardStyle = {
    backgroundColor: bg,
  };

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription1 = () => {
    setIsDescriptionVisible(true);
  };
  const toggleDescription2 = () => {
    setIsDescriptionVisible(false);
  };

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(600);
  const [width2, setWidth2] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      setWidth(width2);
    };

    document.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [width2]);

  return (
    <div
      style={cardStyle}
      className="flex flex-col items-center justify-start h-fit rounded-3xl ml-5 mr-5 transition ease-in-out duration-500"
      onMouseOver={toggleDescription1}
      onMouseLeave={toggleDescription2}
    >
      <div
        style={{ width: "400px", height: "600px" }}
        className={`absolute z-10 sm:pl-6 sm:pb-6 pl-2 pb-2 ${heading.replaceAll(
          " ",
          "-"
        )}`}
      >
        <Image
          src={photoPath}
          alt={heading}
          width={width2}
          height={height}
          className={`absolute rounded-3xl z-0 ${heading.replaceAll(
            " ",
            "-"
          )}`}
        />
        <h4
          className={`${robotoCondensed.className} absolute z-10 text-2xl font-medium bottom-0`}
          style={{ color: color }}
        >
          {heading.toUpperCase()}
        </h4>
        <p
          className={`absolute bottom-0 text-lg z-10 ${isDescriptionVisible ? "" : "hidden"}`}
          style={{ color: color }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function PlusesCards() {
  const FunCard = (
    <Card
      heading="СМЕХ"
      description="Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)"
      bg="#a3a3a3"
      color="white"
      photoPath="/fun.jpg"
    />
  );

  return <div className="pt-10">{FunCard}</div>;
}
