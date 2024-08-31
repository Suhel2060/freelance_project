import React from 'react';
import logo from '../../logo/logo.jpg'
import '../../css/navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
<>
 {/* <nav className="navbar">
  <div className="container-fluid">
    <div className="image-container " >
    <img src={logo} alt="" className="logo rounded-circle" />
    </div>
  
    <div className="d-flex m-2" role="search">
  <Link className="nav-items mr-2" to="/">Home</Link>
  <Link className="nav-items mr-5" to="/service">Services</Link>
  <Link className="nav-items mr-5" to="/about">About</Link>
  <Link className="nav-items mr-5" to="/contact">Contact</Link>
</div>
  </div>
</nav>  */}

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"> <img src={logo} alt="" className="logo rounded-circle" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" style={{position:'absolute',right:'20px'}}> <span class="navbar-toggler-icon"></span></button>
   
    <div class="navbar-lg float-end" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-items" to="/">HOME</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-items" to="/service">SERVICES</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-items" to="/about">ABOUT</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-items" to="/contact">CONTACT</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>




<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div class="offcanvas-header">
  <a class="navbar-brand" href="/"> <img src={logo} alt="" className="logo rounded-circle" /></a>
    <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close" ></button>
  </div>
  <div class="offcanvas-body">
  <ul class="">
        <li>
        <Link className="nav-link" to="/">HOME</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/service">SERVICES</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/about">ABOUT</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contact">CONTACT</Link>
        </li>
       
      </ul>
  </div>
</div>
</>
  )
}

export default Navbar
