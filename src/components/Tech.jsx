import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, skillGroups } from "../constants/portfolio";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const normalizeText = (value = "") => value.toLowerCase().replace(/[^a-z0-9]/g, "");

const Tech = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedGroup = useMemo(
    () => skillGroups.find((group) => group.label === activeFilter),
    [activeFilter]
  );

  const filteredGroups = useMemo(() => {
    const query = normalizeText(searchTerm);

    return skillGroups.filter((group) => {
      const matchesCategory = activeFilter === "All" || group.label === activeFilter;
      const searchableText = `${group.label} ${group.skills.join(" ")}`;
      const matchesSearch = !query || normalizeText(searchableText).includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  const filteredTechnologies = useMemo(() => {
    const query = normalizeText(searchTerm);
    const selectedSkills = selectedGroup
      ? selectedGroup.skills.map((skill) => normalizeText(skill))
      : [];

    return technologies.filter((technology) => {
      const matchesCategory =
        activeFilter === "All" ||
        selectedSkills.some(
          (skill) =>
            normalizeText(technology.name).includes(skill) || skill.includes(normalizeText(technology.name))
        );

      const matchesSearch =
        !query || normalizeText(technology.name).includes(query) || normalizeText(technology.name).includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm, selectedGroup]);

  const filters = ["All", ...skillGroups.map((group) => group.label)];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <div className='mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-wrap gap-2'>
          {filters.map((filter) => (
            <button
              key={filter}
              type='button'
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "border-cyan-400 bg-cyan-500/10 text-cyan-300"
                  : "border-white/10 bg-tertiary text-secondary hover:border-cyan-400/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='w-full lg:max-w-xs'>
          <input
            type='text'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder='Search skills or tools'
            className='w-full rounded-xl border border-white/10 bg-tertiary px-4 py-2.5 text-sm text-white placeholder:text-secondary outline-none transition focus:border-cyan-400/60'
          />
        </div>
      </div>

      {filteredGroups.length > 0 ? (
        <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {filteredGroups.map((group, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.1, 0.6)}
              className='bg-tertiary rounded-2xl p-6 border border-white/5'
              key={group.label}
            >
              <h3 className='text-white text-[20px] font-bold'>{group.label}</h3>
              <div className='mt-4 flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span key={skill} className='text-secondary text-[14px] bg-black-100 rounded-full px-3 py-1.5'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className='mt-12 rounded-2xl border border-dashed border-white/10 bg-tertiary p-8 text-center text-secondary'>
          No skills match your current filter.
        </div>
      )}

      {filteredTechnologies.length > 0 && (
        <div className='mt-14 flex flex-row flex-wrap justify-center gap-6'>
          {filteredTechnologies.map((technology) => (
            <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name} title={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
