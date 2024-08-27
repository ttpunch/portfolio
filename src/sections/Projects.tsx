import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircle from "../assets/icons/check-circle.svg";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <p className=" text-center text-semibold  uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
          REAL-WORLD RESULTS
        </p>
        <h2 className="text-center font-serif text-3xl mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/40 mt-4">
          See how i transformed concept into engaging digital experiences
        </p>
        <div>
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 flex flex-col lg:flex-row overflow-hidden justify-start w-[98%] h-auto border border-white/40 rounded-3xl mx-auto px-8 py-8 mt-6"
            >
              <div className="lg:flex lg:flex-col lg:w-full lg:gap-4 lg:px-10 lg:py-10">
              <div className="text-semibold  uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                <span>{project.company} . </span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-4">{project.title}</h3>
              <hr className="opacity-20" />
              <ul className="flex flex-col space-y-4 mt-4 text-white/50">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm " key={result.title}>
                    <CheckCircle className="size-5" />
                    {result.title}
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="rounded-xl bg-white text-gray-800 px-4 py-2 w-full mt-6 mb-10 lg:mb-4">
                  View live status
                </button>
              </a>
              </div>
              <Image src={project.image} alt="Project image" className="lg:size-1/2 lg:mt-6"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
