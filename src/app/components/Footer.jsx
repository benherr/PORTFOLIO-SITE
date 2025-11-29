import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoMdRefreshCircle } from "react-icons/io";
import { FaInstagramSquare, FaFacebookF } from "react-icons/fa";
import { CiSquareChevUp } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import { openModal } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const SocialLink = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-300 hover:scale-110 transition duration-300"
  >
    <Icon />
  </a>
);

const Footer = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  const dispatch = useDispatch();
  const [fact, setFact] = useState("");

  const fetchFact = async () => {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error("Failed to fetch fact:", error);
      setFact("Oops! Couldn't load a fact right now.");
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <button
        className={`fixed bottom-20 mixing bg-gradient-to-r from-blue-500 to-green-500  md:right-1/2 md:translate-x-1/2 right-1/2 translate-x-1/2 mb-85 z-70 ${
          isDarkMode ? "text-white" : "text-black"
        } p-2 rounded-full text-2xl hover:scale-110 transition`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <CiSquareChevUp />
      </button>
      <footer
        id="contact"
        className="mt-20 py-8 px-4 text-center text-white bg-black/70 backdrop-blur-md border-t border-white/10"
      >
        <div className="flex justify-center items-center gap-4 mb-10 text-2xl">
          <SocialLink
            href="https://www.instagram.com/benher._/"
            Icon={FaInstagramSquare}
          />
          <SocialLink href="https://github.com/benherr" Icon={BsGithub} />
          <SocialLink
            href="https://www.linkedin.com/in/benher-basheer-371347377/"
            Icon={AiFillLinkedin}
          />
          {/* <SocialLink
            href="https://leetcode.com/u/artgoblin3000/"
            Icon={TbBrandLeetcode}
          /> */}
          {/* <SocialLink
            href="https://www.facebook.com/satabda.das.980"
            Icon={FaFacebookF}
          /> */}
        </div>
        <button
          className="text-sm px-4 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 mb-4"
          onClick={() => dispatch(openModal())}
        >
          Contact Me
        </button>

        <p className="mt-8 text-xs text-white/40">
          &copy; 2025{" "}
          <a
            href="https://www.instagram.com/benher._/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white"
          >
            Benher
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
