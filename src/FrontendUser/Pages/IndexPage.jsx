import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getPropertyList1 } from "../../services/property.service";
import { OptionsPropertyTypeEnum } from '../../../Pages/enums/property.enum';


function IndexPage() {
  
  const [propertList, setPropertyListState] = useState();

  
const [filter, setFilter] = useState({
    propertyType: '',
    property: '',
    priceRange: ''
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

   // Convert enum values to an array of objects for easy mapping
  const OptionsPropertyTypeArray = Object.keys(OptionsPropertyTypeEnum).map(
    (key) => ({
      value: key,
      label: OptionsPropertyTypeEnum[key],
    })
  );

  useEffect(()=> {
          getRecommendedProperties();
          
  }, [])

async function getRecommendedProperties() {
  try {
    const propertyList = await getPropertyList1();
    const data = propertyList.data; // await res.json()
    console.log(data);

    if (data.length) {
      console.log("recommended properties list", data);
      setPropertyListState(data);
      $(function() {

      //############## Banner-Section ###############//
      $('#banner-carasoul').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
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
      });
      //############## Featured Properties ###############//
      $('#properties-sec').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        speed: 1500,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },

            768: {
                items: 2,
            },
            998: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
      });

      //############## About-Us ###############//
      $('#about-carasoul').owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        autoplay: true,
        autoplaySpeed: 2500, // Use `autoplaySpeed` instead of `speed`
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
        }
      });

      function moveCarousel(direction) {
        const carousel = document.querySelector('.carousel');
        const next = direction * carousel.offsetWidth;
        carousel.scrollBy({
          left: 100,
          behavior: 'smooth'
        });
      }
  });
    } else {
      // if (Object.values(data.data).length > 0) {
      //     toast.warn(Object.values(data.data)[0][0])
      // } else {
      //     toast.warn(data.message)
      // }
    }
  } catch (error) {
    console.log(error);
  }
}

  const navigate = useNavigate();

