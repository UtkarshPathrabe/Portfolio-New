import React from 'react';
import { navDotsLinks } from '../constants';

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
      {navDotsLinks.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={ item + index }
          className="app__navigation-dot"
          style={(active === item) ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
