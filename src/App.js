import React from 'react';

import { About, Footer, Header, Skills, Certificates, Work, Paintings, Accomplishments } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
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
    </div>
  );
};

export default App;
