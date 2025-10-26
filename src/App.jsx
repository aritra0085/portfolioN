import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
} from "lucide-react"

import {
  personalInfo,
  projects,
  socialLinks,
  experiences,
  tools,
  goals,
  achievements,
  skills,
  certificates,
  animatedBlobs,
} from "./constants/data.jsx";
import pp from "/pp.jpg"
function App() {

  const [time, setTime] = useState("")
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleDateString());
    const timer = setInterval(() => setTime(new Date().toLocaleDateString()), 1000);
    return () => clearInterval(timer); 
  }, []);


  const containerVarients = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 40},
    show:{
      opacity:1,
      y:0,
      transition:{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };


  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i) => (
          <motion.div key={i}
          className={`absolute rounded-full ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeateType: "mirror"
          }}>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default App;