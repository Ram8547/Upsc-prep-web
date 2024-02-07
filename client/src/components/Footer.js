import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const {pathname}  = location;

  let isFixed = false;
  switch (pathname) {
    case '/':
    case '/contact':
      isFixed = true;
      break;
  
    default:
      break;
  }

  const getCurrentPathWithoutLastPart = () => {
    return location.pathname.slice(0, location.pathname.lastIndexOf('/'))
  }

  if(getCurrentPathWithoutLastPart() === "/course") isFixed = true;
  return (
    <footer className={isFixed ? "fixed-footer" : ""}>
    <p>&copy; {new Date().getFullYear()} UPSC Exam Prep. All rights reserved.</p>
  </footer>
  )
}

export default Footer
