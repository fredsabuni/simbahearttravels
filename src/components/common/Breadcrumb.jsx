import { useRouter } from "next/router";
import React from "react";

function Breadcrumb({ pageTitle, pageDetails, reviewCount }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div
      className={
        currentRoute === "/tour-package-details"
          ? "inner-banner-section sibling-2"
          : "inner-banner-section"
      }
    >
      <img
        src="assets/images/bg/inner-banner-vctr.png"
        className="inner-banner-vector"
        alt="image"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="breadcrumb-area">
              <span>{pageTitle}</span>
              <h2>{pageDetails}</h2>
              {currentRoute === "/blog-details" ? (
                <div className="review-area">
                  <ul className="breadcrumb-meta-list">
                    <li> May 6, 2022</li>
                    <li>Victor Thornton</li>
                    <li> Comments: 02</li>
                  </ul>
                </div>
              ) : currentRoute === "/destination-details" ||
                currentRoute === "/tour-package-details" ? (
                <div className="review-area">
                  <ul className="star-list">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <span>({reviewCount} Review)</span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
