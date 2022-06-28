import React from 'react';
import { LoginContext } from './pages/ContextDemo/createContext';
import Home from './pages/ContextDemo/Home';
function AppContext() {
  return (
    <LoginContext.Provider value={false}>
      <Home></Home>
    </LoginContext.Provider>
  );
}

export default AppContext;
