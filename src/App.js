import React, { useContext } from 'react';

import { About, Footer, Header, Skills, Certificates, Work, Paintings, Accomplishments } from './container';
import { Navbar, NavigationDots, SocialMedia } from './components';
import './App.scss';
import { OnScreenContext } from './context';

const App = () => {
  const { inView } = useContext(OnScreenContext);

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
      <Accomplishments />
      <Paintings />
      <Footer />
      <SocialMedia />
      <NavigationDots active={inView} />
    </div>
  );
};

export default App;
