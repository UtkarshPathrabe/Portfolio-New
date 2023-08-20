import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './About.scss';
import { ABOUT_LINK, images } from '../../constants';

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>It is <span>never too late</span> to <span>learn something</span></h2>
      <div className='app__profiles-container'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profiles-image'
        >
          <img src={images.utkarshImage} alt='utkarsh pathrabe' loading='lazy' width='100%' height='100%' />
        </motion.div>
        <div className='app__profiles'>
          { abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} loading='lazy' />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          )) }
          <div className='app__profile-about'>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              I currently hold the esteemed position of Senior System Software Engineer at NVIDIA Graphics Pvt. Ltd, based in Pune, India. My professional journey has been marked by significant roles at prominent organizations. I previously served as a Senior Associate Software Engineer at J P Morgan Chase & Co. in Bengaluru, where I contributed to impactful projects. I also had the privilege of interning at J P Morgan Chase & Co. in Mumbai, further expanding my experience within the organization.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              During my growth-oriented journey, I gained valuable insights as a Data Analyst Summer Intern at InfoCepts Technologies Pvt. Ltd. in Nagpur, where I honed my analytical skills. My journey also included a Summer Internship at CMC Ltd. in Mumbai, which provided me with hands-on exposure to the industry.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              I am a proud alumnus of BITS Pilani, Rajasthan, India, where I pursued a B.E. (Hons) in Computer Science. My academic journey culminated in an impressive 9.33 CGPA, underscoring my dedication to excellence in education.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              Beyond my professional and academic endeavors, I am an enthusiast of competitive coding. Tackling intricate problems not only stimulates my intellect but also fortifies my problem-solving abilities. My curiosity about emerging technologies is unceasing, motivating me to delve into new realms of innovation and knowledge.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              Artistry is a crucial part of my life, with a penchant for drawing and painting. These creative outlets offer a balance to my technical pursuits and serve as vehicles for self-expression. I am also an avid traveler, fueled by an adventurous spirit that seeks to explore diverse cultures and places, enriching my perspectives.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              Gaming is another facet of my interests, offering an immersive world that fuels my imagination and creativity.
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: 'tween' }}
            >
              In a nutshell, my journey has been a tapestry of academic excellence, professional growth, and personal passions, all contributing to a well-rounded individual committed to continuous learning and enrichment.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, 'app__about'), ABOUT_LINK, 'app__whitebg');
