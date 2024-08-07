import React from "react";

function InfoSection() {
  return (
    <div className="info-section pt-120 pb-120" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 col-sm-12">
            <div className="info-title-area">
              <h3>Talk to us</h3>
              <p>
              At Simba Heart Travels, we are here to assist you with all your travel needs. 
              Whether you have questions about our services, need assistance with booking, 
              or want to customize your dream vacation, our dedicated team is ready to help
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="info-text">
                <h3>Address</h3>
                <p> 16 West Martin Street Raleigh, Suite 301 Raleigh, NC 27601 </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>Call Us!</h3>
                <a href="tel:+18177266036">+1(817)-7266036</a> 
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-envelope" />
              </div>
              <div className="info-text">
                <h3>Email Info</h3>
                <a href="mailto:bayanne@simbahearttravels.com">bayanne@simbahearttravels.com</a>
                <a href="mailto:jambo@simbahearttravels.com"> jambo@simbahearttravels.com </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
