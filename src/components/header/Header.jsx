import "./header.css";

import cart from './icons/cart.svg';
import line from './icons/Line.svg'

const header = () => {

  return (      
      <nav  className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <div className="nav-grand-parent">

        <div className="nav-parent">
      <div className="collapse navbar-collapse d-flex justify-content-around">
      <a className="navbar-brand" href="#home"
      >Book World
      </a>
      <a className="" href="#">
          <img src={line} width="25" height="25" className="d-inline-block align-top" alt="" />
        </a>
    
      
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
        <div className="search-box-parent">
          <ul>
          <form className="form-inline search-box">
          <input  className="form-control my-3 my-sm-2" type="search" placeholder="Search Books..." aria-label="Search" />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
          </ul>
        </div>
       </div>
        <div className="nav-cart">
        <a  href="#">
          <img src={cart} width="25" height="25" className="d-inline-block align-top" alt="" />
        </a>
        </div>
        <div id='navbar-nav-btn'>
       
        <button className="navbar-nav-btn btn btn-outline-light my-2 my-sm-0" type='submit'>Sign In</button>
        <button className="navbar-nav-btn btn btn-outline-light my-2 my-sm-0" type='submit'>Sign Up</button>
      </div>
     

  </div>
  </div>
  </nav>
  )
}

export default header
