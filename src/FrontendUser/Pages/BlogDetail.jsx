import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";
import {getBlogList1, getBlogWithId } from "../../services/admin-auth.service";
import {useParams } from "react-router-dom";

function BlogDetail() {
const [blogList, setBlogListState] = useState([]);
const navigate = useNavigate();        
const { id } = useParams();
//Property Details State
const [blogTitle, setBlogTitle] = useState("");
const [blogContent, setBlogContent] = useState("");
const [blogCreateAt, setBlogCreatedAt] = useState("");

const getBlogDetails = async () => {
    try {
        let payload = {};
        const key = "id";
        const value = id;
        payload[key] = value;
        const blogDetails = await getBlogWithId(payload);
        const respo = await blogDetails;
        if (respo) {
            setBlogTitle(respo.data.title);
            setBlogContent(respo.data.content);
            setBlogCreatedAt(respo.data.createdAt);
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

  const getBlogList = async () => {
    try {
      const blogList = await getBlogList1();
      const data = blogList.data; // await res.json()
      console.log(data);
  
      if (data.length) {
        console.log("blog List", data);
        setBlogListState(data);
      } else {
        if (Object.values(data.data).length > 0) {
            toast.warn(Object.values(data.data)[0][0])
        } else {
            toast.warn(data.message)
        }
      }
    } catch (error) {
      console.log(error);
    }
}

useEffect(() => {
    getBlogList();
    getBlogDetails();
      }, [id]);

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
          <a href="#" onClick= {() => navigate(`/user-index`)}>Home</a>
            <span> / Blogs</span>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section className="blog-details-section">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-12">
          <div className="creative-bisuness-sec">
            <h4 className="heading-1">{blogTitle}</h4>
            <div className="info">
              Posted on: {formatDate(blogCreateAt)}
            </div>
            <img className="img-fluid img1" src="/Images/Blog1.jpg" alt="Blog1"/>
            <p className="detail-para">{blogContent}</p>
          </div>
        </div>
        <div className="col-xl-4">
         <div className="blog-detail-tabination">
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
        {blogList.map((item) => (
                            <div key={item.id} className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab" tabIndex="0">
                                    <h5 className="real-head">{item.title}</h5>
                                    <div className="info">
                                        Posted on: {formatDate(item.createdAt)}
                                    </div>
                                </div>
                                ))} 


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

export default BlogDetail;
