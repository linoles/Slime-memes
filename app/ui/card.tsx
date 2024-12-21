'use client';

import type { CardProps } from "@/app/lib/definitions";
import Image from "next/image";
import { robotoCondensed } from "@/app/ui/fonts";

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

  return (
    <div
      style={cardStyle}
      className="flex flex-col items-center justify-start h-fit rounded-3xl ml-5"
      onMouseOver={funcDesc}
      onMouseLeave={hideDesc}
    >
      <Image
        src={photoPath}
        alt="Picture of the author"
        width={400}
        height={600}
        className="rounded-3xl z-0"
      />
      <div
        style={{ width: "400px", height: "600px" }}
        className={`absolute z-10 flex flex-col items-left justify-end pl-6 pb-6`}
      >
        <h4
          className={`${robotoCondensed.className} text-2xl font-medium`}
          style={{ color: color }}
        >
          {heading.toUpperCase()}
        </h4>
        <p className={"text-lg hidden photoDesc " + heading.replaceAll(" ", "-")} style={{ color: color }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function PlusesCards() {
  const FunCard = (
    <Card
      heading="Веселье"
      description="Конечно же, в первую очередь, веселье. Для чего же ещё может быть канал по мемам?<br>Здесь вы получите самые угарные мемы, с которых смешно даже если это баян. :) Кстати, у нас их нет! (Почти)"
      bg="#a3a3a3"
      color="white"
      photoPath="/fun.jpg"
    />
  );

  return <div className="pt-10">{FunCard}</div>;
}