const handleClick = () => {
    navigate("/Buy", { state: filter });
  };


  return (
    <>
    <Navbar />
      <section className="banner">
        <div className="owl-carousel owl-theme" id="banner-carasoul">
          <div className="item">
            <div id="slider" className="sl-slider-wrapper">
              <div className="sl-slider">
                <div>
                  <div
                    className="slider sl-slide"
                    data-orientation="horizontal"
                    data-slice1-rotation="-25"
                    data-slice2-rotation="-25"
                    data-slice1-scale="2"
                    data-slice2-scale="2"
                  >
                    <div className="banner-img bg-img">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="banner-content">
                              <h2 className="banner-head">
                                22 Bed Rooms and 1 Dinning Room Aparment on Sale
                              </h2>
                              <div className="locate">
                                <div className="icon">
                                  <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="add">
                                  1890 Syndey, Australia
                                </div>
                              </div>
                              <p className="banner-cnt">
                                Until he extends the circle of his compassion to
                                all living things, man will not himself find
                                peace.
                              </p>
                              <div className="banner-btn">
                                <button className="dolor-btn">
                                  $ 20,000,000
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img bg-img banner-img1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img banner-img2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider"></div>
            <div className="banner-img banner-img3">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-content">
                      <h2 className="banner-head">
                        2 Bed Rooms and 1 Dinning Room Aparment on Sale
                      </h2>
                      <div className="locate">
                        <div className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="add">1890 Syndey, Australia</div>
                      </div>
                      <p className="banner-cnt">
                        Until he extends the circle of his compassion to all
                        living things, man will not himself find peace.
                      </p>
                      <div className="banner-btn">
                        <button className="dolor-btn">$ 20,000,000</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
        <div className="banner-search">
          <div className="banner-search-back">
            <div className="container">
              <div className="row">
                <div className="search-head">Buy, Sale & Rent</div>
                <div className="col-md-6">
                  <input
                    type="text focus"
                    className="form-input"
                    placeholder="Search of Properties"
                  />
                  <div className="row">
                    <div className="col-xl-3 col-md-4">
                      <select className="form-input" name="property" onChange={handleInputChange}>
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                        <option value="Sale">Sale</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <select className="form-input" name="priceRange" onChange={handleInputChange}>
                        <option value="1">Price</option>
                        <option value="$150,000 - $200,000">$150,000 - $200,000</option>
                        <option value="$200,000 - $250,000">$200,000 - $250,000</option>
                        <option value="$250,000 - $300,000">$250,000 - $300,000</option>
                        <option value="$300,000+">$300,000 - above</option>
                      </select>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      
                      <select className="form-input add-margin " name="propertyType" onChange={handleInputChange}>
                   
                        {OptionsPropertyTypeArray.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}

                      </select>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <button className="find-btn" onClick={handleClick}>
                        {/* <a href="./Buy.html">Find Now</a> */}
                        {/* <Link to= {{
                                pathname: '/Buy',
                                state: { data: 'datwe' }
                              }}> */}
                              Find Now
                            {/* </Link> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="join-now">
                    Join now and get updated with all the properties deals.
                  </p>

                  <button
                    type="button"
                    className="login-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>

                  <div
                    className="modal fade modal-md"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="login-detail">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="login-head">Login</div>
                              <input
                                type="text"
                                className="form-input"
                                placeholder="Enter email"
                              />
                              <input
                                type="password"
                                className="form-input"
                                placeholder="......"
                              />
                              <div className="remember">
                                <input type="checkbox" />
                                <div className="text1">Remember me</div>
                              </div>
                              <button className="sign-in-btn">Sign In</button>
                            </div>
                            <div className="col-lg-6">
                              <div className="user-signup">
                                <div className="login-head">
                                  New User Sign Up
                                </div>
                                <div className="user-para">
                                  Join today and get updated with all the
                                  properties deal happening around.
                                </div>
                                <button className="join-btn">
                                  <a href="./Register.html">Join Now</a>
                                </button>
                              </div>
                            </div>
                          </div>
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
      {/* </div> */}

      <section className="featured-properties">
        <div className="container">
          <div className="featured-head">
            <h2 className="head1">Featured Properties</h2>
            <button className="view-listing">
              <a href="./Buy.html">View All Listing</a>
            </button>
          </div>
          <div className="properties-sec">
            {/* <div className="owl-carousel owl-theme" id="properties-sec"> */}
              {/* <div className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img1.jpg"
                      alt="jio"
                      className="w-100"
                    />
                    <div className="status">New</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">Royal Inn</a>
                  </h4>
                  <p className="price">Price: $234,900</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div> */}
                                            <div className="owl-carousel owl-theme" id="properties-sec">

              {!!propertList && propertList?.map((property) => (

                      <div key={property.id} className="item">
                <div className="properties">
                  <div className="image-holder1">
                    <img
                      src="/Images/Propeties-img1.jpg"
                      alt="jio"
                      className="w-100"
                    />
                    <div className="status">New</div>
                  </div>
                  <h4 className="royal-head">
                    <a href="#">{property.name}</a>
                  </h4>
                  <p className="price">Price: ${property.price}</p>
                  <div className="listing-detail">
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Bed Room"
                    >
                      5<div className="tool">Bed Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Living Room"
                    >
                      2<div className="tool">Living Room</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Parking"
                    >
                      2<div className="tool">Parking</div>
                    </span>
                    <span
                      data-toggle="tooltip"
                      data-placement="bottom"
                      data-original-title="Kitchen"
                    >
                      1<div className="tool">Kitchen</div>
                    </span>
                  </div>
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
                    ))}
                    
                                  </div>


          </div>
        </div>
      </section>
      <section className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-9">
          <div className="about-us-child">
            <h2 className="about-us-head">About Us</h2>
            <div className="about-us-content">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
              interested. Sections
              1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact
              original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
            <div className="learn-more">
              <a href="./About.html">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-3">
          <div className="about-us-child">
            <h2 className="about-us-head mt-left">Recommended Properties</h2>
            <div className="recomend-properties">
                <div className="owl-carousel owl-theme" id="about-carasoul">
                    {!!propertList && propertList.map((property) => (
                      <div key={property.id} className="item">
                        <div className="row">
                          <div className="col-lg-4">
                            <img
                              src="/Images/AboutUs1.jpg"
                              alt=""
                              className="w-100"
                            />
                          </div>
                          <div className="col-lg-8">
                            <p className="Integer1">
                              <a href="#">{property.name}</a>
                            </p>
                            <div className="price">{property.price}</div>
                            <div className="more-details">
                              <a href="./PropertyDetail.html">More Details</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default IndexPage;
