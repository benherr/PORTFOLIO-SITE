import { CiLocationOn } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../../../src/app/globals.css";

const About = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  return (
    <div className="flex flex-col items-center min-h-screen py-20 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text mixing bg-gradient-to-r from-blue-500 to-green-500 mb-10">
          About Me
        </h1>

        <div className={`${isDarkMode ? "text-white" : "text-black"} text-lg leading-loose space-y-6 p-8`}>
        <div className={`flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-medium text-center  ${isDarkMode ? "text-white" : "text-black"} mb-10`}>
          <div className="flex items-center gap-2">
            <CiLocationOn size={24} />
            <span>Kochi, India</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGraduationCap size={24} />
            <span>Master of Computer Applications</span>
          </div>
        </div>

          <p>
            I'm a passionate Full-Stack Developer with a love for building
            scalable, user-focused web apps using Java, React.js, and Spring
            Boot. I enjoy turning complex problems into clean, efficient
            solutions across both frontend and backend.
          </p>

          <p>Driven by clean code, smart design, and continuous learning.
          I enjoy solving challenging problems on LeetCode it keeps my brain sharp and
           my algorithms sharper.
          </p>
          

          <p>
            When I'm not wrangling code, you'll find me pretending to be Picasso
            with a paintbrush, hitting sixes (in my mind) on the cricket field,
            or cooking up dishes that are 50% recipe and 50% guesswork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
