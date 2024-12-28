"use client";

import type { CardProps } from "@/app/lib/definitions";
import Image from "next/image";
import { robotoCondensed } from "@/app/ui/fonts";
import React, { useEffect, useState } from "react";
import "@/app/ui/global.css";

export const cards = [
  {
    heading: "СМЕХ",
    description:
      "Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/fun.jpg",
    id: 0,
  },
  {
    heading: "ОТЛИЧНОЕ КОМЬЮНИТИ",
    description:
      "А как же без комьюнити самых лучших подписчиков, постоянно обсуждающих мемы нашего канала? И они присутствуют в нашем дружном канале!",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/fun.jpg",
    id: 1,
  },
  {
    heading: "МЕМЫ ПРО АДМИНОВ",
    description:
      "Также в нашем канале присутствуют интересные и смешные мемы про админов, которые уж точно не могут быть в другом канале.",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/fun.jpg",
    id: 2,
  },
];

export function Card({
  heading,
  description,
  bg,
  color,
  photoPath,
  id,
}: CardProps) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [headingTransform, setHeadingTransform] = useState(0);
  const [marginTop, setMarginTop] = useState<string>("0px");
  const [imageBrightness, setImageBrightness] = useState(100);

  useEffect(() => {
    const updateMarginTop = () => {
      setMarginTop("0px");
    };

    updateMarginTop();
    window.addEventListener("resize", updateMarginTop);

    return () => {
      window.removeEventListener("resize", updateMarginTop);
    };
  }, [id]);

  const handleMouseOver = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setImageBrightness(75);
    if (window.innerWidth > 420) setHeadingTransform(-90);
    else if (window.innerWidth > 320) setHeadingTransform(-75);
    else if (window.innerWidth > 220) setHeadingTransform(-60);
    setHoverTimeout(
      setTimeout(() => {
        setIsDescriptionVisible(true);
      }, 200)
    );
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setImageBrightness(100);
    setIsDescriptionVisible(false);
    setHoverTimeout(
      setTimeout(() => {
        setHeadingTransform(0);
      }, 200)
    );
  };

  return (
    <div
      style={{ marginTop: marginTop }}
      className={`
        relative flex flex-col items-center justify-start w-fit rounded-3xl transition ease-in-out duration-500
        ml3:w-[420px] ml3:h-[600px]
        ml2:h-[450px] ml2:w-[320px]
        ml1:h-[300px] ml1:w-[220px]
        cards
      `}
    >
      <div
        className={`
          absolute w-[400px] h-[600px] cursor-pointer 
          ml1:w-[200px] ml1:h-[300px] 
          ml2:w-[300px] ml2:h-[450px] 
          ml3:w-[400px] ml3:h-[600px] 
          ${heading.replaceAll(" ", "-")}
          id${id}
        `}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={photoPath}
          alt={heading}
          width={400}
          height={600}
          style={{ filter: `brightness(${imageBrightness}%)` }}
          className={`
            absolute w-[400px] h-[600px] rounded-3xl z-0 transition ease-in-out duration-1000 bg-[${bg}]
            ml1:w-[200px] ml1:h-[300px] 
            ml2:w-[300px] ml2:h-[450px] 
            ml3:w-[400px] ml3:h-[600px] 
            brightness-${imageBrightness} 
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

export const PlusesCards = () => {
  const ref = React.createRef<HTMLDivElement>();
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft =
        ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
    }
  }, []);
  return (
    <div
      ref={ref}
      className="ml3:flex ml3:flex-nowrap ml3:overflow-x-auto ml3:w-full ml3:max-w-[1260px] min-scrollbar x-scroll-center ml3:h-[600px] ml2:h-[1350px] ml1:h-[900px] ml3:gap-y-0 mb-5"
      style={{
        scrollbarColor: "#e7e5e4 #f4f4f5",
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
        scrollBehavior: "smooth",
      }}
    >
      {cards.map((card) => (
        <div key={card.id} className="mb-[10px] last:mb-0">
          <Card
            heading={card.heading}
            description={card.description}
            bg={card.bg}
            color={card.color}
            photoPath={card.photoPath}
            id={card.id}
          />
        </div>
      ))}
    </div>
  );
};