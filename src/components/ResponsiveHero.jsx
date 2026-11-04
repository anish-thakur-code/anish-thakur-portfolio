import { motion } from "framer-motion";

import { styles } from "../styles";
import { profile } from "../constants/portfolio";
import { ComputersCanvas } from "./canvas";

const ResponsiveHero = () => (
  <section className='relative w-full min-h-screen overflow-hidden'>
    <div
      className={`relative max-w-7xl min-h-screen mx-auto ${styles.paddingX} pt-24 xs:pt-28 sm:pt-32 lg:pt-0 pb-16 lg:pb-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 xl:gap-12`}
    >
      <div className='relative z-10 w-full flex items-start gap-3 sm:gap-5'>
        <div className='hidden xs:flex flex-col justify-center items-center mt-3 sm:mt-5 shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-52 sm:h-72 lg:h-80 violet-gradient' />
        </div>

        <div className='min-w-0 w-full'>
          <p className='mb-2 text-[#bda7ff] text-[12px] xs:text-[13px] sm:text-[15px] font-semibold uppercase tracking-[0.18em]'>
            MERN STACK DEVELOPER · COMPUTER SCIENCE STUDENT
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anish</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3 max-w-xl text-white-100`}>
            I build full-stack applications that solve real-world problems.
          </p>
          <p className='mt-2 max-w-xl text-[#dfd9ff]/90 text-[14px] sm:text-[17px] leading-relaxed'>
            Passionate about building responsive web experiences with React, Node.js, Express, MongoDB, and n8n workflow automation.
          </p>

          <div className='mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4'>
            <a
              href='#projects'
              className='w-full xs:w-auto text-center rounded-xl bg-[#915EFF] px-6 py-3 text-white font-semibold shadow-lg shadow-[#915EFF]/20 hover:bg-[#804dee] transition-colors'
            >
              View my work
            </a>
            <a
              href={profile.resume}
              download
              className='w-full xs:w-auto text-center rounded-xl border border-secondary px-6 py-3 text-white font-semibold hover:border-white transition-colors'
            >
              Download Resume
            </a>
          </div>

          <div className='mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-secondary'>
            <a className='hover:text-white transition-colors' href={profile.github} target='_blank' rel='noreferrer'>GitHub ↗</a>
            <a className='hover:text-white transition-colors' href={profile.linkedin} target='_blank' rel='noreferrer'>LinkedIn ↗</a>
            <a className='hover:text-white transition-colors' href={profile.leetcode} target='_blank' rel='noreferrer'>LeetCode ↗</a>
          </div>
        </div>
      </div>

      <div className='relative z-0 w-full h-[260px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[660px] max-w-full mx-auto flex items-center justify-center'>
        <ComputersCanvas />
      </div>
    </div>

    <div className='hidden lg:flex absolute bottom-8 w-full justify-center items-center z-10'>
      <a href='#about' aria-label='Scroll to about section'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
          />
        </div>
      </a>
    </div>
  </section>
);

export default ResponsiveHero;
