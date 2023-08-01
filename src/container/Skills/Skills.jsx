import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';
import { SKILLS_LINK } from '../../constants';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"] | order(year desc)';
    const skillsQuery = '*[_type == "skills"] | order(lower(name) asc)';
    const brandsQuery = '*[_type == "brands"] | order(lower(name) asc)';
    client.fetch(experiencesQuery)
      .then((data) => {
        setExperiences(data);
      });
    client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      });
    
    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      });
  }, []);

  const skillsList = useMemo(() => (<motion.div className='app__skills-list'>
    { skills?.map((skill) => (
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__skills-item app__flex'
        key={ skill.name }
      >
        <div className='app__flex' style={{ background: skill.bgColor }}>
          <img src={ urlFor(skill.icon) } alt={skill.name} loading='lazy' />
        </div>
        <p className='p-text'>{skill.name}</p>
      </motion.div>
    )) }
  </motion.div>),
  [skills]);

  return (
    <>
      <h2 className='head-text'>My Awesome <span>Skills</span> & <span>Experience</span></h2>
      <h3>My skills are wideranging, spanning across multiple creative and technical disciplines. I absorb information like a sponge and I'm in constant pursuit of skills that can help develop me into a well rounded professional.</h3>
      <div className='app__skills-container'>
        { skillsList }
        <div className='app__skills-exp-container'>
          <motion.div className='app__skils-exp'>
            {experiences?.map((experience) => (
              <motion.div
                className='app__skills-exp-item'
                key={ experience.year }
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience?.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}
                        key={ work.name }
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                        <p className='p-text'>{work.duration}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect='solid'
                        arrowColor='#ffffff'
                        className='skills-tooltip'
                        key={ `${work.name}-tooltip` }
                        place='bottom'
                      >
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <div className='app__skills-brands app__flex'>
            { brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                key={brand._id}
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} loading='lazy' width='100%' height='100%' />
              </motion.div>
            )) }
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app__skills'), SKILLS_LINK, 'app__whitebg');
