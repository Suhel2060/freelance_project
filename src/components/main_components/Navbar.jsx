import React, { useEffect } from 'react';
import logo from '../../logo/logo.jpg'
import '../../css/navbar.css'
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location=useLocation();
  useEffect(()=>{
switch(location.pathname){
  case "/":
    document.title="bidurengineering";
    break;
  case "/service":
    document.title="Services - bidurengineering";
    break;
  case "/about":
    document.title="About - bidurengineering";
    break;
  case "/contact":
    document.title="Contact - bidurengineering";
    break;
    default:

}
  }
)
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

<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <img src={logo} alt="" className="logo rounded-circle" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive" style={{position:'absolute',right:'20px'}}> <span className="navbar-toggler-icon"></span></button>
   
    <div className="navbar-lg float-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`nav-items ${location.pathname === "/" ? "active" : ""}`}   to="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-items ${location.pathname === "/service" ? "active" : ""}`}  to="/service">SERVICES</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-items ${location.pathname === "/about" ? "active" : ""}`}  to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-items ${location.pathname === "/contact" ? "active" : ""}`}  to="/contact">CONTACT</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>




<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div className="offcanvas-header">
  <a className="navbar-brand" href="/"> <img src={logo} alt="" className="logo rounded-circle" /></a>
    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close" ></button>
  </div>
  <div className="offcanvas-body">
  <ul className="">
        <li>
        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">HOME</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/service" ? "active" : ""}`} to="/service">SERVICES</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">CONTACT</Link>
        </li>
       
      </ul>
  </div>
</div>
</>
  )
}

export default Navbar
