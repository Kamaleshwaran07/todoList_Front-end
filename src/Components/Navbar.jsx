import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader.jsx'
// import ToastContainer from './ToastContainer.jsx'

const Navbar = ({isAuthenticated, setIsAuthenticated, baseurl, setUniLoading, uniLoading}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [activeindex, setactiveindex] = useState(null);
 
  const navigate = useNavigate()
  const handleItemClick = (index) => {
    setactiveindex(index);
  };
  const token = document.cookie
  const clearCookie = (token) => {
    document.cookie = `${token}=; Max-Age=0; path=/;`;
  };
  
  const handleLogout = async () =>{
    try {
      
    const response = await axios.post(`${baseurl}/logout`);
    toast.success(response.data.message)
    setIsAuthenticated(false);
    setUniLoading(true)
    clearCookie(token)
    setTimeout(() => {
      setUniLoading(false)
      navigate('/signup')
    }, 1500);
    } catch (error) {
      toast.error(error.response.data.message)
    }

  }

  return (
    <div>

  { uniLoading ? 
  <>
  <Loader /> 
  </>
  : 
  <>
    <nav className="flex h-[3rem] text-[#f62f61] flex-row pl-0 pr-2 items-center">
        <Toaster />
      <div className="">
        <a href="/" className="text-2xl ms-4 font-bold text-decoration uppercase">TodoLoo</a>
      </div>
      <ul className="ms-auto flex mt-[.5em] font-semibold uppercase text-center ">
      {token 
      ? 
        <NavItem
          index={0}
          activeindex={activeindex}
          onClick={handleItemClick}
          to="/dashboard"
          className="list"
        >
         Dashboard
        </NavItem>
        :
      <NavItem
          index={0}
          activeindex={activeindex}
          onClick={handleItemClick}
          to="/signup"
          className="list"
        >
          Sign Up
        </NavItem>
     
      }
        
        <NavItem
          index={1}
          activeindex={activeindex}
          onClick={handleItemClick}
          to="/contactus"
          className="list"
        >
          Contact Us
        </NavItem>

        
       
         <button
         index={2}
         activeindex={activeindex}
         onClick={handleLogout}
         
         className={token  ? "flex btn h-9 w-32 pt-1 pl-4 mt-1 text-lg bg-papaya text-orange1 font-bold uppercase hover:bg-orange1 hover:text-papaya" : "hidden"}
       >
         Logout
         <i className="ms-2 fi fi-rr-exit"></i>
       </button>
       
      </ul>
    </nav>

  </>
  }
    </div>
  );
}

const NavItem = ({ index, activeindex, onClick, to, children }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <li
      // id={index === activeindex ? "Active px-2" : null}
      onClick={handleClick}
    >
      <NavLink
        id={index === activeindex ? "Active" : null}
        className="list"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
