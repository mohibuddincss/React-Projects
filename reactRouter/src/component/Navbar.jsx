import React from 'react';
// import { Link } from 'react-router';
// function Navbar() {
//   return (
//     <div>
//           <nav>
//               <Link to={"/"}> Home </Link>
//               <Link to={"/about"} >About</Link>
//               <Link to={"/contact"} >Contact</Link>
//               <Link to={"/services"} >Services</Link>
//           </nav>
//     </div>
//   )
// }

// export default Navbar

import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar">
      <h1>MyApp</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;