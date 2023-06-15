import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Work.scss';
import { ALL_TAG, PROJECT_TAGS, WORK_LINK } from '../../constants';
import ReactTooltip from 'react-tooltip';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_TAG);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"] | order(rank asc)';
    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === ALL_TAG) {
        setFilterWork(works);
      }
      else {
        setFilterWork(works.filter((work) => work.searchTags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>My Creative <span>Projects</span> Section</h2>
      <div className='app__work-filter'>
        {PROJECT_TAGS.map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${(activeFilter === item) ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={`work-${work.title}-${index}`} loading='lazy' />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {(work.projectLink) ? <a href={work.projectLink} target="_blank" rel="noreferrer" title={`work-link-${work.title}-${index}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a> : null}
                <a href={work.codeLink} target="_blank" rel="noreferrer" title={`work-source-code-${work.title}-${index}`}>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex' data-tip data-for={work.title}>
              <h3 className='bold-text'>{work.title}</h3>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags.join(' || ')}</p>
              </div>
            </div>
            <ReactTooltip
              id={work.title}
              effect='solid'
              arrowColor='#ffffff'
              className='projects-tooltip'
              key={ `${work.title}-tooltip` }
              place='bottom'
            >
              {work.description}
            </ReactTooltip>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, 'app__work'), WORK_LINK, 'app__primarybg');
