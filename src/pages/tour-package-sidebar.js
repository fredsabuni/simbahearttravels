import Link from "next/link";
import React, { useState } from "react";
import Select from "react-select";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import PriceRange from "../components/package/PriceRange";
import offerData from "../data/offer.json";
function TourPackageSidebar() {
  const [sidebarSearch, setSidebarSearch] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSidebarSearch= ()=>{
    if (sidebarSearch === false || sidebarSearch === 0) {
      setSidebarSearch(1);
    } else {
      setSidebarSearch(false);
    }
  }
  const tourTypeOptions = [
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "America", label: "America" },
    { value: "Australia", label: "Australia" },
    { value: "Africa", label: "Africa" },
    { value: "Oceania", label: "Oceania" },
    { value: "Antarctica", label: "Antarctica" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-12px",
      border: "1px solid #eee",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#09100d",
    }),
  };
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Choose Your Tous"
        pageDetails="Get The Best Plans For Your’s"
      />
      <div className="destination-details-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 d-lg-block d-none">
              <div className="tour-package-sidebar">
                <div className="sidebar-search mb-35">
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tour-package-widget">
                  <h4 className="package-widget-title">Choose Continent</h4>
                  <div className="select-widget">
                    <Select
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        padding: 0,
                        colors: {
                          ...theme.colors,
                          primary: "#90b956",
                        },
                      })}
                      styles={customStyles}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      width="300px"
                      menuColor="#333"
                      defaultValue={selectedOption}
                      options={tourTypeOptions}
                      placeholder="Select Package"
                    />
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="tour-package-widget">
                  <h4 className="package-widget-title">Price Range (USD)</h4>
                  <div className="range-widget">
                    <div id="slider-range" className="price-filter-range" />
                      <PriceRange color="#90B956" width="380px"/>
                    
                  </div>
                </div>
                <div className="tour-package-widget">
                  <div className="check-box-item">
                    <h5>Tour Type</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        Family
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Honeymoon
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Adventre
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Cruise
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Beach
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="check-box-item">
                    <h5>Tour Duration</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        Upto 2 Nights
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        3 To 6 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        6 To 9 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        9 To 12 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Above 12 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="check-box-item mb-0">
                    <h5>Filter By Review</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <span className="ms-1">(9005)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(406)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(205)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(130)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(25)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={sidebarSearch ? "tour-package-sidebar-mobile show":"tour-package-sidebar-mobile"}>
                <div className="package-sidebar-close" onClick={handleSidebarSearch} style={{cursor: "pointer"}}>
                  <i className="bi bi-x-circle" />
                </div>
                <div className="sidebar-search mb-35">
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Search" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="tour-package-widget">
                  <h4 className="package-widget-title">Choose Continent</h4>
                  <div className="select-widget">
                    <Select
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        padding: 0,
                        colors: {
                          ...theme.colors,
                          primary: "#90b956",
                        },
                      })}
                      styles={customStyles}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      width="300px"
                      menuColor="#333"
                      defaultValue={selectedOption}
                      options={tourTypeOptions}
                      placeholder="Select Package"
                    />
                    <div className="clearfix" />
                  </div>
                </div>
                <div className="tour-package-widget">
                  <h4 className="package-widget-title">Price Range (USD)</h4>
                  <div className="range-widget">
                    
                    <PriceRange color="#90B956"/>
                  </div>
                </div>
                <div className="tour-package-widget">
                  <div className="check-box-item">
                    <h5>Tour Type</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        Family
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Honeymoon
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Adventre
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Cruise
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Beach
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="check-box-item">
                    <h5>Tour Duration</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        Upto 2 Nights
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        3 To 6 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        6 To 9 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        9 To 12 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="container">
                        Above 12 Nights
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="check-box-item mb-0">
                    <h5>Filter By Review</h5>
                    <div className="checkbox-container">
                      <label className="container">
                        <input type="checkbox" defaultChecked="checked" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <span className="ms-1">(99905)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(40006)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(2005)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(130)</span>
                      </label>
                      <label className="container">
                        <input type="checkbox" />
                        <span className="checkmark" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <i className="bi bi-star" />
                        <span className="ms-1">(25)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-lg-none d-flex">
                <div className="col-12">
                  <div className="package-filter-area text-end">
                    <h4>Filter Package</h4>
                    <div className="filter-button" onClick={handleSidebarSearch} style={{cursor: "pointer"}} >
                      <img
                        src="assets/images/icons/filter-icon.svg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                {offerData.map((data) => {
                  const {
                    id,
                    standardImg,
                    offerPercentage,
                    rateing,
                    title,
                    regularPrice,
                    offerPrice,
                  } = data;
                  return (
                    <div key={id} className="col-lg-12 col-md-6">
                      <div className="tour-package-standard">
                        <div className="tour-standard-image">
                          <span className="favourite">
                            <i className="bi bi-suit-heart-fill" />
                          </span>
                          <span className="discount-bagde">
                            {offerPercentage}%
                          </span>
                          <img
                            src={standardImg}
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                        <div className="tour-standard-content">
                          <div className="review-area">
                            <ul className="star-list">
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-fill" />
                              </li>
                              <li>
                                <i className="bi bi-star-half" />
                              </li>
                            </ul>
                            <span>({rateing} Review)</span>
                          </div>
                          <h4>
                            <Link href="/tour-package-details">
                              <a>{title}</a>
                            </Link>
                          </h4>
                          <div className="price">
                            <span>From ${offerPrice}</span>
                            <del>/S{regularPrice}</del>
                          </div>
                          <div className="list-area">
                            <h5>Free Package Facility:</h5>
                            <ul className="plan-list1">
                              <li>Free Best Tour Guided</li>
                              <li>No Booking Charge</li>
                              <li>Best Rate Gurantee</li>
                            </ul>
                          </div>
                          <Link href="/tour-package-details">
                            <a className="eg-btn btn--primary-outline btn--md">
                              Explorer Now
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <nav className="pagination-wrap pt-50">
                    <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                      <li className="page-item">
                        <a className="page-link" href="#" tabIndex={-1}>
                          <i className="bi bi-arrow-left" /> PREV
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          NEXT <i className="bi bi-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TourPackageSidebar;
