import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";
import { createWebuserList } from "../../services/webuser.service";
//../src/services/customer.service";


function Register() {
    const navigate = useNavigate();
   
  // add Register states
    const [fullName, setUserName] = useState('')
    const [userEmail, setUserMail] = useState('')
    const [contact, setUserMobile] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmPassword, setUserConfirmPassword] = useState('')
    const [userAddress, setUserAddress] = useState('')
    
    const handelUserSignUp = async () => {
        if (fullName, userEmail, contact, userPassword, userConfirmPassword,userAddress) {
          try {
            let formData = new FormData();
            formData.append('fullName', fullName)
            formData.append('email', userEmail)
            formData.append('contact', contact)
            formData.append('password', userPassword)
            formData.append('address', userAddress)
            
            let payload = {};

      for (const pair of formData.entries()) {
        const key = pair[0];
        const value = pair[1];
        payload[key] = value;
        }
        console.log(payload);    
            const customerList = await createWebuserList(payload);
            const respo = await customerList.data;
            if (data) {
                toast.success("Registered Successfully");
                localStorage.setItem('UserToken', respo.data.token)
                localStorage.setItem('UserEmailorMobile', userEmail)
                //navigate("/admin-customers");
              } else {
               if (Object.values(respo.data).length > 0) {
                toast.warn(Object.values(respo.data)[0][0])
                } else {
                toast.warn(respo.message)
              }
              setUserConfirmPassword('')
              setUserPassword('')
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
                    <h2>Register</h2>
                    <div className="subtitle">
                        <a href="./Index.html">Home</a>
                        <span> / Register</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="business-background">
        <div className="container">
            <div className="bisuness-back-child">
                <div className="row">
                    <div className="col-xl-3 col-md-1"></div>
                    <div className="col-xl-6 col-md-10">
                        <div className="rigester-form">
                            <input value={fullName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className="form-input"
                        placeholder="Full Name*"/>

                            <input value={userEmail}
                        onChange={(e) => setUserMail(e.target.value)}
                        type="text"
                        className="form-input"
                        placeholder="Enter Email"/>
                            <input value={contact}
                        onChange={(e) => setUserMobile(e.target.value)}
                        type="text"
                        className="form-input"
                        placeholder="Mobile"/>
                        <input value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        type="password"
                        className="form-input"
                        placeholder="Password*"/>
                        
                        <input value={userConfirmPassword}
                        onChange={(e) => setUserConfirmPassword(e.target.value)}
                        type="password"
                        className="form-input"
                        placeholder="Confirm Password*"/>
                        
                        <textarea className="form-input add-height" placeholder="Address" cols="40" rows="6" 
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value) }></textarea>
                        <button className="register-btn" onClick={() => handelUserSignUp()}>Register</button>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-1"></div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}

export default Register;
