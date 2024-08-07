/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Password from "../components/common/Password";
import Footer1 from "../components/footer/Footer1";
import Header1 from "../components/header/Header1";

function Login() {
  return (
    <>
      <Header1 />
      <Breadcrumb pageTitle="Login" pageDetails="Login Our Page" />
      <div className="login-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center g-4">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Log In</h3>
                  <p>
                    New Member?{" "}
                    <Link href="/register">
                      <a>signup here</a>
                    </Link>
                  </p>
                </div>
                <form className="w-100">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <Password/>
                   
                    <div className="col-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">
                            I agree to the <a href="#">Terms &amp; Policy</a>
                          </label>
                        </div>
                        <Link href="#">
                         <a  className="forgot-pass"> Forgotten Password</a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="eg-btn btn--primary btn--md w-100">
                        Log in
                      </button>
                    </div>
                  </div>
                </form>
                <div className="alternate-signup-box">
                  <h6>or signup WITH</h6>
                  <div className="btn-group gap-4">
                    <Link
                      href="#"
                      
                    >
                     <a className="eg-btn google-btn d-flex align-items-center">
                     <i className="bx bxl-google" />
                      <span>signup whit google</span>
                     </a>
                    </Link>
                    <Link
                      href="#"
                    
                    >
                      <a  className="eg-btn facebook-btn d-flex align-items-center">
                        <i className="bx bxl-facebook" />
                      signup whit facebook</a>
                    </Link>
                  </div>
                </div>
                <div className="form-poicy-area">
                  <p>
                    By clicking the "signup" button, you create a Cobiro
                    account, and you agree to Cobiro's
                    <a href="#">Terms &amp; Conditions</a> &amp;
                    <a href="#">Privacy Policy.</a>
                  </p>
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

export default Login;
