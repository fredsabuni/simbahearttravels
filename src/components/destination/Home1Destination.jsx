import Link from "next/link";
import React from "react";
import destionData from "../../data/destination.json";
function Home1Destination() {
  return (
    <div className="destination-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6  col-lg-8 col-md-10 text-center">
            <div className="section-title1">
              <span>Destination</span>
              <h2>Your Desired Destinationn</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="destination-wrap">
          {destionData.slice(0,5).map((data) => {
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
        <div className="row justify-content-center mt-70">
          <div className="col-8 text-center">
            <Link href="/destination">
              <a className="eg-btn btn--primary-outline btn--lg">
                All Destination
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Destination;
