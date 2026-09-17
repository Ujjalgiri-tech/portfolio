import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://x.com/" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { Icon: FaGithub, label: "Github", href: "https://github.com/" },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-800">
      <motion.div
        className="relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="font-semibold leading-none text-white text-center select-none"
          style={{
            fontSize: "clamp(3rem,5vw,14rem)",
            letterSpacing: "0.02em",
            lineHeight: 0.9,
            padding: "0 3vw",
            whiteSpace: "nowrap",
            textShadow: "0 2px 18px rgba(0,0,0,4.5)",
          }}
        >
          Ujjal Giri
        </h1>

        <div className="flex gap-5 text-2xl md:text-3xl">
          {socials.map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="text-gray-400 transition-colors duration-200 inline-flex items-center justify-center"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        <p className="text-gray-300 italic max-w-xl font-semibold">"Code. Create. Connect."</p>
        <p className="text-xs text-gray-400 font-semibold">&copy; {new Date().getFullYear()} Ujjal Giri. All right reserved.</p>
      </motion.div>
    </footer>
  );
}
