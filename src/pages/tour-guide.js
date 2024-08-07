import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import Sponsor from "../components/sponsor/Sponsor";
// import Home1Sponsor from "../components/sponsor/Sponsor";
import guideData from "../data/guide.json";
function TourGuide() {
  return (
    <Layout>
      <Breadcrumb
        pageTitle="Tour Guide’s"
        pageDetails="Meet Our Excellent Guide’s"
      />
      <div className="guide-section pt-120 pb-120">
        <div className="container">
          <div className="row g-xl-5 g-4 justify-content-center">
            {guideData.map((data) => {
              const { guideName, id, image, title } = data;
              return (
                <div key={id} className="col-lg-4 col-lg-4 col-md-6 col-sm-10">
                  <div className="tour-guide-single sibling-2">
                    <div className="guide-image">
                      <img src={image} className="img-fluid" alt="image" />
                      <div className="social-area">
                        <ul className="guide-social">
                          <li>
                            <a href="https://www.facebook.com/">
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.twitter.com/">
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/">
                              <i className="bx bxl-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.pinterest.com/">
                              <i className="bx bxl-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="guide-contnent">
                      <h4>
                        <Link href="/tour-guide">{guideName}</Link>
                      </h4>
                      <p>{title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Sponsor/>
    </Layout>
  );
}

export default TourGuide;
