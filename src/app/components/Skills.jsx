import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import {
  FaJava,
  FaPython,
  FaReact,
  FaGitSquare,
  FaDocker,
  FaRegSnowflake,
  FaHtml5,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiSpringboot,
  SiFlask,
  SiApachekafka,
  SiApollographql,
  SiMysql,
  SiGithub,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandCpp } from "react-icons/tb";
import { useSelector } from "react-redux";
import "../../app/globals.css";

const Skills = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  return (
    <InfiniteSlider speedOnHover={60} gap={24} className="mt-35">
      <FaReact
        className="text-5xl text-cyan-400 hover:scale-110 transition"
        title="React"
      />
      <FaJava
        className="text-5xl text-[#f89820] hover:scale-110 transition"
        title="Java"
      />
      <SiSpringboot
        className="text-5xl text-green-500 hover:scale-110 transition"
        title="Spring Boot"
      />
      <BiLogoPostgresql
        className="text-5xl text-[#336791] hover:scale-110 transition"
        title="PostgreSQL"
      />
      <FaPython
        className="text-5xl text-[#3776AB] hover:scale-110 transition"
        title="Python"
      />
      <SiFlask
        className="text-5xl text-gray-300 hover:scale-110 transition"
        title="Flask"
      />
      <FaGitSquare
        className="text-5xl text-[#f05033] hover:scale-110 transition"
        title="Git"
      />
      <SiGithub
        className={`text-5xl ${
          isDarkMode ? "text-white" : "text-black"
        }  hover:scale-110 transition`}
        title="GitHub"
      />
      <GrGraphQl
        className="text-5xl text-[#e10098] hover:scale-110 transition"
        title="GraphQL"
      />
      <SiApachekafka
        className="text-5xl text-[#231f20] hover:scale-110 transition"
        title="Kafka"
      />
      <FaDocker
        className="text-5xl text-[#0db7ed] hover:scale-110 transition"
        title="Docker"
      />
      {/* <FaRegSnowflake
        className="text-5xl text-[#56b9ff] hover:scale-110 transition"
        title="Snowflake"
      /> */}
      <TbBrandCpp
        className="text-5xl text-[#00599C] hover:scale-110 transition"
        title="C++"
      />
      {/* <SiApollographql
        className="text-5xl text-[#311C87] hover:scale-110 transition"
        title="Apollo GraphQL"
      /> */}
      {/* <SiMysql
        className="text-5xl text-[#00758f] hover:scale-110 transition"
        title="MySQL"
      /> */}
      <RiNextjsFill
        className={`text-5xl ${isDarkMode ? "text-white" : "text-black"} hover:scale-110 transition`}
        title="Next.js"
      />
      <FaHtml5
        className="text-5xl text-[#e34f26] hover:scale-110 transition"
        title="HTML5"
      />
      <TbBrandRedux
        className="text-5xl text-[#e34f26] hover:scale-110 transition"
        title="Redux"
      />
    </InfiniteSlider>
  );
};

export default Skills;
