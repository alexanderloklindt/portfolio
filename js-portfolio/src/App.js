import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import AnimatedRoutes from './components/AnimatedRoutes';

import './App.css';

import Navbar from './components/NavBar';


function App() {
  return (
    <div>
      <AuthContextProvider>
            <Navbar />
            <AnimatedRoutes/>
      </AuthContextProvider>
    </div>
  );
}

export default App;