import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Accomplishments.scss';
import { ACCOMPLISHMENTS_LINK } from '../../constants';
import LeetCode from './LeetCode';

const Accomplishments = () => {

  return (
    <>
      <h2 className='head-text' style={{ marginBottom: '2rem' }}>My <span>Accomplishments</span></h2>
      <LeetCode />
    </>
  );
};

export default AppWrap(MotionWrap(Accomplishments, 'app__accomplishments'), ACCOMPLISHMENTS_LINK, 'app__whitebg');
