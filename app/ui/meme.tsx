'use client';

import { MemeProps, memes } from "../lib/definitions";
import clsx from "clsx";
import { rubikVinyl } from "./fonts";
import React from "react";

let currentPhotoId = Math.floor(Math.random() * memes.length);

const changeCurrentMeme = (id: number) => {
  currentPhotoId = id;
  const imageElement = document.querySelector<HTMLImageElement>(".left-img");
  if (imageElement && memes[currentPhotoId].file) {
    imageElement.style.transition = "opacity 0.5s ease-in-out";
    imageElement.style.opacity = "0";
    setTimeout(() => {
      imageElement.src = memes[currentPhotoId].file;
      imageElement.style.opacity = "1";
      console.info("Image source updated:", imageElement.src);
    }, 500);
  }
  document.querySelectorAll<HTMLDivElement>(".meme").forEach((el) => {
    el.classList.remove(
      "border-l-[2px]",
      "border-zinc-700",
      "ml3:ml-[20px]",
      "ml3:pl-[15px]",
      "ml-[5px]",
      "pl-[10px]"
    );
    el.classList.add("ml3:ml-[35px]");
    el.classList.add("ml-[15px]");
  });
  document
    .querySelector<HTMLDivElement>(`.meme.id${currentPhotoId}`)
    ?.classList.add(
      "border-l-[2px]",
      "border-zinc-700",
      "ml3:ml-[20px]",
      "ml3:pl-[15px]",
      "ml-[5px]",
      "pl-[10px]"
    );
  document
    .querySelector<HTMLDivElement>(`.meme.id${currentPhotoId}`)
    ?.classList.remove("ml3:ml-[35px]");
  document.querySelector<HTMLDivElement>(`.meme.id${currentPhotoId}`)?.classList.remove("ml-[15px]");
};

export default function Meme({ heading, tags, file, id, date }: MemeProps) {
  const [isCurrent, setIsCurrent] = React.useState(false);

  React.useEffect(() => {
    if (id === currentPhotoId) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [id, currentPhotoId]);

  const handleClick = () => {
    if (currentPhotoId != id) changeCurrentMeme(id);
  };

  return (
    <div
      className={
        "meme flex flex-col w-full pb-[6px] cursor-pointer id" +
        id +
        clsx({
          " border-l-[2px] border-zinc-700 ml-[5px] pl-[10px] ml3:ml-[20px] ml3:pl-[15px]":
            isCurrent,
          " ml3:ml-[35px] ml-[15px]": !isCurrent,
        })
      }
      style={{
        transition: "margin-left 0.5s ease-in-out, padding-left 0.5s ease-in-out",
      }}
      onClick={handleClick}
    >
      <span className={"font-bold text-[8cqi] ml3:text-[3.5cqi] " + rubikVinyl.className}>
        {heading}
      </span>
      <div className="w-full flex flex-wrap">
        {tags.map((tag) => (
          <div
            className="bg-zinc-100 rounded-xl px-3 py-[0.2rem] mb-2 last:mb-0 mr-2 last:mr-0 w-fit h-fit"
            key={`${tag}${id}`}
          >
            {"#" + tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export const BestMemes = () => {
  return (
    <div className="w-full h-auto max-w-[1260px] flex flex-col ml3:flex-row justify-between items-stretch">
      <div className="ml3:w-1/2 w-full left">
        {memes[currentPhotoId].file && (
          <img
            width={500}
            height={500}
            src={memes[currentPhotoId].file}
            alt="meme"
            className="left-img aspect-square rounded-2xl object-cover bg-white ml3:ml-[10px]"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="ml3:w-1/2 ml3:mt-0 mt-3 w-full right flex flex-col">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="mb-[10px] last:mb-0 flex-grow h-full flex items-center"
          >
            <Meme
              heading={meme.heading}
              tags={meme.tags}
              file={meme.file}
              id={meme.id}
              date={meme.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};