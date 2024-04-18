import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";

function Agents() {
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

                    <h2>Agents</h2>
                    <div className="subtitle">
                        <a href="/Index.html">Home</a>
                        <span> / Agents</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="agents">
        <div className="container">
            <div className="agents-child">
                <div className="row">
                    <div className="col-xl-2 col-md-0 ">

                    </div>
                    <div className="col-xl-8 col-md-12">
                        <div className="row gx-5 ad-bottom">
                            <div className="col-md-9">
                                <div className="agent1">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3">
                                            <img src="/Images/agent-1.jpg" alt="agent-1" className="img-fluid"/>
                                        </div>
                                        <div className="col-md-9 col-sm-3">
                                            <div className="name">
                                                <h4>John Smith</h4>
                                                <p className="cnt">Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C users after
                                                    installed base benefits. Dramatically visualize customer directed
                                                    convergence without revolutionary ROI.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mail-box">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>abc@aaryainfosolutions.com</p>
                                </div>
                                <div className="mail-box">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="fn-color"> (9009) 899 889</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 ad-bottom">
                            <div className="col-md-9">
                                <div className="agent1">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src="/Images/agent-2.jpg" alt="agent-2" className="img-fluid"/>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="name">
                                                <h4>John Smith</h4>
                                                <p className="cnt">Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C users after
                                                    installed base benefits. Dramatically visualize customer directed
                                                    convergence without revolutionary ROI.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mail-box">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>abc@aaryainfosolutions.com</p>
                                </div>
                                <div className="mail-box">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="fn-color"> (9009) 899 889</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 ad-bottom">
                            <div className="col-md-9">
                                <div className="agent1">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src="/Images/agent-3.jpg" alt="agent-3" className="img-fluid"/>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="name">
                                                <h4>John Smith</h4>
                                                <p className="cnt">Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C users after
                                                    installed base benefits. Dramatically visualize customer directed
                                                    convergence without revolutionary ROI.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mail-box">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>abc@aaryainfosolutions.com</p>
                                </div>
                                <div className="mail-box">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="fn-color"> (9009) 899 889</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 ad-bottom">
                            <div className="col-md-9">
                                <div className="agent1">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src="/Images/agent-4.jpg" alt="agent-4" className="img-fluid"/>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="name">
                                                <h4>John Smith</h4>
                                                <p className="cnt">Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C users after
                                                    installed base benefits. Dramatically visualize customer directed
                                                    convergence without revolutionary ROI.</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mail-box">
                                    <i className="fa-solid fa-envelope"></i>
                                    <p>abc@aaryainfosolutions.com</p>
                                </div>
                                <div className="mail-box">
                                    <i className="fa-solid fa-phone"></i>
                                    <p className="fn-color"> (9009) 899 889</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-0">

                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  );
}

export default Agents;
