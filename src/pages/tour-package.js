import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import packageData from "../data/tourCard.json";
function TourPackage() {
  return (
    <Layout>
      <Breadcrumb
        pageDetails="Get The Best Plans For Your’s"
        pageTitle="Choose Your Tous"
      />
      <div className="blog-grid-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {packageData.map((data) => {
              const { id, image, regularPrice, title, date, rating, review } =
                data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="best-plan-single1">
                    <div className="image">
                      <img src={image} className="img-fluid" alt="image" />
                    </div>
                    <div className="content">
                      <p>From ${regularPrice}</p>
                      <h4>
                        <Link href="/tour-package-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="best-plan-meta">
                        <span className="duration">
                          <i className="bi bi-clock" />
                          {date}
                        </span>
                        <span className="rating">
                          <i className="bi bi-star-fill" />
                          {rating} ({review})
                        </span>
                      </div>
                      <div className="list-area">
                        <h5>Free Package Facility:</h5>
                        <ul className="plan-list1">
                          <li>Free Best Tour Guided</li>
                          <li>Free Messages</li>
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
    </Layout>
  );
}

export default TourPackage;
