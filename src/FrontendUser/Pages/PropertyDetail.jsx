import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyDetailMap from "../Components/PropertyDetailMap";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";
import { createEnquiryList } from "../../services/enquiry.service";
import { getPropertyWithId } from "../../services/property.service";
import { useLocation, useNavigate,useParams } from "react-router-dom";

function PropertyDetail() {
const navigate = useNavigate();    
const { id } = useParams();
//Property Details State
const [propertyName, setPropertyName] = useState("");
const [propertyDetails, setPropertyDetails] = useState("");
const [propertyPrice, setPropertyPrice] = useState("");
const [propertyAddress, setPropertyAddress] = useState("");

const getPropertyDetails = async () => {
    try {
        let payload = {};
        const key = "id";
        const value = id;
        payload[key] = value;
        const propertyDetails = await getPropertyWithId(payload);
        const respo = await propertyDetails;
        if (respo) {
            setPropertyName(respo.data.name);
            setPropertyDetails(respo.data.details);
            setPropertyPrice(respo.data.price);
            setPropertyAddress(respo.data.address);
      
      } else {
        if (Object.values(respo.data).length > 0) {
          toast.warn(Object.values(respo.data)[0][0]);
        } else {
          toast.warn(respo.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

//############## PropertiesDetails ###############//
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    },
    autoplayTimeout: 5000, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on mouse hover
})


    const [fullName, setUserName] = useState('')
    const [email, setUserMail] = useState('')
    const [contact, setUserMobile] = useState('')
    const [message, setUserMessage] = useState('')
    //const navigate = useNavigate()
    //const location = useLocation()

    const handlePostEnquiry = async () => {
        console.log(location, 'location');
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
            const postEnquiryList = await createEnquiryList(payload);
            const respo = await postEnquiryList.data;
            if (respo) {
                toast.success("Enquiry submitted successfully");
                //navigate(location.pathname);
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
        getPropertyDetails();
      }, [id]);

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

                    <h2>Buy</h2>
                    <div className="subtitle">
                    <a href="#" onClick= {() => navigate(`/user-index`)}>Home</a>
                        <span> / Buy</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <section className="properties-details">
        <div className="container">
            <div className="row gy-4 ">
                <div className="col-lg-3 col-md-4">
                    <div className="hot-properties-sec">
                        <div className="search-head">
                            <div className="search"> Hot Properties</div>
                        </div>
                        <div className="properits-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="img1">
                                        <img className="img-fluid" src="/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="propertis-detail">
                                        <h3 className=" detail-head">Integer sed porta quam</h3>
                                        <div className="price">
                                            $300,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="properits-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="img1">
                                        <img className="img-fluid" src="/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="propertis-detail">
                                        <h3 className=" detail-head">Integer sed porta quam</h3>
                                        <div className="price">
                                            $300,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="properits-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="img1">
                                        <img className="img-fluid" src="/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-7">
                                    <div className="propertis-detail">
                                        <h3 className=" detail-head">Integer sed porta quam</h3>
                                        <div className="price">
                                            $300,000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="advertisement-sec">
                        <div className="search-head">
                            <div className="search"> Advertisements</div>
                        </div>
                        <div className="adevertise-img">
                            <img className="img-fluid" src="/Images/advertisements.jpg" alt="advertisements"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8">
                    <h2 className="properti-heading">{propertyName}</h2>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                             <div className="properties-imgs">
                              
                                <div className="owl-carousel owl-theme carousel">

                                    <div className="item">
                                        <img className="proper-img" src="/Images/Propeties-img1.jpg" alt="Propeties-img1"/>
                                    </div>
                                    <div className="item">
                                        <img className="proper-img" src="/Images/Propeties-img2.jpg" alt="Propeties-img2"/>
                                    </div>
                                    <div className="item">
                                        <img className="proper-img" src="/Images/Propeties-img3.jpg" alt="Propeties-img3"/>
                                    </div>
                                    <div className="item">
                                        <img className="proper-img" src="/Images/Propeties-img4.jpg" alt="Propeties-img4"/>
                                    </div>
                                    
                                </div>
                               
                            </div> 
                       
                            <div className="properties-cnt">
                                <div className="search-head">
                                    <i className="fa-solid fa-list"></i>
                                    <div className="search"> Properties Detail</div>
                                </div>
                                <p className="content">
                                {propertyDetails}
                                </p>
                                <div className="search-head">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="search"> Location</div>
                                </div>
                                <div className="well">
                                 <PropertyDetailMap/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="row add-margin">
                            <div className="col-xl-12 col-sm-6">
                                <div className="doller-sec">
                                    <h4 className="doller">{propertyPrice}</h4>
                                    <div className="area">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {propertyAddress}
                                    </div>
                                </div>
                                <div className="agents-details">
                                    <div className="area">
                                        <i className="fa-solid fa-user-large"></i>
                                        Agent Details
                                    </div>
                                    <p className="name">John Parker<br />
                                        009 229 2929</p>
                                </div>
                                <div className="availabilty-sec">
                                    <div className="area">
                                        <i className="fa-solid fa-house"></i>
                                        Availabilty
                                    </div>
                                    <div className="listing-detail">
                                        <span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5
                                            <div className="tool">
                                                Bed Room
                                            </div>
                                        </span>
                                        <span data-toggle="tooltip" data-placement="bottom"
                                            data-original-title="Living Room">2
                                            <div className="tool">
                                                Living Room
                                            </div>
                                        </span>
                                        <span data-toggle="tooltip" data-placement="bottom" data-original-title="Parking">2
                                            <div className="tool">
                                                Parking
                                            </div>
                                        </span>
                                        <span data-toggle="tooltip" data-placement="bottom" data-original-title="Kitchen">1
                                            <div className="tool">
                                                Kitchen
                                            </div>
                                        </span>
                                    </div>
                                </div>
                               </div>
                               <div className="col-xl-12 col-sm-6">
                                <div className="post-inquiry">
                                    <div className="area">
                                        <i className="fa-solid fa-envelope"></i>
                                        Post Enquiry
                                    </div>
                                    <div className="equiry-form">
                                        <input type="text" className="form-input" placeholder="Full Name"
                                        value={fullName}
                                        onChange={(e) => setUserName(e.target.value)}/>
                                        <input type="text" className="form-input" placeholder="you@yourdomain.com"
                                        value={email}
                                        onChange={(e) => setUserMail(e.target.value)}/>
                                        <input type="text" className="form-input" placeholder="your number"
                                        value={contact}
                                        onChange={(e) => setUserMobile(e.target.value)}/>
                                        <textarea name="" id="" cols="0" rows="5" className="form-input"
                                            placeholder="Whats on your mind?"
                                            value={message}
                                        onChange={(e) => setUserMessage(e.target.value)}></textarea>
                                            <button className="msg-btn" onClick={() => handlePostEnquiry()}>Send Message</button>
                                    </div>
                                </div>
                               </div>
                          </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
  );
}

export default PropertyDetail;
