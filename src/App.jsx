import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ReadyProducts from "../Pages/ReadyProducts";
import ArtStudio from "../Pages/ArtStudio";
import ArtstuTwo from "../Pages/ArtstuTwo";
import ArtstuThree from "../Pages/ArtstuThree";
import ArtstuFour from "../Pages/ArtstuFour";
import ArtsFourA from "../Pages/ArtsFourA";
import CareerPageA from "../Pages/CareerPageA";
import CareerPageB from "../Pages/CareerPageB";
import CareerPageC from "../Pages/CareerPageC";
import EmpCorner from "../Pages/EmpCorner";
import ContactPage from "../Pages/ContactPage";
import AdminLogin from "../Pages/Adminlogin";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminProducts from "../Pages/AdminProducts";
import AdminAddProduct from "../Pages/AdminAddProduct";
import { ToastContainer } from "react-toastify";
import AdminUpdateProduct from "../Pages/AdminUpdateProduct";
import AdminAddProject from "../Pages/AdminAddProject";
import AdminProjects from "../Pages/AdminProjects";
import AdminUpdateProject from "../Pages/AdminUpdateProject";

// Blogs
import AdminBlogs from "../Pages/BlogsPages/AdminBlogs";
import AdminAddBlog from "../Pages/BlogsPages/AdminAddBlog";
import AdminUpdateBlog from "../Pages/BlogsPages/AdminUpdateBlog";

// Customers
import AdminCustomers from "../Pages/CustomersPages/AdminCustomers";
import AdminAddCustomer from "../Pages/CustomersPages/AdminAddCustomer";
import AdminUpdateCustomer from "../Pages/CustomersPages/AdminUpdateCustomer";
import AdminProperties from "../Pages/PropertiesPages/AdminProperties";
import AdminAddProperty from "../Pages/PropertiesPages/AdminAddProperty";
import AdminUpdateProperty from "../Pages/PropertiesPages/AdminUpdateProperty";
import AdminEnquiry from "../Pages/EnquiryPages/AdminEnquiry";
import AdminAddEnquiry from "../Pages/EnquiryPages/AdminAddEnquiry";
import AdminUpdateEnquiry from "../Pages/EnquiryPages/AdminUpdateEnquiry";
import AdminWebusers from "../Pages/WebusersPages/AdminWebusers";
import AdminAddWebuser from "../Pages/WebusersPages/AdminAddWebuser";
import AdminUpdateWebuser from "../Pages/WebusersPages/AdminUpdateWebuser";
import IndexPage from "./FrontendUser/Pages/IndexPage";
import About from "./FrontendUser/Pages/About";
import Agents from "./FrontendUser/Pages/Agents";
import Blog from "./FrontendUser/Pages/Blog";
import Contact from "./FrontendUser/Pages/Contact";

// added comment

function App() {
  // Check if token is present in localStorage
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {/* Redirect to Dashboard if token is present, otherwise to Login */}
        <Route
          path="/dashboard"
          element={token ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<AdminLogin />} />
   
        {token && (
          <>
            <Route path="/admin-blogs" element={<AdminBlogs />} />
            <Route path="/admin-blogs/add" element={<AdminAddBlog />} />
            <Route
              path="/admin-blogs/update/:id"
              element={<AdminUpdateBlog />}
            />
            <Route path="/admin-customers" element={<AdminCustomers />} />
            <Route path="/admin-customers/add" element={<AdminAddCustomer />} />
            <Route
              path="/admin-customers/update/:id"
              element={<AdminUpdateCustomer />}
            />
            <Route path="/admin-properties" element={<AdminProperties />} />
            <Route
              path="/admin-properties/add"
              element={<AdminAddProperty />}
            />
            <Route
              path="/admin-properties/update/:id"
              element={<AdminUpdateProperty />}
            />
            <Route path="/admin-enquiry" element={<AdminEnquiry />} />

            <Route path="/admin-enquiry/add" element={<AdminAddEnquiry />} />
            <Route
              path="/admin-enquiry/update/:id"
              element={<AdminUpdateEnquiry />}
            />

            <Route path="/admin-webusers" element={<AdminWebusers />} />

            <Route path="/admin-webusers/add" element={<AdminAddWebuser />} />
            <Route
              path="/admin-webusers/update/:id"
              element={<AdminUpdateWebuser />}
            />

            <Route path="/user-index" element={<IndexPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Agents" element={<Agents />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </>
        )}

        {/* //temp */}
        {/* <Route path="/admin-products" element={<AdminProducts />} />
        <Route path="/admin-products/add" element={<AdminAddProduct />} />
        <Route
          path="/admin-products/update/:id"
          element={<AdminUpdateProduct />}
        />

        <Route path="/admin-projects" element={<AdminProjects />} />
        <Route path="/admin-projects/add" element={<AdminAddProject />} />
        <Route
          path="/admin-projects/update/:id"
          element={<AdminUpdateProject />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
