import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import destinationData from "../data/destination.json";
function Destination() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Destination"
        pageDetails="Find Your Desire Destination"
      />
      <div className="destination-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6  col-lg-8 col-md-10 text-center">
              <div className="section-title1">
                <span>Destination</span>
                <h2>Find Your Desire Destination</h2>
                <img
                  src="assets/images/icons/section-title-vector.svg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="destination-wrap flex-wrap">
            {destinationData.map((data) => {
              const { id, image, destination, numberOfPlace } = data;
              return (
                <div key={id} className="destination-single1">
                  <img
                    src={image}
                    className="destination-img img-fluid"
                    alt="image"
                  />
                  <div className="content">
                    <div className="text-wrap">
                      <h4>
                        <Link href="/destination-details">
                          <a>{destination}</a>
                        </Link>
                      </h4>
                      <p>{numberOfPlace} Tours Place</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Destination;
