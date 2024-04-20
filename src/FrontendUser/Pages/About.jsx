import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";

function About() {
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

          <h2>About Us</h2>
          <div className="subtitle">
            <a href="/Index.html">Home</a>
            <span> / About-Us</span>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section className="business-background">
    <div className="container">
      <div className="bisuness-back-child">
        <div className="row">
          <div className="col-xl-2">
            
          </div>
          <div className="col-xl-8">
            <div className="img-cnt">
              <img src="Images/about-img.jpg" alt="about-img" className="w-100 ab-img"/>
              <h3 className="bisunesse-head">Business Background</h3>
              <p className="bisuness-para">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              <h3 className="bisunesse-head add-css">Company Profile</h3>
              <p className="bisuness-para">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical
                literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem
                Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              <p className="bisuness-para">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
                Rackham.</p>
            </div>
          </div>
          <div className="col-xl-2">
            
          </div>
        </div>
      </div>
    </div>
  </section>

    <Footer />
    </>
  );
}

export default About;
