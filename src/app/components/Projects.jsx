import { Parallax } from "react-scroll-parallax";
import { FaJava, FaPython, FaReact } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { SiSolidity,SiMongodb } from "react-icons/si";
import { GiPinata } from "react-icons/gi";
import { RiNextjsFill } from "react-icons/ri";
import { SiSpringboot, SiTwilio, SiMysql, SiFlask } from "react-icons/si";
import Skills from "./Skills";
import { FaGithub,FaNodeJs} from "react-icons/fa";
import { useSelector } from "react-redux";
import "../../../src/app/globals.css";

const Projects = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  const projects = [
    {
      title: "Decentralized Voting App (Dapp",
      tag: "Full-stack App",
      description:
        "Developed a decentralized voting platform using Next.js and blockchain technology, enabling secure, transparent, and tamper-proof elections. Implemented user-friendly interfaces with robust smart contract integration, improving voting accuracy and system reliability.",
      technologies: [RiNextjsFill, SiSolidity,GiPinata, FaGitSquare],
      colorFrom: "from-blue-900/50",
      colorTo: "to-emerald-900/50",
      align: "left",
      link: "https://github.com/benherr/MAINPROJECT/tree/747d05c382dbe31d2a0098091ccadc1c0b38350a/voting-dapp",
    },
    {
      title: "Campus-Care",
      tag: "full-stack-App",
      description:
        "Developed a MERN-based campus infrastructure management platform with issue reporting, real-time tracking, complaint categorization, role-based modules, status updates, and streamlined communication between students, faculty, staff, and maintenance teams",
      technologies: [FaReact,SiMongodb, FaNodeJs, FaGitSquare],
      colorFrom: "from-purple-900/50",
      colorTo: "to-red-900/50",
      align: "right",
      link: "https://github.com/benherr/complaint-portal-MINI",
    },
    // {
    //   title: "Blogging Platform",
    //   tag: "Full-stack App",
    //   description:
    //     "A responsive blogging platform where users can register, login, and share their thoughts and feelings. Implemented secure authentication and cloud-based media storage for seamless content sharing.",
    //   technologies: [
    //     FaJava,
    //     SiSpringboot,
    //     FaReact,
    //     BiLogoPostgresql,
    //     FaGitSquare,
    //   ],
    //   colorFrom: "from-yellow-900/50",
    //   colorTo: "to-pink-900/50",
    //   align: "left",
    //   link: "https://github.com/artgoblin/blogging_site",
    // },
    // {
    //   title: "AI Powered Music Player",
    //   tag: "Desktop Application",
    //   description:
    //     "Developed a desktop application that uses AI voice assisted playback system which helps to play music based on user preferences, enhancing the music discovery experience.",
    //   technologies: [FaPython, FaGitSquare],
    //   colorFrom: "from-green-900/50",
    //   colorTo: "to-blue-900/50",
    //   align: "right",
    //   link: "https://github.com/artgoblin/Voice-assisted-emotion-based-musicplayer",
    // },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      <div className="space-y-8 md:space-y-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent mixing bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-1 py-4 sm:py-8">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex ${
              project.align === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <Parallax
              translateX={project.align === "right" ? [25, -5] : [-5, 25]}
              scale={[1, 1.05]}
              className="w-full"
            >
              <div
                className={`bg-gradient-to-br ${project.colorFrom} ${project.colorTo} p-6 sm:p-8 rounded-xl border border-white/10 w-full max-w-4xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl curtain`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-2 sm:gap-0">
                  <h3
                    className={`text-2xl sm:text-3xl ${
                      isDarkMode ? "text-white" : "text-zinc-700"
                    } font-bold`}
                  >
                    {project.title}
                  </h3>
                  <span className="bg-black/30 px-3 py-1 rounded-full text-xs sm:text-sm">
                    {project.tag}
                  </span>
                </div>

                <p
                  className={`text-sm sm:text-base ${
                    isDarkMode ? "text-gray-200" : "text-zinc-600"
                  } mb-4 sm:mb-6`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
                  {project.technologies.map((tech, id) => {
                    const Icon = tech;
                    return (
                      <Icon
                        key={id}
                        className={`text-3xl sm:text-4xl ${
                          isDarkMode
                            ? "text-white hover:text-purple-400"
                            : "text-zinc-700 hover:text-white"
                        } transition-colors duration-300`}
                      />
                    );
                  })}
                </div>

                <div className="flex justify-center mt-6 sm:mt-8 gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold hover:bg-gray-600 transition text-sm sm:text-base"
                  >
                    Git Hub
                  </a>
                </div>
              </div>
            </Parallax>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          className="p-3 sm:p-4 mt-8 sm:mt-16 bg-gradient-to-r from-blue-500/80 to-green-500/80 text-white-800 hover:scale-[1.05] rounded-full font-medium hover:bg-blue-900 transition-all hover:text-black transition duration-300 flex items-center gap-2 text-sm sm:text-base"
          href={"https://github.com/benherr"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>Learn More</span>
        </a>
      </div>
      <Skills />
    </div>
  );
};

export default Projects;
