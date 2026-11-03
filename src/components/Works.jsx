import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/portfolio";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  year,
  monogram,
  highlights,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className='w-full sm:w-[360px] flex'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl w-full flex flex-col justify-between'
      >
        <div>
          <div className='relative w-full h-[190px] overflow-hidden rounded-2xl project-gradient grid place-items-center'>
            <div className='absolute w-36 h-36 bg-[#915EFF]/30 rounded-full blur-2xl' />
            <span className='relative text-white text-[56px] font-black tracking-tight'>{monogram}</span>
            <span className='absolute top-4 right-4 text-[12px] bg-black-100/80 rounded-full px-3 py-1 text-white'>{year}</span>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-6'>{description}</p>
            <p className='mt-3 text-white-100 text-[13px] leading-5'>{highlights}</p>
          </div>
        </div>

        <div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          <div className='mt-5 flex gap-3'>
            {source_code_link && (
              <a href={source_code_link} target='_blank' rel='noreferrer' className='text-[13px] text-white bg-black-100 px-4 py-2 rounded-lg hover:bg-[#211b40] transition-colors'>
                GitHub ↗
              </a>
            )}
            {live_link && (
              <a href={live_link} target='_blank' rel='noreferrer' className='text-[13px] text-white bg-[#915EFF] hover:bg-[#804dee] transition-colors px-4 py-2 rounded-lg font-medium'>
                Live demo ↗
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects trace my path from vanilla JavaScript and API
          integration to polished React interfaces and complete MERN products.
          Each one helped me turn a different part of the web stack into
          something practical and usable.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
