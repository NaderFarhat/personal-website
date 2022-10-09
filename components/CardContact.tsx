import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import CustomCursor from "../components/CustomCursor";
import { Navbar } from "../components/navbar";
import { GrDocumentDownload } from "react-icons/gr";

interface ICardContact {
  name: string;
  link: string;
  image: string;
  download?: boolean;
}

const CardContact: NextPage<ICardContact> = ({
  name,
  link,
  image,
  download,
}) => {
  return (
    <div className={`flex space-x-2 justify-center hover:cursor-none`}>
      <a
        target="_blank"
        href={link}
        rel="noopener noreferrer"
        type="button"
        className={`inline-block px-6 py-2.5 ${
          name === "linkedin"
            ? "bg-blue-200"
            : name === "github"
            ? "bg-gray-400"
            : download
            ? "bg-amber-200"
            : "bg-red-400"
        } text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:cursor-none hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out flex items-center`}
      >
        {download ? (
          <GrDocumentDownload size={24} />
        ) : (
          <Image
            // loader={myLoader}
            src={image}
            alt={name}
            width={24}
            height={24}
            className="mr-2"
          />
        )}
        <span className="ml-2"> {name}</span>
      </a>
    </div>
  );
};

export default CardContact;
