"use client";
import { useState, useEffect } from "react";
import Bubble from "../app/components/Bubble";
import { useRef } from "react";
import Navbar from "../app/components/Navbar";
import LandingPanel from "../app/components/LandingPanel";
import About from "../app/components/About";
import Theme from "../app/components/Theme";
import Projects from "../app/components/Projects";
// import Experience from "../app/components/Experience";
import Footer from "../app/components/Footer";
import SectionWrapper from "../app/SectionWrapper";
import ContactForm from "../app/components/ContactForm";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./store/modalSlice";
import { dark, light } from "./store/themeSlice";
import { RootState } from "./store/store";

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.color);
  const isDarkMode = theme === "dark";
  const open = useSelector((state: RootState) => state.modal.open);
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [bubbles, setBubbles] = useState<
    {
      id: number;
      size: number;
      left: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const generateBubbles = () => {
      const bubbleCount = Math.floor(window.innerWidth / 20);

      setBubbles(
        Array.from({ length: bubbleCount }, (_, i) => ({
          id: i,
          size: Math.random() * 100 + 20,
          left: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 15,
        }))
      );
    };

    generateBubbles();
    window.addEventListener("resize", generateBubbles);

    return () => window.removeEventListener("resize", generateBubbles);
  }, []);
  const HandleThemeChange = () => {
    if (isDarkMode) {
      dispatch(light());
    } else {
      dispatch(dark());
    }
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full  
      ${isDarkMode ? "bg-black" : "bg-white"}
      overflow-hidden pointer-events-none z-0`}
      >
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            size={bubble.size}
            left={bubble.left}
            duration={bubble.duration}
            delay={bubble.delay}
          />
        ))}
      </div>

      {/* Content sections with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <SectionWrapper id="home">
          <LandingPanel />
        </SectionWrapper>
        <div className="backdrop-blur-[8px]">
          <SectionWrapper id="about">
            <About />
          </SectionWrapper>
          <SectionWrapper id="works">
            <Projects />
          </SectionWrapper>
          {/* <SectionWrapper id="experience">
            <Experience /> */}
          {/* </SectionWrapper> */}
          <Footer />
        </div>
        <Theme HandleThemeChange={HandleThemeChange} isDarkMode={isDarkMode} />
        {open && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
            onClick={handleOutsideClick}
          >
            <div ref={modalRef} onClick={(e) => e.stopPropagation()}>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
