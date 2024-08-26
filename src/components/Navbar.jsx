import React from 'react';
import logo from '../logo/logo.jpg'
import '../css/navbar.css'


const Navbar = () => {
  return (
<>
<nav className="navbar">
  <div className="container-fluid">
    <div className="image-container " >
    <img src={logo} alt="" className="logo rounded-circle" />
    </div>
  
    <div className="d-flex m-2" role="search">
  <div className="nav-items mr-2">Home</div>
  <div className="nav-items mr-5">Services</div>
  <div className="nav-items mr-5">About</div>
  <div className="nav-items mr-5">Contact</div>
</div>
  </div>
</nav>

</>
  )
}

export default Navbar
