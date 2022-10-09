import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function CardProject({ name, description, tags, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      type="button"
      className="mx-3"
    >
      <div className="rounded overflow-hidden shadow-lg mb-6">
        <Image
          className="w-full"
          src={image}
          alt="image-project"
          width={120}
          height={120}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags.map((item) => {
            return (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </a>
  );
}
