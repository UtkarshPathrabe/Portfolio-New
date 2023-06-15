import React, { useContext } from 'react';

import { Header } from './container';
import { Navbar, NavigationDots, SocialMedia } from './components';
import './App.scss';
import { OnScreenContext } from './context';

const About = React.lazy(() => import('./container/About/About'));
const Work = React.lazy(() => import('./container/Work/Work'));
const Skills = React.lazy(() => import('./container/Skills/Skills'));
const Certificates = React.lazy(() => import('./container/Certificates/Certificates'));
const Accomplishments = React.lazy(() => import('./container/Accomplishments/Accomplishments'));
const Paintings = React.lazy(() => import('./container/Paintings/Paintings'));
const Footer = React.lazy(() => import('./container/Footer/Footer'));

const App = () => {
  const { inView } = useContext(OnScreenContext);

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <React.Suspense fallback={<>Loading</>}>
        <About />
        <Work />
        <Skills />
        <Certificates />
        <Accomplishments />
        <Paintings />
        <Footer />
      </React.Suspense>
      <SocialMedia />
      <NavigationDots active={inView} />
    </div>
  );
};

export default App;
