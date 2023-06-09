import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

import { HOME_LINK, images, navLinks } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href={`#${HOME_LINK}`}><img src={images.logo} alt='logo' /></a>
      </div>
      <ul className='app__navbar-links'>
        {navLinks.map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <HashLink smooth to={`#${item}`}>{item}</HashLink>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        { toggle ? (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item) => (
                <li key={`${item}`}>
                  <HashLink smooth to={`#${item}`} onClick={() => setToggle(false)}>{item}</HashLink>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null }
      </div>
    </nav>
  );
};

export default Navbar;
