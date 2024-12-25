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
  id,
}: CardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: bg,
  };
  if (id != 0 && window) {
    const marginTop = (() => {
      if (window.innerWidth >= 410) return "0px";
      if (window.innerWidth >= 310) return 465*id + "px";
      if (window.innerWidth >= 210) return 315*id + "px";
      if (window.innerWidth >= 110) return 165*id + "px";
      return 0;
    })();
    if (marginTop) cardStyle.marginTop = marginTop;
  }
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [headingTransform, setHeadingTransform] = useState(0);

  const handleMouseOver = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (window.innerWidth > 410) setHeadingTransform(-90);
    else if (window.innerWidth > 310) setHeadingTransform(-75);
    else if (window.innerWidth > 210) setHeadingTransform(-60);
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
      className={`
        relative flex flex-col items-center justify-start w-fit rounded-3xl transition ease-in-out duration-500
        ml3:ml-[210px] ml3:mr-[210px] ml3:mb-0 mb-[590px] mr-0
      `}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      id={`${id}`}
    >
      <div
        className={`
          absolute w-[400px] h-[600px] cursor-pointer 
          ml1:w-[200px] ml1:h-[300px] 
          ml2:w-[300px] ml2:h-[450px] 
          ml3:w-[400px] ml3:h-[600px] 
          ${heading.replaceAll(" ", "-")}
        `}
      >
        <Image
          src={photoPath}
          alt={heading}
          width={400}
          height={600}
          className={`
            absolute w-[400px] h-[600px] rounded-3xl z-0 transition ease-in-out duration-1000 
            ml1:w-[200px] ml1:h-[300px] 
            ml2:w-[300px] ml2:h-[450px] 
            ml3:w-[400px] ml3:h-[600px] 
            hover:brightness-75 
            ${heading.replaceAll(" ", "-")}
          `}
        />
        <h4
          className={`
            ${robotoCondensed.className} 
            absolute z-10 text-2xl font-medium left-[3%] bottom-[5px] transition ease-in-out duration-300 transform 
            ml1:text-[14px] 
            ml2:text-[18px] 
            ml3:text-[23px] 
          `}
          style={{
            color: color,
            transform: `translateY(${headingTransform}px)`,
          }}
        >
          {heading.toUpperCase()}
        </h4>
        <p
          className={`
            absolute bottom-0 left-[3%] leading-tight z-10 transition ease-in-out duration-500 mb-3 
            ml1:text-[10px] ml1:w-[93%]
            ml2:text-[13px] ml2:w-[93%]
            ml3:text-[16px] ml3:w-[93%]
            ${isDescriptionVisible ? "opacity-100" : "opacity-0"}
          `}
          style={{ color: color }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function PlusesCards() {
  return (
    <div className="flex">
      <Card
        heading="СМЕХ"
        description="Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)"
        bg="#a3a3a3"
        color="white"
        photoPath="/fun.jpg"
        id={0}
      />
      <Card
        heading="ОТЛИЧНОЕ КОМЬЮНИТИ"
        description="А как же без комьюнити самых лучших подписчиков, постоянно обсуждающих мемы нашего канала? И они присутствуют в нашем дружном канале!"
        bg="#a3a3a3"
        color="white"
        photoPath="/fun.jpg"
        id={1}
      />
      <Card
        heading="МЕМЫ ПРО АДМИНОВ"
        description="А как же без комьюнити самых лучших подписчиков, постоянно обсуждающих мемы нашего канала? И они присутствуют в нашем дружном канале!"
        bg="#a3a3a3"
        color="white"
        photoPath="/fun.jpg"
        id={2}
      />
    </div>
  );
}
