import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants/portfolio";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='relative z-10'>
          <p className='mb-2 text-[#bda7ff] text-[13px] sm:text-[15px] font-semibold uppercase tracking-[0.18em]'>
            MERN STACK DEVELOPER · COMPUTER SCIENCE STUDENT
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 max-w-xl text-white-100`}>
            I build full-stack applications that solve real-world problems.
          </p>
          <p className='mt-2 max-w-xl text-[#dfd9ff]/90 text-[15px] sm:text-[17px] leading-relaxed'>
            Passionate about building responsive web experiences with React, Node.js, Express, MongoDB, and n8n workflow automation.
          </p>
          <div className='mt-7 flex flex-wrap gap-4'>
            <a href='#projects' className='rounded-xl bg-[#915EFF] px-6 py-3 text-white font-semibold shadow-lg shadow-[#915EFF]/20'>
              View my work
            </a>
            <a href={profile.resume} download className='rounded-xl border border-secondary px-6 py-3 text-white font-semibold hover:border-white transition-colors'>
              Download résumé
            </a>
          </div>
          <div className='mt-5 flex flex-wrap gap-5 text-[14px] text-secondary'>
            <a className='hover:text-white' href={profile.github} target='_blank' rel='noreferrer'>GitHub ↗</a>
            <a className='hover:text-white' href={profile.linkedin} target='_blank' rel='noreferrer'>LinkedIn ↗</a>
            <a className='hover:text-white' href={profile.leetcode} target='_blank' rel='noreferrer'>LeetCode ↗</a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
