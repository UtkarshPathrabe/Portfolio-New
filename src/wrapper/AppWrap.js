import React, { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { OnScreenContext } from '../context';

const AppWrap = (Component, idName, classNames) => function HOC() {

  const { ref, inView } = useInView({ threshold: 0.1, });
  const { setInView } = useContext(OnScreenContext);

  useEffect(() => {
    if (inView) {
      setInView(idName);
    }
  }, [inView, setInView]);

  return (<section id={idName} className={`app__container ${classNames}`}>
    <div className='app__wrapper app__flex' ref={ref}>
      <Component />
      <div className='copyright'>
        <p className='p-text'>ⓒ Utkarsh Pathrabe</p>
        <p className='p-text'>All rights reserved</p>
      </div>
    </div>
  </section>);
};

export default AppWrap;
