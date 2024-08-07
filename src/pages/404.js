import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Footer1 from "../components/footer/Footer1";
import Header1 from "../components/header/Header1";

function CustomError() {
  return (
    <>
      <Header1 />
      <Breadcrumb
        pageDetails="Well It Seems That This Site Is Missing?"
        pageTitle="404 Error Page"
      />
      <div className="error-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-10 col-sm-12 text-center">
              <div className="error-wrapper">
                <div className="error-image">
                  <img
                    src="assets/images/bg/404-image.png"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="error-text">
                  <p>
                    The page you are looking for might have been removed had its
                    name changed or is temporarily unavailable.
                  </p>
                  <Link href="/">
                    <a className="eg-btn btn--primary btn--lg">Back To Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default CustomError;
