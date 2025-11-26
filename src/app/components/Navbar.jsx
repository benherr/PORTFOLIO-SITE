import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const Navbar = () => {
  const theme = useSelector((state) => state.theme.color);
  const isDarkMode = theme === "dark";
  const TABS = ["Home", "About", "Works", "Contact"];

  const handleNavClick = (tab) => {
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex items-center w-full fixed top-0 left-0 z-50 bg-black/5 backdrop-blur-md px-4 py-2">
        <AnimatedBackground
          defaultValue={TABS[0]}
          className="rounded-lg bg-zinc-300 dark:bg-zinc-800/50"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              data-id={tab}
              type="button"
              className={`px-2 text-sm md:px-8 md:py-4 md:text-base ${isDarkMode ? "text-zinc-400" : "text-zinc-700"} transition-colors duration-300 hover:text-zinc-50`}
              onClick={() => handleNavClick(tab)}
            >
              {tab}
            </button>
          ))}
        </AnimatedBackground>
        <div className="flex-grow" />
        <div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            onClick={() => {
               window.open("/Benher-Basheer-Resume.pdf", "_blank");}
            }
            className="hover:scale-[1.05] cursor-pointer p-1"
          >
            <img src="/favicon.ico" alt="Logo" className="w-10 h-10" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
