import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader.jsx'
import burger from "../assets/ui.png"
// import ToastContainer from './ToastContainer.jsx'

const Navbar = ({isAuthenticated, setIsAuthenticated, baseurl, setUniLoading, uniLoading}) => {

  const [isLoading, setIsLoading] = useState(false)
  const [activeindex, setactiveindex] = useState(null);
 const [isOpen, setIsOpen] = useState(false)
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
const handleClick = () =>{
  setIsOpen(!isOpen)
}
  return (
    <div>

  { uniLoading ? 
  <>
  <Loader /> 
  </>
  : 
  <>
    <nav className="max-xl:hidden flex h-[3rem] text-[#f62f61] flex-row pl-0 pr-2 items-center">
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
    <nav className="flex xl:hidden h-[3rem] text-[#f62f61] flex-row pl-0 pr-2 items-center">
        <Toaster />
      <div className="">
        <a href="/" className="text-2xl ms-4 font-bold text-decoration uppercase">TodoLoo</a>
      </div>
      <button type="button" className="ms-auto me-2" onClick={handleClick}><img src={burger} className="w-8 " /></button>
      <ul className={isOpen ? "ms-auto flex flex-col absolute translate-x-[17rem] md:translate-x-[38rem] lg:translate-x-[54rem] z-10 bg-white w-[10em] h-[10em] mt-[13.5em] md:mt-[13em] md:pt-3 pt-3 rounded-lg items-center font-semibold uppercase text-center transition-transform duration-600" : "translate-x-[27rem] md:translate-x-[48rem] lg:translate-x-[64rem] mt-[13.5em] md:[13em] transition-transform duration-500 flex flex-col h-[10em] justify-center z-10 ms-auto -pt-[2rem] w-[10em] bg-white text-center absolute items-center"}>
        
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
