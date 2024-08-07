import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
function Footer1() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const sibling =
    currentRoute === "/index-city-tour" || currentRoute === "/index-city-tour"
      ? "footer-section sibling-2"
      : currentRoute === "/index-travel2"
      ? "footer-section sibling-2"
      : currentRoute == "/index-wildlife"
      ? "footer-section sibling-3"
      : "footer-section";
  return (
    <footer className={sibling}>
      <div className="footer-top">
        <div className="container-xl container-lg-fluid container">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-3 col-md-10 col-sm-6 col-11 order-sm-0 order-1">
              <div className="footer-about">
                <img
                  src="assets/images/icons/footer-plane.svg"
                  className="footer-plane"
                  alt="image"
                />
                <div className="footer1-logo">
                  <img className="logo-resize-mobile" src="assets/images/icons/simba-white.png" alt="image" />
                  <p>Since: 2024</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 400 400"
                >
                  <defs>
                    {/* The text path: see links above regarding coordinate system */}
                    <path
                      d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                      id="txt-path"
                      fill="white"
                    />
                  </defs>
                  <text
                    fill="#DDDDDD"
                    fontSize="35.5"
                    fontFamily="Helvetica Neue"
                    fontWeight={600}
                  >
                    {/* This is the magic */}
                    <textPath startOffset={0} xlinkHref="#txt-path">
                      Simba Heart Travels &nbsp; Simba Heart Travels
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item">
                <h4>Information</h4>
                <ul className="link-list">
                  <li>
                    <Link href="#">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#about-section">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#service-section">
                      <a>Our Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#safari-section">
                      <a>Destination</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              {/* <div className="footer-item">
                <h4>Destinations</h4>
                <ul className="link-list">
                  <li>
                    <Link href="/destination-details">
                      <a>Grand Switzerland</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination-details">
                      <a>Beauty of Paris</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination-details">
                      <a>United States</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination-details">
                      <a>Wiesbaden Sea</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destination-details">
                      <a>Bangladesh</a>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item">
                <h4>Reach Us</h4>
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <i className="bi bi-telephone" />
                    </div>
                    <div className="text">
                      <a href="tel:+18177266036">+1(817)-7266036</a> 
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="text">
                      <a href="mailto:bayanne@simbahearttravels.com">bayanne@simbahearttravels.com</a>
                      <a href="mailto:jambo@simbahearttravels.com"> jambo@simbahearttravels.com </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="text">
                      16 West Martin Street Raleigh, Suite 301 Raleigh, NC 27601
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-meta">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center mb-lg-0 mb-5">
              <h4>Stay Connected:</h4>
              <ul className="footer-social">
                <li>
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/simbahearttravelsoffical?utm_source=qr">
                    <i className="bx bxl-instagram" />
                  </a>
                </li> 
              </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
              <h4>Pay Safely With Us!</h4>
              <ul className="pay-list">
                <li>
                  <img src="assets/images/icons/pay1.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay2.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay3.svg" alt="image" />
                </li>
                <li>
                  <img src="assets/images/icons/pay4.svg" alt="image" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row d-flex align-items-center g-3">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
              <p>
                Copyright 2024{" "}
                <a href="#" className="egns-lab">
                  SimbaHeartTravels{" "}
                </a>{" "}
                | Design By{" "}
                <a
                  href="#"
                  className="egns-lab"
                >
                  Fredy Sabuni
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center align-items-center">
              <ul className="f-bottom-list d-flex jusify-content-start align-items-center">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
