import React from "react";
import { useNavigate } from 'react-router-dom';


function Footer() {
  //   const url = "http://localhost:8080/"; //import.meta.env.REACT_APP_FIXED_URL
  const navigate=useNavigate()
  
  return (
    <>
      <section className="Footer">
        <div className="footer-child">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-3">
                <h4 className="informatin-head">Information</h4>
                <ul className="footer-link">
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
              </div>
              <div className="col-md-3">
                <h4 className="informatin-head mt-top">Newsletter</h4>
                <p className="news-para">
                  Get notified about the latest properties in our marketplace.
                </p>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Your email address"
                />
                <div className="Notify-btn">Notify Me!</div>
              </div>
              <div className="col-md-3">
                <h4 className="informatin-head mt-top">Follow Us</h4>
                <div className="media-icon">
                  <div className="icon">
                    <a
                      href="https://www.facebook.com/yourPageURL"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="icon">
                    <a
                      href="https://www.instagram.com/yourProfile"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="informatin-head mt-top">Contact Us</h4>
                <div className="contact-para">Bootstrap Realestate Inc.</div>
                <div className="add">
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="cnt">8290 Walk Street, Australia</div>
                </div>
                <div className="add">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="cnt">hello@bootstrapreal.com</div>
                </div>
                <div className="add">
                  <i className="fa-solid fa-phone"></i>
                  <div className="cnt">(123) 456-7890</div>
                </div>
              </div>
            </div>
            <div className="copy-right">
              © Copyright 2024 | Aarya Infosolutions
            </div>
          </div>
        </div>
      </section>
      <div className="whatsup-btn-container">
      <a
        className="whatsup-btn"
        href="https://wa.me/919860317030"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i
      ></a>
      <span>Contact Us</span>
    </div> 
    </>
  );
}

export default Footer;
