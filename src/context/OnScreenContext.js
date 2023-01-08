import { createContext, useState } from 'react';

export const OnScreenContext = createContext();

const OnScreenProvider = ({ children }) => {
  const [inView, setInView] = useState('');
  return (<OnScreenContext.Provider value={ { inView, setInView } }>
    { children }
  </OnScreenContext.Provider>);
};

export default OnScreenProvider;
