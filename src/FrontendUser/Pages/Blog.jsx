import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { getBlogList1 } from "../../services/admin-auth.service";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";

function Blog() {
    const [blogList, setBlogListState] = useState([]);
    useEffect(() => {
      $(function() {
        getBlogList();
    });
  }, []);
  
  async function getBlogList() {
    try {
      const blogList = await getBlogList1();
      const data = blogList.data; // await res.json()
      console.log(data);
  
      if (data.length) {
        console.log("blog List", data);
        setBlogListState(data);
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

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <>
    <Navbar />
    <section className="aboutus-sec">
        <div className="about-us-child">
            <div className="container">
                <div className="about-head">

                    <h2>Blogs</h2>
                    <div className="subtitle">
                        <a href="/Index.html">Home</a>
                        <span> / Blogs</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <div className="takeover-market-section">
        <div className="container">
            <div className="takover-market">
                <div className="row">
                    <div className="col-xl-8 col-md-12">
                        {blogList.map((property) => (
                     
                        <div key={property.id} className="market-section">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/Images/market-1.jpg" alt="market-1" className="img-fluid market-img w-100"/>
                                </div>
                                <div className="col-md-8">
                                    <h2 className="creative-bisuness">
                                     <a href="./BlogDetail.html">{property.title}</a>
                                    </h2>
                                    <div className="info">
                                        Posted on: {formatDate(property.createdAt)}
                                    </div>
                                    <p className="content">
                                    {property.content}
                                    </p>
                                    <button className="read-btn">
                                        <a href="./BlogDetail.html">Read More</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}    
                    </div>

                    <div className="col-xl-4 d-none d-xl-block">
                        <div className="tabination-sec">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Recent Post</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Most Popular</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                            {blogList.map((property) => (
                            <div key={property.id} className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabIndex="0">
                                    <h5 className="real-head">{property.title}</h5>
                                    <div className="info">
                                        Posted on: {formatDate(property.createdAt)}
                                    </div>
                                </div>
                                ))} 

                                {/* <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabIndex="0">
                                    <h5 className="real-head">Real estate marketing growing</h5>
                                    <div className="info">
                                        Posted on: Jan 20, 2013
                                    </div>
                                    <h5 className="real-head">Real estate marketing growing</h5>
                                    <div className="info add-bt">
                                        Posted on: Jan 20, 2013
                                    </div>
                                    <h5 className="real-head">Real estate marketing growing</h5>
                                    <div className="info add-bt">
                                        Posted on: Jan 20, 2013
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab" tabIndex="0">
                                    <h5 className="real-head">Market update on new apartments</h5>
                                    <div className="info">
                                        Posted on: Jan 20, 2013
                                    </div>
                                    <h5 className="real-head">Market update on new apartments</h5>
                                    <div className="info add-bt">
                                        Posted on: Jan 20, 2013
                                    </div>
                                    <h5 className="real-head">Market update on new apartments</h5>
                                    <div className="info add-bt">
                                        Posted on: Jan 20, 2013
                                    </div>
                                </div> */}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}

export default Blog;
