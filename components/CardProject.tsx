import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ICardContact {
  name: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export default function CardProject({
  name,
  description,
  tags,
  image,
  link,
}: ICardContact) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
      >
        <Image
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
          width={160}
          height={170}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="px-6 pt-4 pb-2">
            {tags.map((item, index) => {
              return (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </>
  );
}
