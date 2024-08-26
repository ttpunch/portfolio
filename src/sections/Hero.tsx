import memojiImage from "../assets/images/memoji-computer.png";
import DownArrow from "../assets/icons/arrow-down.svg";
import grainImage from "../assets/images/grain.jpg"
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="py-24 relative z-0">
      <div className="absolute inset-0 -z-30 opacity-10"
      style={{
        backgroundImage:`url(${grainImage.src})`
      }}>
      </div>
      <div className="hero-ring">

      </div>
      <div className="hero-ring lg:size-[600px] md:size-[570px] size-[500px]">

      </div>
      <div className="hero-ring lg:size-[500px] md:size-[470px] size-[400px]">

      </div>
      <div className="hero-ring lg:size-[800px] md:size-[770px] size-[700x]">

      </div>
      <div className="container">
        <div className="flex flex-col items-center md:mt-14 lg:mt-24">
          <Image
            src={memojiImage}
            alt="person from behind"
            className="size-[100px]"
          />
          <div className="flex gap-2 px-4 py-1.5 border border-white/40 rounded-lg items-center text-sm font-semibold">
            <div className="bg-green-500 rounded-full w-3 h-3 "></div>
            <div>Available for new projects</div>
          </div>
          
            <h1 className="text-3xl md:text-5xl font-serif max-w-72 md:max-w-lg text-center mt-4 md:mt-10">
              Building Exceptional User Experience
            </h1>
            <p className="text-center mt-4 text-gray-400 md:max-w-lg md:text-xl md:px-2">
              I specialized in transforming design into functional, high
              performing web application. Lets discuss your next project
            </p>

            <div className="flex mx-auto flex-col gap-4 mt-10 md:flex-row md:gap-4 lg:text-lg">
              <button className=" cursor-pointer flex items-center min-w-max rounded-xl px-5 py-3 border border-white/20 font-semibold font-lg">
                Explore my work
                <DownArrow className="ml-2 inline-flex size-4" />
              </button>
              <button className="flex items-center gap-2  justify-center min-w-max rounded-xl px-5 py-3 bg-white font-semibold font-lg text-gray-800 cursor-pointer">
                Lets connect <span className="animate-bounce">👋</span>
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
