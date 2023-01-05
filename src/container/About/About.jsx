import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './About.scss';
import { ABOUT_LINK } from '../../constants';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>It is never too late to <span>learn something</span></h2>
      <div className='app__profiles'>
        { abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        )) }
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-about'
        >
          <p className='bold-text'>I am a Senior System Software Engineer at NVIDIA Graphics Pvt. Ltd, Pune, India.</p>
          <p className='bold-text'>I am Computer Science Graduate from BITS Pilani, Rajasthan, India.</p>
          <p className='bold-text'>I like solving competitive coding problems, exploring new technologies, drawing, painting, travelling and gaming.</p>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), ABOUT_LINK, 'app__whitebg');
