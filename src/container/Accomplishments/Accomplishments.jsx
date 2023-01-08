import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Accomplishments.scss';
import { ACCOMPLISHMENTS_LINK, GITHUB_TAG, HACKERRANK_TAG, LEETCODE_TAG } from '../../constants';
import LeetCode from './LeetCode';
import HackerRank from './HackerRank';

const ACCOMPLISHMENTS_TAGS = [
  {
    label: LEETCODE_TAG,
    component: <LeetCode />
  },
  {
    label: HACKERRANK_TAG,
    component: <HackerRank />
  },
  {
    label: GITHUB_TAG,
    component: <LeetCode />
  },
];

const Accomplishments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleTagFilter = (index) => {
    setActiveIndex(index);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  return (
    <>
      <h2 className='head-text'>My <span>Accomplishments</span></h2>
      <div className='app__accomplishments-filter'>
        {ACCOMPLISHMENTS_TAGS.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleTagFilter(index)}
            className={`app__accomplishments-filter-item app__flex p-text ${(activeIndex === index) ? 'item-active' : ''}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__accomplishments-container'
      >
        { ACCOMPLISHMENTS_TAGS[activeIndex].component }
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Accomplishments, 'app__accomplishments'), ACCOMPLISHMENTS_LINK, 'app__whitebg');
