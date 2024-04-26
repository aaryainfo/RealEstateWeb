import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MapComponent from "../Components/MapComponent";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";
import { createCustomerList } from "../../services/customer.service";


function Contact() {
    const navigate = useNavigate();
    const [fullName, setUserName] = useState('')
    const [email, setUserMail] = useState('')
    const [contact, setUserMobile] = useState('')
    const [message, setUserMessage] = useState('')

    const handleContactUs = async () => {
        if (fullName, email, contact, message) {
          try {
            let formData = new FormData();
            formData.append('fullName', fullName)
            formData.append('email', email)
            formData.append('contact', contact)
            formData.append('message', message)
            
            let payload = {};

      for (const pair of formData.entries()) {
        const key = pair[0];
        const value = pair[1];
        payload[key] = value;
        }
        console.log(payload);    
            const postEnquiryList = await createCustomerList(payload);
            const respo = await postEnquiryList.data;
            if (data) {
                toast.success("Contact created successfully");
                //navigate("/admin-customers");
              } else {
               if (Object.values(respo.data).length > 0) {
                toast.warn(Object.values(respo.data)[0][0])
                } else {
                toast.warn(respo.message)
              }
              }
            } catch (error) {
              console.log(error.message);
            }
        }
        else {
          toast.warn("All Field is Required")
        }
      }

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
                    <a href="#" onClick= {() => navigate(`/user-index`)}>Home</a>
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
                        <input type="text" placeholder="Full Name" className="text-input"
                        value={fullName}
                        onChange={(e) => setUserName(e.target.value)}/>
                        <input type="text" placeholder="Email Address" className="text-input"
                        value={email}
                        onChange={(e) => setUserMail(e.target.value)}/>
                        <input type="text" placeholder="Contact Number" className="text-input"
                        value={contact}
                        onChange={(e) => setUserMobile(e.target.value)}/>
                        <textarea rows="5" className="text-input1" placeholder="Message"
                        value={message}
                        onChange={(e) => setUserMessage(e.target.value)}></textarea>
                        <button className="send-msg" onClick={() => handleContactUs()}>
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
