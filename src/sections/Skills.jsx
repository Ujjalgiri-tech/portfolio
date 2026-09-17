import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiAngular,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import ParticlesBackground from "../components/ParticlesBackground";
import Center from "../assets/Center.png";

export default function SkillsCircle() {
  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiPython />, name: "Python" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiAngular />, name: "Angular" },
  ];

  const radius = 150;

  return (
    <section
      id="skills"
      className="relative w-full py-16 flex flex-col items-center bg-gray-800 text-white overflow-hidden"
    >
      <ParticlesBackground/>
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full 
                      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
                      opacity-20 blur-[120px] animate-pulse"></div>

      
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full 
                      bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] 
                      opacity-20 blur-[120px] animate-pulse delay-500"></div>

      <motion.h2
  className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent 
             bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Skills
</motion.h2>

      
      <motion.p
        className="mt-2 mb-10 text-white/90 text-base sm:text-lg z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Modern Techs | Modern Tools
      </motion.p>

      
      <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">

        
        <div className="absolute z-20 w-28 h-28 rounded-full bg-white/10 backdrop-blur-md 
                        border border-white/10 flex items-center justify-center shadow-lg">
          <img
            src={Center}
            alt="center"
            className="w-20 h-20 object-contain"
          />
        </div>

        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: "50% 50%" }}
        >
          
          <div
            className="absolute rounded-full border border-cyan-400/30"
            style={{
              width: radius * 2 + 60,
              height: radius * 2 + 60,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 40px rgba(0,255,255,0.25)",
            }}
          ></div>

          {/* ICONS AROUND CIRCLE */}
          {skills.map((item, i) => {
            const angle = (i / skills.length) * 360;
            const rad = (angle * Math.PI) / 180;

            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.25,
                    filter: "drop-shadow(0 0 12px #1cd8d2)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl p-3 rounded-full bg-white/5 shadow-lg"
                  style={{
                    color: "#1cd8d2",
                    willChange: "transform",
                  }}
                >
                  {item.icon}
                </motion.div>

                <p className="text-xs mt-1 opacity-80 text-center">{item.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      <p className="text-xs text-white/60 mt-4">These are my skills as a Front-End Developer</p>
    </section>
  );
}
