'use client';

import Image from "next/image";
import { ReviewProps, reviews } from "../lib/definitions";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Review = ({ author, text, file, id }: ReviewProps) => {
  return (
    <div
      className={`flex ${clsx({
        "flex-row-reverse": id % 2 === 1,
        "flex-row": id % 2 === 0,
      })} items-center gap-x-2`}
    >
      {file && (
        <div className="relative h-12 w-12 overflow-hidden rounded-full flex items-center justify-center">
          <Image
            width={40}
            height={40}
            alt="avatar"
            src={file}
            className="aspect-square rounded-full"
          />
        </div>
      )}
      <div
        id={`${id}`}
        className="bg-zinc-200/30 rounded-2xl pl-4 pr-4 py-2 w-fit"
      >
        <p
          className={
            "font-bold " +
            clsx({ "text-right": id % 2 === 1, "text-left": id % 2 === 0 })
          }
        >
          {author}
        </p>
        <p
          className={
            "whitespace-normal max-w-[500px] leading-relaxed " +
            clsx({ "text-right": id % 2 === 1, "text-left": id % 2 === 0 })
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export const GoodReviews = () => {
  const [shuffledReviews, setShuffledReviews] = useState(reviews);

  useEffect(() => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    shuffled.forEach((review, index) => (review.id = index));
    setShuffledReviews(shuffled);
  }, []);

  const classNames = {
    left: "ml-[10px] mr-[10px] mb-[10px] last:mb-0 flex justify-start",
    right: "ml-[10px] mr-[10px] mb-[10px] last:mb-0 flex justify-end",
  };

  return (
    <div className="w-full max-w-[1260px]">
      {shuffledReviews.map((review) => (
        <div
          key={review.id}
          className={clsx({
            [classNames.left]: review.id % 2 === 0,
            [classNames.right]: review.id % 2 === 1,
          })}
        >
          <Review
            author={review.author}
            text={review.text}
            file={review.file}
            id={review.id}
          />
        </div>
      ))}
    </div>
  );
};

