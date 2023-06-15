import React from 'react';
import { HashLink } from 'react-router-hash-link';

import { navDotsLinks } from '../constants';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {navDotsLinks.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <HashLink
          smooth
          to={`#${item}`}
          key={ item + index }
          className="app__navigation-dot"
          style={(active === item) ? { backgroundColor: '#313BAC' } : {}}
          title={item}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
