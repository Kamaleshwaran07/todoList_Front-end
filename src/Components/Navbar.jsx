import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="flex h-[3rem] text-[#f62f61] flex-row px-3 items-center">
      <div className="">
        <a href="/" className="text-2xl font-bold text-decoration uppercase">TodoLoo</a>
      </div>
      <ul className="ms-auto flex mt-[.5em] font-semibold uppercase text-center ">
        <NavItem
          index={0}
          activeIndex={activeIndex}
          onClick={handleItemClick}
          to="/contactus"
          className="list"
        >
          Contact Us
        </NavItem>

        <NavItem
          index={1}
          activeIndex={activeIndex}
          onClick={handleItemClick}
          to="/signup"
          className="list"
        >
          Sign Up
        </NavItem>

        <NavItem
          index={2}
          activeIndex={activeIndex}
          onClick={handleItemClick}
          to="/login"
          className="list"
        >
          Login
        </NavItem>
      </ul>
    </nav>
  );
};

const NavItem = ({ index, activeIndex, onClick, to, children }) => {
  const handleClick = () => {
    onClick(index);
  };

  return (
    <li
      // id={index === activeIndex ? "Active px-2" : null}
      onClick={handleClick}
    >
      <NavLink
        id={index === activeIndex ? "Active" : null}
        className="list"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
