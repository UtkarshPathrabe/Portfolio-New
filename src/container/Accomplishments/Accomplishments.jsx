import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Accomplishments.scss';
import { ACCOMPLISHMENTS_LINK } from '../../constants';

const Accomplishments = () => {

  return (
    <>
      <h2 className='head-text'>My <span>Accomplishments</span></h2>
    </>
  );
};

export default AppWrap(MotionWrap(Accomplishments, 'app__accomplishments'), ACCOMPLISHMENTS_LINK, 'app__whitebg');
