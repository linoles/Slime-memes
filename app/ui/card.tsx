"use client";

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
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [headingTransform, setHeadingTransform] = useState(0);

  const handleMouseOver = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHeadingTransform(-100);
    setHoverTimeout(
      setTimeout(() => {
        setIsDescriptionVisible(true);
      }, 200)
    );
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsDescriptionVisible(false);
    setHoverTimeout(
      setTimeout(() => {
        setHeadingTransform(0);
      }, 200)
    );
  };

  return (
    <div
      style={cardStyle}
      className="flex flex-col items-center justify-start w-screen h-fit rounded-3xl ml-5 mr-5 transition ease-in-out duration-500"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute w-[400px] h-[600px] ml1:w-[200px] ml1:h-[300px] ml2:w-[300px] ml2:h-[450px] ml3:w-[400px] ml3:h-[600px] sm:pl-8 sm:pb-10 pl-4 pb-5 hover:brightness-75 transition ease-in-out duration-1000 cursor-pointer ${heading.replaceAll(
          " ",
          "-"
        )}`}
      >
        <Image
          src={photoPath}
          alt={heading}
          width={400}
          height={600}
          className={`absolute w-[400px] h-[600px] ml1:w-[200px] ml1:h-[300px] ml2:w-[300px] ml2:h-[450px] ml3:w-[400px] ml3:h-[600px] rounded-3xl left-0 z-0 ${heading.replaceAll(
            " ",
            "-"
          )}`}
        />
        <h4
          className={`${robotoCondensed.className} absolute z-10 text-2xl font-medium bottom-0 transition ease-in-out duration-300 transform`}
          style={{
            color: color,
            transform: `translateY(${headingTransform}px)`,
          }}
        >
          {heading.toUpperCase()}
        </h4>
        <p
          className={`absolute bottom-0 text-lg z-10 ml1:text-[10px] leading-tight ml2:text-[13px] ml3:text-[16px] transition ease-in-out duration-500 mb-3 ${
            isDescriptionVisible ? "opacity-100" : "opacity-0"
          }`}
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
    <div className="pt-5">
      <Card
        heading="СМЕХ"
        description="Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)"
        bg="#a3a3a3"
        color="white"
        photoPath="/fun.jpg"
      />
      {/*<Card
        heading="СМЕХ"
        description="Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)"
        bg="#a3a3a3"
        color="white"
        photoPath="/fun.jpg"
      />*/}
    </div>
  );

  return FunCard;
}
