import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/CSS/Index.css";
import "../Assets/CSS/About.css";
import { getPropertyList1 } from '../../services/property.service';
import { OptionsPropertyTypeEnum } from '../../../Pages/enums/property.enum';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';


function Buy(props) {

    const [propertList, setPropertyListState] = useState();
        const [propertListFiltered, setPropertyListFilteredState] = useState();


    useEffect(()=> {
      getRecommendedProperties();          
    }, []);

      const location = useLocation();
  const filterData = location.state;
  console.log(" ->> filterData", filterData)


    async function getRecommendedProperties() {
    
        try {
            const propertyList = await getPropertyList1();
            const data = propertyList.data; // await res.json()
            console.log(data);

            if (data.length) {
            console.log("recommended properties list", data);
            setPropertyListState(data);
            setPropertyListFilteredState(data);
            console.log('propertList-> ', propertList);
            }
        }catch(e) {}
    };

    const [filter, setFilter] = useState({
    propertyType: '',
    property: 'Buy',
    priceRange: ''
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

const isPriceInRange = (price, priceRange) => {
  if (!priceRange) return true; // If no price range selected, return true

  if(priceRange === '$300,000+') return price >= '300000';

  const [min, max] = priceRange.split(' - ');
  const minPrice = parseInt(min.replace('$', '').replace(',', ''));
  const maxPrice = max === "$300,000+" ? Infinity : parseInt(max.replace('$', '').replace(',', ''));
  return price >= minPrice && price <= maxPrice;
};

  // Function to filter properties based on selected criteria
  const filterProperties = () => {
    // Apply filtering logic here
    // For example:
    const filteredProperties = propertList?.filter(property => {
      return (
        (!filter?.propertyType || property.propertyType === (filter?.propertyType ?? '')) &&
        (!filter?.property || property.property === (filter?.property ?? '')) &&
        (!filter?.priceRange || isPriceInRange(property.price, (filter?.priceRange ?? '')))
      );
    });
    setPropertyListFilteredState(filteredProperties)
    // Use the filteredProperties array for further processing (e.g., rendering)
  };

  useEffect(()=> {
    setFilter(filterData);
    console.log('new Filter', filterData)
    // handleInputChange
    filterProperties()
  }, [filterData, propertList, setPropertyListState])

  // Convert enum values to an array of objects for easy mapping
  const OptionsPropertyTypeArray = Object.keys(OptionsPropertyTypeEnum).map(
    (key) => ({
      value: key,
      label: OptionsPropertyTypeEnum[key],
    })
  );

  
  return (
    <>
    <Navbar />
   <section className="aboutus-sec">
    <div className="about-us-child">
      <div className="container">
        <div className="about-head">

          <h2>Buy, Sale & Rent</h2>
          <div className="subtitle">
            <a href="./Index.html">Home</a>
            <span> / Buy, Sale & Rent</span>
          </div>

        </div>
      </div>
    </div>
  </section>
  <section className="buy-sale-rent-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-3">
          <div className="search-form">
            <div className="search-head">
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="search"> Search for</div>
            </div>
            <input type="text" className="form-input" placeholder="Search of Properties"/>
            <div className="propertis-sec">
              <div className="row">
                <div className="col-lg-5">
                  <select className="form-input add-padding" name="property" value={filter?.property ?? 'Buy'} onChange={handleInputChange}>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
                <div className="col-lg-7">
                  <select className="form-input " name="priceRange" value={filter?.priceRange ?? ''} onChange={handleInputChange}>
                    <option value="1">Price</option>
                    <option value="$150,000 - $200,000">$150,000 - $200,000</option>
                    <option value="$200,000 - $250,000">$200,000 - $250,000</option>
                    <option value="$250,000 - $300,000">$250,000 - $300,000</option>
                    <option value="$300,000+">$300,000 - above</option>
                  </select>

                </div>

                <div className="col-12">
                  <select className="form-input add-margin " name="propertyType" value={filter?.propertyType ?? ''} onChange={handleInputChange}>
                   
                    {OptionsPropertyTypeArray.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}

                  </select>
                </div>

                <div className="col-12">
                  <button className="find-btn" onClick={filterProperties}>
                    <a href="#">Find Now</a>
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="hot-properties-sec">
            <div className="search-head">
              <div className="search"> Hot Properties</div>
            </div>
            <div className="properits-1">
              <div className="row">
                <div className="col-lg-4">
                  <div className="img1">
                    <img className="img-fluid" src="./Assets/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                  </div>
                </div>
                <div className="col-lg-8">
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
                <div className="col-lg-4">
                  <div className="img1">
                    <img className="img-fluid" src="./Assets/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                  </div>
                </div>
                <div className="col-lg-8">
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
                <div className="col-lg-4">
                  <div className="img1">
                    <img className="img-fluid" src="./Assets/Images/Hot-Properties-1.jpg" alt="Hot-Properties-1"/>
                  </div>
                </div>
                <div className="col-lg-8">
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
        </div>
        <div className="col-lg-9 col-sm-9">

          <div className="sort-properties">
            <h3 className="showing-nm">
              Showing: 12 of 100
            </h3>
            <select className="form-input">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <div className="main-properties">
            <div className="row">
              {!!propertListFiltered && propertListFiltered.map((property) => (<div className="col-xl-4 col-sm-6">
                <div className="properties">
                  <div className="image-holder1">
                    <img src="./Assets/Images/Propeties-img1.jpg" alt="Propeties-img1" className="w-100"/>
                 
                  </div>
                  <h4 className="royal-head">
                    <a href="#">{property.name}</a>
                  </h4>
                  <p className="price">Price: ${property.price}</p>
                  <div className="listing-detail">
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Bed Room">5
                      <div className="tool">
                        Bed Room
                      </div>
                    </span>
                    <span data-toggle="tooltip" data-placement="bottom" data-original-title="Living Room">2
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
                  <button className="view-detail">
                    <a href="./PropertyDetail.html">View Details</a>
                  </button>
                </div>
              </div>
              ))}
              
              
            </div>
          </div>
   <div className="pagination-section">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="fa-solid fa-angles-left right-ar"  ></i> </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
    
        <li className="page-item">
          <a className="page-link" href="#">
            <i className="fa-solid fa-angles-right"></i> </a>
        </li>
      </ul>
    </nav>
   </div>
        </div>
      </div>
    </div>
  </section>
    <Footer />
    </>
  );
}

export default Buy;
