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
    <div className="py-16 ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-300 text-clip text-gray-800 overflow-x-clip">
      <div className="flex gap-2 py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {portfolioKeywords.map((result) => {
        return (
          <div key={result} className="inline-flex gap-2">
            <span  className="text-gray-900 uppercase font-extrabold">{result}</span>
            <StartIcon />
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};
