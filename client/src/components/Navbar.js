import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
