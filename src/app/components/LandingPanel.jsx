import { TextLoop } from "@/components/motion-primitives/text-loop";
import { Magnetic } from '@/components/motion-primitives/magnetic';
import { useSelector } from "react-redux";

import "../../../src/app/globals.css";

const LandingPanel = () => {
    const theme = useSelector((state) => state.theme.color);
    const isDarkMode = theme === "dark";
  const texts = [
    "Full-Stack Developer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ];

  const handleViewButtonClick = () => {
    const section = document.getElementById("works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <h1 className={`z-10 text-5xl md:text-7xl  ${isDarkMode ? "text-white" : "text-black"} font-extrabold leading-tight tracking-wide`}>
        Hi, I'm{" "}
        <span className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
          Benher
        </span>
      </h1>

      <div className={`z-10 text-2xl md:text-4xl mt-4 ${isDarkMode ? "text-white" : "text-black"} font-medium inline-flex`}>
        I'm a&nbsp;
        <TextLoop
          className="overflow-y-clip"
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 70,
            mass: 10,
          }}
          variants={{
            initial: {
              y: 20,
              rotateX: 90,
              opacity: 0,
              filter: "blur(4px)",
            },
            animate: {
              y: 0,
              rotateX: 0,
              opacity: 1,
              filter: "blur(0px)",
            },
            exit: {
              y: -20,
              rotateX: -90,
              opacity: 0,
              filter: "blur(4px)",
            },
          }}
        >
          {texts.map((text, idx) => (
            <span key={idx} className="text-red-400 font-semibold">
              {text}
            </span>
          ))}
        </TextLoop>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 gap-4">
        <button
          className="z-10 px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
          onClick={handleViewButtonClick}
          aria-label="View my work"
        >
          View my work ↓
        </button>
        <Magnetic>
        <button
          className="z-10 px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
          onClick={() => window.open("/Benher-Basheer-Resume.pdf", "_blank")}
          aria-label="View Resume"
        >
          Resume
        </button>
        </Magnetic>
      </div>
    </>
  );
};

export default LandingPanel;
