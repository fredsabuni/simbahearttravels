import React from "react";

function ContactForm() {
  return (
    <div className="contact-section pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="section-title1">
              <span>Reservation Form</span>
              <h2>Let’s Get in Touch</h2>
              <img
                src="assets/images/icons/section-title-vector.svg"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-from-wrapper">
              {/* <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Your Name:" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input type="text" placeholder="Your Phone Number:" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Type Your Subject:" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Type Your Message..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>  */}
              <iframe
                src="https://share.hsforms.com/1z7kXa4qtTvuiV9TvVeKvGwqtqks"
                width="100%"
                height="600px"
                frameBorder="0"
                scrolling="no"
                title="Contact Form"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
