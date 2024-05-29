import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useActionData } from 'react-router-dom';
import Home from './Components/Home';

import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contactus from './Components/Contactus';
import Dashboard from './Components/Dashboard';

const App = () => {
  const baseurl = 'http://localhost:8080/api'
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Navbar setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <Signup
                baseurl={baseurl}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="/login" element={<Login baseurl={baseurl} />} />
          <Route path="/contactus" element={<Contactus baseurl={baseurl} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;