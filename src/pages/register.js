import Link from "next/link";
import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Password from "../components/common/Password";
import Footer1 from "../components/footer/Footer1";
import Header1 from "../components/header/Header1";
import Sponsor from "../components/sponsor/Sponsor";

function Register() {
  return (
    <>
      <Header1 />
      <Breadcrumb pageDetails="Register Here" pageTitle="Register"/>
      <div className="signup-section pt-120 pb-120">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Register</h3>
                  <p>
                    Do you already have an account?
                    <Link href="/login"><a>Log in here</a></Link>
                  </p>
                </div>
                <form className="w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Frist Name *</label>
                        <input type="email" placeholder="Frist Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Last Name *</label>
                        <input type="email" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Enter Your Email *</label>
                        <input type="email" placeholder="Enter Your Email" />
                      </div>
                    </div>
                    <Password/>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label>Confirm Password *</label>
                        <input
                          type="password"
                          name="cpassword"
                          id="password2"
                          placeholder="Confirm Password"
                        />
                        <i className="bi bi-eye-slash" id="togglePassword2" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                        <div className="form-group">
                          <input type="checkbox" id="html" />
                          <label htmlFor="html">
                            I agree to the Terms &amp; Policy
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button className="eg-btn btn--primary btn--md w-100">
                      Create Account
                    </button>
                  </div>
                </form>
                <div className="alternate-signup-box">
                  <h6>or signup WITH</h6>
                  <div className="btn-group gap-4">
                    <Link
                      href="#"
                      
                    >
                      <a className="eg-btn google-btn d-flex align-items-center"><i className="bx bxl-google" />
                      <span>signup whit google</span></a>
                    </Link>
                    <Link
                      href="#"
                    >
                      <a className="eg-btn facebook-btn d-flex align-items-center"><i className="bx bxl-facebook" />
                      signup whit facebook</a>
                    </Link>
                  </div>
                </div>
                <div className="form-poicy-area">
                  <p>
                    By clicking the signup button, you create a Cobiro
                    account, and you agree to Cobiros{" "}
                    <a href="#">Terms &amp; Conditions</a> &amp;{" "}
                    <a href="#">Privacy Policy.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sponsor />
      <Footer1 />
    </>
  );
}

export default Register;
