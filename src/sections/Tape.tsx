"use client"
import {motion} from "framer-motion"
import Marquee from "react-fast-marquee";
import StartIcon from "../assets/icons/star.svg";
const portfolioKeywords = [
  "Creativity",
  "Innovation",
  "Expertise",
  "Design",
  "Solutions",
  "Passion",
  "Quality",
  "Professionalism",
  "Craftsmanship",
  "Vision",
];

export const TapeSection = () => {
  return (
    <div className="py-16  overflow-x-clip container ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 text-clip text-gray-800 overflow-x-clip rounded-md">
      <div className="flex gap-2 py-3 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <Marquee pauseOnHover={true} speed={30} autoFill={true}>
      {portfolioKeywords.map((result) => {
        return (
          <div key={result} className="inline-flex gap-2">
            <span  className="text-gray-900 uppercase font-extrabold">{result}</span>
            <StartIcon />
          </div>
        );
      })}
      </Marquee>
      </div>
      </div>
    </div>
  );
};
