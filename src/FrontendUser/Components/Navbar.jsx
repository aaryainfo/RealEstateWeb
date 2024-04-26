import React from "react";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  //   const url = "http://localhost:8080/"; //import.meta.env.REACT_APP_FIXED_URL
  const navigate=useNavigate()

  return (
    <>
      <header className="">
        <div className="first-header">
          <div className="container">
            <div className="header-child">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="navbar" id="headDiv1">
                    <ul className="menu-list">
                      <li>
                      <a href="#" onClick= {() => navigate(`/user-index`)}>Home</a>
                      </li>
                      <li>
                      <a href="#" onClick= {() => navigate(`/About`)}>About</a>
                      </li>
                      <li>
                      <a href="#" onClick= {() => navigate(`/Agents`)}>Agents</a> 
                      </li>
                      <li>
                        <a href="#" onClick= {() => navigate(`/Blog`)}>Blog</a>
                      </li>
                      <li>
                        <a href="#" onClick= {() => navigate(`/Contact`)}>Contact</a>
                      </li>
                    </ul>
                    <div className="MobileMenuBar1 new-menubar">
                      <span className="material-symbols-outlined cross  addToggler ">
                        <i className="fa-solid fa-bars"></i>
                      </span>
                    </div>
                    <div className="MobileNewMenuList">
                      <ul className="menu-list">
                      <li>
                      <a href="#" onClick= {() => navigate(`/user-index`)}>Home</a>
                      </li>
                      <li>
                      <a href="#" onClick= {() => navigate(`/About`)}>About</a>
                      </li>
                      <li>
                      <a href="#" onClick= {() => navigate(`/Agents`)}>Agents</a> 
                      </li>
                      <li>
                        <a href="#" onClick= {() => navigate(`/Blog`)}>Blog</a>
                      </li>
                      <li>
                        <a href="#" onClick= {() => navigate(`/Contact`)}>Contact</a>
                      </li>
                      </ul>
                      <div className="MobileMenuBar removeToggler">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="mainlogo header-img">
                  <a href="./Index.html">
                    <img src="../Images/Header-logo.png" alt="Header-logo" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pull-right">
                  <ul className="header-child-list">
                    <li>
                    <a href="#" onClick= {() => navigate(`/Buy`)}>BUY</a>
                    </li>
                    <li>
                      <a href="./Buy.html">SALE</a>
                    </li>
                    <li>
                      <a href="./Buy.html"> RENT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
