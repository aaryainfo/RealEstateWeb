import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MapComponent from "../Pages/MapComponent";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";


function Contact() {
    useEffect(() => {
      $(function() {
  });
  }, []);
  
  return (
    <>
    <Navbar />
    <section className="aboutus-sec">
        <div className="about-us-child">
            <div className="container">
                <div className="about-head">

                    <h2>Contact Us</h2>
                    <div className="subtitle">
                        <a href="./Index.html">Home</a>
                        <span> / Contact Us</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className="form-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-child">
                        <input type="text" placeholder="Full Name" className="text-input"/>
                        <input type="text" placeholder="Email Address" className="text-input"/>
                        <input type="text" placeholder="Contact Number" className="text-input"/>
                        <textarea rows="5" className="text-input1" placeholder="Message"></textarea>
                        <button className="send-msg">
                            Send Message
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="map-section">
                        <MapComponent/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
