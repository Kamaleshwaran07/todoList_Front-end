import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useActionData } from 'react-router-dom';
import Home from './Components/Home';

import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Contactus from './Components/Contactus';
import Dashboard from './Components/Dashboard';

const App = () => {
  // const baseurl = 'http://localhost:8080/api'
  const baseurl = 'https://todolist-back-end-s33a.onrender.com/api'

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [uniLoading, setUniLoading] = useState(false)
  return (
    <>
      <BrowserRouter>
        <Navbar baseurl={baseurl} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} setUniLoading = {setUniLoading} uniLoading = {uniLoading} />
        <Routes>
          <Route path="/" element={<Home baseurl={baseurl} />} />
          <Route
            path="/signup"
            element={
              <Signup
                baseurl={baseurl}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
        
          <Route path="/contactus" element={<Contactus baseurl={baseurl} />} />
          <Route path="/dashboard" element={<Dashboard baseurl={baseurl} uniLoading = {uniLoading} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;