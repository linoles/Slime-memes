'use client';

import type { CardProps } from "@/app/lib/definitions";
import Image from "next/image";
import { robotoCondensed } from "@/app/ui/fonts";
import { useState } from "react";

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
  
  const funcDesc = () => {
    const element = document.querySelector(`p.${heading.replaceAll(" ", "-")}`);
    if (element?.classList.contains("hidden")) {
      element.classList.remove("hidden");
    }
  }
  const hideDesc = () => {
    const element = document.querySelector(`p.${heading.replaceAll(" ", "-")}`);
    element?.classList.add("hidden");
  }

  document.addEventListener("resize", () => {
    setWidth(width2)
  });

  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(600);
  const [width2, setWidth2] = useState(400);

  return (
    <div
      style={cardStyle}
      className="flex flex-col items-center justify-start h-fit rounded-3xl ml-5 mr-5 transition ease-in-out duration-500"
      onMouseOver={funcDesc}
      onMouseLeave={hideDesc}
    >
      <Image
        src={photoPath}
        alt="Picture of the author"
        width={width2}
        height={600}
        className={`rounded-3xl z-0 ${heading.replaceAll(" ", "-")}`}
      />
      <div
        style={{width: width, height: height}}
        className={`absolute z-10 flex flex-col items-left justify-end sm:pl-6 sm:pb-6 pl-2 pb-2 transition ease-in-out duration-500 ${heading.replaceAll(" ", "-")}`}
      >
        <h4
          className={`${robotoCondensed.className} text-2xl font-medium`}
          style={{ color: color }}
        >
          {heading.toUpperCase()}
        </h4>
        <p className={`text-lg hidden photoDesc ${heading.replaceAll(" ", "-")}`} style={{ color: color }}>
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
