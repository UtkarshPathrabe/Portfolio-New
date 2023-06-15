import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Gallery from "react-photo-gallery";

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Paintings.scss';
import { PAINTINGS_LINK } from '../../constants';

const Paintings = () => {

  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const query = '*[_type == "paintings"] | order(rank asc)';
    client.fetch(query)
      .then((data) => {
        const formattedData = data.map(d => ({
          height: d.height,
          width: d.width,
          src: urlFor(d.imgUrl),
          alt: d.name,
          key: d.name,
        }));
        setPaintings(formattedData)
      });
  }, []);

  return (
    <>
      <h2 className='head-text' style={{ marginBottom: '2rem' }}>My aesthetic <span>paintings</span></h2>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Gallery photos={paintings} />
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Paintings, 'app__paintings'), PAINTINGS_LINK, 'app__primarybg');
