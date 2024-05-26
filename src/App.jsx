import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Contactus from './Components/Contactus';

const App = () => {
  const baseurl = 'http://localhost:8080/api'


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup baseurl ={baseurl} />} />
          <Route path="/login" element={<Login baseurl ={baseurl} />} />
          <Route path="/contactus" element={<Contactus baseurl ={baseurl} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;