import React from 'react'
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cart from './icons/cart.svg';
import line from './icons/Line.svg'

const header = () => {

  return (
      <div className="d-flex justify-content-center ">
      <div className="nav-bar">
      <nav id="navbarNav" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <div className="collapse navbar-collapse d-flex justify-content-around"
        
      >
      <a className="navbar-brand" href="#home"
      >Book World
      </a>
      <a className="" href="#">
          <img src={line} width="25" height="25" className="d-inline-block align-top" alt="" />
        </a>
      {/* <button
        className="navbar-toggler"
        type="button"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#home"
              >Home <span className="sr-only"></span></a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#trending">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#product">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactus">Contact Us</a>
          </li>
        </ul>
        <form id="search-form" className="form-inline">
          <input  className="form-control mr-sm-2" type="search" placeholder="Search Books..." aria-label="Search" />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
        
        <a className="" href="#">
          <img src={cart} width="25" height="25" className="d-inline-block align-top" alt="" />
        </a>
        <ul id='navbar-nav-btn'>
        <button className="navbar-nav-btn btn btn-outline-light my-2 my-sm-0" type='submit'>Sign In</button>
        <button className="navbar-nav-btn btn btn-outline-light my-2 my-sm-0" type='submit'>Sign Up</button>
        </ul>
      </div>
      </nav>
    </div>

  </div>
 
  )
}

export default header
